<template>
<div>
  <div v-for="(find , index) in fruit" :key="index" >
    <div class="column">
      <label class="label lable-group"><b-icon icon="calendar-clock"></b-icon>ساخت منوی جدید</label>
    </div>
    <div class="columns menu-builder">
      <div class="column has-text-centered is-4">
        <b-field>
          <b-input placeholder="عنوان منو" size="is-small" icon="account"  v-model="find.id"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns menu-builder">
      <div class="column has-text-centered is-4">
        <b-field>
          <b-input placeholder="نام آیتم منو" size="is-small" icon="account"  v-model="find.name"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns menu-builder">
      <div class="column has-text-centered is-4">
        <b-field>
          <b-input placeholder="لینک" size="is-small" icon="account"  v-model="find.link"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns menu-builder">
      <div class="column has-text-centered is-4">
        <select :disabled='isDisabled'>
          <option v-for="(find , index) in fruit" :value="id">
            {{find.name}}
          </option>
        </select>
        <input type='checkbox' v-model='submenu' />
        <button @click="addFind">
          New Find
        </button>
      </div>
    </div>

<!--    <select :disabled="disabled == 1">-->
<!--      <option v-for="(find , index) in fruit" :value="id">-->
<!--        {{find.name}}-->
<!--      </option>-->
<!--    </select>-->
<!--    <button @click="addFind">-->
<!--      New Find-->
<!--    </button>-->
<!--    <input type="text" placeholder="Text" v-model="find.children[0].id">-->

  </div>

<!--  <select>-->
<!--    <option v-for="(find , index) in fruit" :value="id">-->
<!--      {{find.name}}-->
<!--    </option>-->
<!--  </select>-->
<!--  <button @click="addFind">-->
<!--    New Find-->
<!--  </button>-->
<!--  <button v-on:click= "removeRow"> X </button>-->

  <pre>{{ $data }}</pre>


</div>
</template>

<script>
  export default {
    data() {
      return {
        submenu: false,
        //fruit : [{ id: '', name:'',link:'' }],
        //   {
        //     id: '1',
        //     name: 'pear 🍐'
        //   },
        //   {
        //     id: '2',
        //     name: 'Grapes 🍇'
        //   }],
        // vegetable: [
        //   {
        //     id: '1',
        //     name: 'kalam 🥦'
        //   },
        //   {
        //     id: '2',
        //     price: 'karrot 🥕'
        //   }


        fruit: [ {
          id: '',
          name: '',
          link:'',
          children: [ {
            id: '',
            name: '',
            link:'',
          }],
        }],



      }
    },
    methods: {
      addFind: function () {
        this.fruit.push({ id: '', name:'',link:'' });
      },
      removeRow(index){
        this.fruit.splice(index); // why is this removing only the last row?
      }
    },
    computed: {
      isDisabled: function(){
        return !this.submenu;
      }
    }
  }
</script>








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
