<template>
  <div class="is-variable is-0">
    <div class="column  is-10-desktop is-9-tablet  is-12-mobile">
      <div class="p-1">
        <div class="box">
<!--  <div v-for="(find , index) in fruit" :key="index" >-->
<!--    <div class="column">-->
<!--      <label class="label lable-group"><b-icon icon="calendar-clock"></b-icon>ساخت منوی جدید</label>-->
<!--    </div>-->
<!--    <div class="columns menu-builder">-->
<!--      <div class="column has-text-centered is-4">-->
<!--        <b-field>-->
<!--          <b-input placeholder="عنوان منو" size="is-small" icon="account"  v-model="find.id"></b-input>-->
<!--        </b-field>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="columns menu-builder">-->
<!--      <div class="column has-text-centered is-4">-->
<!--        <b-field>-->
<!--          <b-input placeholder="نام آیتم منو" size="is-small" icon="account"  v-model="find.name"></b-input>-->
<!--        </b-field>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="columns menu-builder">-->
<!--      <div class="column has-text-centered is-4">-->
<!--        <b-field>-->
<!--          <b-input placeholder="لینک" size="is-small" icon="account"  v-model="find.link"></b-input>-->
<!--        </b-field>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="columns menu-builder">-->
<!--      <div class="column has-text-centered is-4">-->
<!--        <select :disabled='isDisabled'>-->
<!--          <option v-for="(find , index) in fruit" :value="id">-->
<!--            {{find.name}}-->
<!--          </option>-->
<!--        </select>-->
<!--        <input type='checkbox' v-model='submenu' />-->
<!--        <button @click="addFind">-->
<!--          New Find-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->

<!--&lt;!&ndash;    <select :disabled="disabled == 1">&ndash;&gt;-->
<!--&lt;!&ndash;      <option v-for="(find , index) in fruit" :value="id">&ndash;&gt;-->
<!--&lt;!&ndash;        {{find.name}}&ndash;&gt;-->
<!--&lt;!&ndash;      </option>&ndash;&gt;-->
<!--&lt;!&ndash;    </select>&ndash;&gt;-->
<!--&lt;!&ndash;    <button @click="addFind">&ndash;&gt;-->
<!--&lt;!&ndash;      New Find&ndash;&gt;-->
<!--&lt;!&ndash;    </button>&ndash;&gt;-->
<!--&lt;!&ndash;    <input type="text" placeholder="Text" v-model="find.children[0].id">&ndash;&gt;-->

<!--  </div>-->

<!--  <select>-->
<!--    <option v-for="(find , index) in fruit" :value="id">-->
<!--      {{find.name}}-->
<!--    </option>-->
<!--  </select>-->
<!--  <button @click="addFind">-->
<!--    New Find-->
<!--  </button>-->
<!--  <button v-on:click= "removeRow"> X </button>-->

<!--  <pre>{{ $data }}</pre>-->

  <div  @click="contextMenuIsVisible = false">

    <div class="last-event row">
      Last event: {{ lastEvent }}
    </div>

    <div class="row">
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


      <div class="json-preview">
        <pre>{{ JSON.stringify(nodes, null, 4)}}</pre>
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
</template>

<script>

  export default {

    data() {

      var nodes = [
        {
          title: 'سلام دنیا',
          isExpanded: true
        },
        {
          title: 'Item2',
          isLeaf: true,
          data: { visible: false }
        },
        {
          title: 'سلام دنیا2'
        },
        {
          title: 'Folder2',
          isExpanded: true,
        }
      ];
      return {

        nodes: nodes,
        contextMenuIsVisible: false,
        lastEvent: 'No last event',
        selectedNodesTitle: ''
        // submenu: false,
        // //fruit : [{ id: '', name:'',link:'' }],
        // //   {
        // //     id: '1',
        // //     name: 'pear 🍐'
        // //   },
        // //   {
        // //     id: '2',
        // //     name: 'Grapes 🍇'
        // //   }],
        // // vegetable: [
        // //   {
        // //     id: '1',
        // //     name: 'kalam 🥦'
        // //   },
        // //   {
        // //     id: '2',
        // //     price: 'karrot 🥕'
        // //   }
        //
        //
        // fruit: [ {
        //   id: '',
        //   name: '',
        //   link:'',
        //   children: [ {
        //     id: '',
        //     name: '',
        //     link:'',
        //   }],
        // }],
        //


      }
    },
    mounted() {
      // expose instance to the global namespace
      window.slVueTree = this.$refs.slVueTree;
    },
    methods: {
      toggleVisibility: function (event, node) {
        const slVueTree = this.$refs.slVueTree;
        event.stopPropagation();
        const visible = !node.data || node.data.visible !== false;
        slVueTree.updateNode(node.path, {data: { visible: !visible}});
        this.lastEvent = `Node ${node.title} is ${ visible ? 'visible' : 'invisible'} now`;
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
        this.lastEvent = `Node ${node.title} is ${ node.isExpanded ? 'expanded' : 'collapsed'}`;
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
    // computed: {
    //   isDisabled: function(){
    //     return !this.submenu;
    //   }
    // },

  }
</script>


<style>


  .row {
    display: flex;
    margin-bottom: 10px;
  }

  .contextmenu {
    position: absolute;
    background-color: white;
    color: black;
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

  .tree-container {
    flex-grow: 1;
  }

  .sl-vue-tree.sl-vue-tree-root {
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    height: 300px;
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






<!--<template>-->
<!--  <div>-->
<!--    <div v-for="(find , index) in finds" v-bind:key="index">-->
<!--      <input v-model="find.value">-->
<!--    </div>-->
<!--    <button @click="addFind">-->
<!--      New Find-->
<!--    </button>-->
<!--    <pre>{{ $data }}</pre>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        finds: []-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      addFind: function () {-->
<!--        this.finds.push({ value: '' });-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->
