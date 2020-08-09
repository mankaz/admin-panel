<template>
  <div class="is-variable is-0">
    <div class="column  is-10-desktop is-9-tablet  is-12-mobile">
      <div class="p-1">
        <div class="box">
          <div class="column">
            <label class="label lable-group">
              <b-icon icon="calendar-clock"></b-icon>
              تعیین زمان نمایش</label>
          </div>
          <div class="columns is-centered">
            <div class="column has-text-centered is-5">

              <div @click="contextMenuIsVisible = false">

<!--                <div class="last-event row">-->
<!--                  Last event: {{ lastEvent }}-->
<!--                </div>-->
<!--                <div class="json-preview">-->
<!--                  <pre>{{ JSON.stringify(nodes, null, 4)}}</pre>-->
<!--                </div>-->
                <b-field>
                  <b-input placeholder="عنوان منو" size="is-medium" icon="account" ></b-input>
                </b-field>
                <div class="box">
                  <div class="tree-container">
                    <sl-vue-tree
                      v-model="nodes"
                      ref="slVueTree"
                      :allow-multiselect="true"
                      @select="nodeSelected"
                      @drop="nodeDropped"
                      @toggle="nodeToggled"
                      @nodecontextmenu="showContextMenu"
                    >
                      <template slot="title" slot-scope="{ node }">
          <span class="item-icon">
            <i class="fa fa-file" v-if="node.isLeaf"></i>
            <i class="fa fa-folder" v-if="!node.isLeaf"></i>
          </span>

                        {{ node.title }}
                      </template>
                      <template slot="toggle" slot-scope="{ node }">
          <span v-if="!node.isLeaf">
            <i v-if="node.isExpanded" class="fa fa-chevron-down"></i>
            <i v-if="!node.isExpanded" class="fa fa-chevron-right"></i>
          </span>
                      </template>
                      <template slot="sidebar" slot-scope="{ node }">
          <span class="visible-icon" @click="event => toggleVisibility(event, node)">
            <i v-if="!node.data || node.data.visible !== false" class="fa fa-eye"></i>
            <i v-if="node.data && node.data.visible === false" class="fa fa-eye-slash"></i>
          </span>
                      </template>

                      <template slot="draginfo">
                        {{selectedNodesTitle}}
                      </template>

                    </sl-vue-tree>
                  </div>


                  <div class="contextmenu" ref="contextmenu" v-show="contextMenuIsVisible">
                    <div @click="removeNode">حذف</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column has-text-centered is-5">
              <div class="box">

                <b-menu class="menu-collapse">
                  <b-menu-list>
                    <b-menu-item icon="settings" >
                      <template slot="label" slot-scope="props">
                        برچسب ها
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                      </template>

                      <div class="field categories-checkbox" v-for="(list , index) in dataNodes" :key="list.id">
<!--                        <label>{{list.title}}</label>-->
<!--                        <input id="check" type="checkbox" :name="list.text"  :value="list" />-->
                        <div class="field b-checkbox checkbox"> <b-checkbox :native-value="list" :value="false" :name="list.text" type="is-info"> {{list.title}} </b-checkbox>
                        </div>

                      </div>
                      <b-button @click="serialize" size="is-small" type="is-success">افزودن به منو</b-button>

                    </b-menu-item>
                    <b-menu-item icon="settings" >
                      <template slot="label" slot-scope="props">
                        دسته ها
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                      </template>
                      <div>
                        <categoriesCheckbox></categoriesCheckbox>

                      </div>
                      <label class="label lable-group">افزودن گروه جدید  <b-icon icon="expand-all-outline"></b-icon></label>
                      <categoriesName class="categories-name"></categoriesName>
                      <categoriesSelectList class="categories-select"></categoriesSelectList>
                      <b-button type="is-success" class="categoriesBtn">افزودن دسته جدید</b-button>
                    </b-menu-item>
                    <b-menu-item icon="settings" >
                      <template slot="label" slot-scope="props">
                        وضعیت و مشاهده پذیری
                        <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                      </template>
                      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">
                        <div class="column">
                          <StatusVisibility class="categories-select"></StatusVisibility>
                        </div>

                      </div>
                      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">
                        <div class="column">
                        </div>

                        <div class="column">
                          <datepicker></datepicker>
                        </div>
                      </div>

                      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">

                        <div class="column waiting">
                          <div class="field">
                            <b-checkbox>در انتظار بررسی  </b-checkbox>
                          </div>
                        </div>
                      </div>
                    </b-menu-item>
                  </b-menu-list>

                </b-menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



  import categoriesName from "./categoriesName";
  import categoriesSelectList from "./categoriesSelectList"
  import categoriesCheckbox from "./categoriesCheckbox"
  import StatusVisibility from "./StatusVisibility"
  import datepicker from "./datePicker";
import  mixin from "../mixin"
  export default {

    data() {
      return {

        nodes:[

        ],
        dataNodes: [
          {
            title: 'kalam 🥦',
            isExpanded: true
          },
          {
            title: 'pear 🍐',
            isLeaf: true,
            data: {visible: false}
          },
          {
            title: 'Grapes 🍇'
          },
          {
            title: 'karrot 🥕',
            isExpanded: true,
          }
        ],

        contextMenuIsVisible: false,
        lastEvent: 'No last event',
        selectedNodesTitle: '',
      }

    },
    mounted() {
      // expose instance to the global namespace
      window.slVueTree = this.$refs.slVueTree;
    },
    methods: {

//       serialize() {
//
//         let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
//
//         for (let i = 0; i < checkboxes.length; i++) {
// alert(checkboxes[i]._value)
//           console.log(JSON.stringify(checkboxes[i]._value))
//           JSON.stringify(this.nodes.push(checkboxes[i]._value))
//         }
//       },
      toggleVisibility: function (event, node) {
        const slVueTree = this.$refs.slVueTree;
        event.stopPropagation();
        const visible = !node.data || node.data.visible !== false;
        slVueTree.updateNode(node.path, {data: {visible: !visible}});
        this.lastEvent = `Node ${node.title} is ${visible ? 'visible' : 'invisible'} now`;
        // addFind: function () {
        //   this.fruit.push({ id: '', name:'',link:'' });
        // },
        // removeRow(index){
        //   this.fruit.splice(index); // why is this removing only the last row?
        //
      },

      nodeSelected(nodes, event) {
        this.selectedNodesTitle = nodes.map(node => node.title).join(', ');
        this.lastEvent = `Select nodes: ${this.selectedNodesTitle}`;
      },

      nodeToggled(node, event) {
        this.lastEvent = `Node ${node.title} is ${node.isExpanded ? 'expanded' : 'collapsed'}`;
      },

      nodeDropped(nodes, position, event) {
        this.lastEvent = `Nodes: ${nodes.map(node => node.title).join(', ')} are dropped ${position.placement} ${position.node.title}`;
      },

      showContextMenu(node, event) {
        event.preventDefault();
        this.contextMenuIsVisible = true;
        const $contextMenu = this.$refs.contextmenu;
        $contextMenu.style.left = event.clientX + 'px';
        $contextMenu.style.top = event.clientY + 'px';
      },

      removeNode() {
        this.contextMenuIsVisible = false;
        const $slVueTree = this.$refs.slVueTree;
        const paths = $slVueTree.getSelected().map(node => node.path);
        $slVueTree.remove(paths);
      }
    },

    components : {
      categoriesName,categoriesSelectList,categoriesCheckbox,StatusVisibility,datepicker
    },

 mixins :[mixin]
  }
</script>


<style>


  .row {
    display: flex;
    margin-bottom: 10px;
  }

  .contextmenu {
    position: absolute;
    background-color: #ff705e;
    color: #efd97d;
    border-radius: 2px;
    cursor: pointer;
  }

  .contextmenu > div {
    padding: 10px;
  }

  .contextmenu > div:hover {
    background-color: rgba(100, 100, 255, 0.5);
  }

  .last-event {
    color: white;
    background-color: rgba(100, 100, 255, 0.5);
    padding: 10px;
    border-radius: 2px;
  }
  .sl-vue-tree-node:hover {
    background-color: rgba(151, 179, 255, 0.98) !important;

  }
  .sl-vue-tree-selected > .sl-vue-tree-node-item{

  background-color: #3273dc !important;
}
  .tree-container {
    flex-grow: 1;
  }

  .sl-vue-tree.sl-vue-tree-root {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    height: 300px;
    background-color: #ffffff !important;
    border: none !important;
    color: #4a4a4a;
  }


  .json-preview {
    flex-grow: 1;
    margin-left: 10px;
    background-color: #13242d;
    border: 1px solid black;
    padding: 10px;
  }

  .item-icon {
    display: inline-block;
    text-align: left;
    width: 20px;
  }


</style>
