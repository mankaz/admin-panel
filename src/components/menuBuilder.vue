<template>
  <div class="p-1">
    <div class="columns is-centered">
      <div class="column has-text-centered is-7">
        <div class="card">
          <header class="card-header">

            <p class="card-header-title">
              <b-icon icon="file-tree"></b-icon>
              ساختار منو
            </p>
            <span class="card-header-icon" aria-label="more options">
      <span class="icon">
        <b-tooltip label="می توانید با کشیدن و رها کردن مکان قرارگیری منو و زیرمنو را مشخص نمایید"
                   position="is-right"
                   :active="active">
                    <b-icon icon="swap-vertical"> </b-icon>
                  </b-tooltip>
              <b-tooltip label="برای حذف بر روی گزینه مورد نظر کلیک راست کنید"
                         position="is-right"
                         :active="active">
                    <b-icon icon="trash-can-outline"> </b-icon>
                  </b-tooltip>
      </span>
                  </span>
          </header>
          <div class="card-content">
            <div class="content">
              <div @click="contextMenuIsVisible = false">
                <!--                <div class="last-event row">-->
                <!--                  Last event: {{ lastEvent }}-->
                <!--                </div>-->
                <!--                <div class="json-preview">-->
                <!--                  <pre>{{ JSON.stringify(nodes, null, 4)}}</pre>-->
                <!--                </div>-->
                <b-field>

                </b-field>
                <div class="">
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
            <i v-if="!node.isExpanded" class="fa fa-chevron-left"></i>
          </span>
                      </template>
                      <!--                            <template slot="sidebar" slot-scope="{ node }">-->
                      <!--          <span class="visible-icon" @click="event => toggleVisibility(event, node)">-->
                      <!--            <i v-if="!node.data || node.data.visible !== false" class="fa fa-eye"></i>-->
                      <!--            <i v-if="node.data && node.data.visible === false" class="fa fa-eye-slash"></i>-->
                      <!--          </span>-->
                      <!--                            </template>-->

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
          </div>
        </div>
      </div>
      <div class="column has-text-centered is-5">
        <div class="card">
          <header class="card-header">

            <p class="card-header-title">
              <b-icon icon="plus-box-outline"></b-icon>
              افزودن گزینه به منو
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
      </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <b-menu class="menu-collapse">
                <b-menu-list>

                  <b-menu-item icon="settings">

                    <template slot="label" slot-scope="props">
                      پست ها
                      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                    </template>
                    <childTab></childTab>
                    <b-button class="confirmBtn" @click="serialize" size="is-small" type="is-success">افزودن به منو
                    </b-button>
                  </b-menu-item>
                  <b-menu-item icon="settings">
                    <template slot="label" slot-scope="props">
                      پیوند دلخواه
                      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                    </template>
                    <b-field label="نشانی اینترنتی">
                      <b-input v-model="name"></b-input>
                    </b-field>
                    <b-field label="متن پیوند">
                      <b-input v-model="linkName"></b-input>
                    </b-field>
                    <b-button class="confirmBtn" @click="addLink" size="is-small" type="is-success">افزودن به منو
                    </b-button>

                  </b-menu-item>
<!--                  <b-menu-item icon="settings">-->
<!--                    <template slot="label" slot-scope="props">-->
<!--                      وضعیت و مشاهده پذیری-->
<!--                      <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>-->
<!--                    </template>-->
<!--                    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">-->
<!--                      <div class="column">-->
<!--                        <StatusVisibility class="categories-select"></StatusVisibility>-->
<!--                      </div>-->

<!--                    </div>-->
<!--                    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">-->
<!--                      <div class="column">-->
<!--                      </div>-->
<!--                      <div class="column">-->
<!--                        <datepicker></datepicker>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-8-fullhd">-->
<!--                      <div class="column waiting">-->
<!--                        <div class="field">-->
<!--                          <b-checkbox>در انتظار بررسی</b-checkbox>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </b-menu-item>-->
                </b-menu-list>
              </b-menu>
            </div>
          </div>
        </div>
        <div class="menu-register">
          <label class="label lable-group"><b-icon icon="check"></b-icon>تأیید و ثبت منو</label>
          <b-input placeholder="عنوان منو" size="is-small" icon="account"></b-input>
          <div class="buttons btn-register">
            <b-button type="is-success" class="btn" expanded>ذخیره منو</b-button>
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
  import collapse from "./collapse";
  import mixin from "../mixin.js"
  import childTab from "./childTab";

  export default {

    data() {
      return {

        // nodes:[
        //
        // ],
        // dataNodes: [
        //   {
        //     title: 'kalam 🥦',
        //     isExpanded: true
        //   },
        //   {
        //     title: 'pear 🍐',
        //     isLeaf: true,
        //     data: {visible: false}
        //   },
        //   {
        //     title: 'Grapes 🍇'
        //   },
        //   {
        //     title: 'karrot 🥕',
        //     isExpanded: true,
        //   }
        // ],

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

      // toggleVisibility: function (event, node) {
      //   const slVueTree = this.$refs.slVueTree;
      //   event.stopPropagation();
      //   const visible = !node.data || node.data.visible !== false;
      //   slVueTree.updateNode(node.path, {data: {visible: !visible}});
      //   this.lastEvent = `Node ${node.title} is ${visible ? 'visible' : 'invisible'} now`;
      // },

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

    components: {
      collapse, categoriesName, categoriesSelectList, categoriesCheckbox, StatusVisibility, datepicker, childTab
    },

    mixins: [mixin]
  }
</script>


<style>


  .row {
    display: flex;
    margin-bottom: 10px;
  }

  .contextmenu {
    position: inherit;
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

  .sl-vue-tree-selected > .sl-vue-tree-node-item {

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
