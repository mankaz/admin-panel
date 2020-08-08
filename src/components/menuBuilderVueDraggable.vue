<template>
  <div>
  <div class="justify-content-between row">
    <nestedTest class="col-8" v-model="exampleList" />
    <rawDisplayer class="col-4" :title="'Vuex Store'" :value="exampleList" />
  </div>

    <div v-for="(list , index) in exampleList2" :key="list.id">
      <label>{{list.name}}</label>
      <input id="check" type="checkbox" :name="list.name"  :value="list"/>

    </div>
<!--    <label>-->
<!--      <input type="checkbox" name="fruits[]" value="banana">Banana-->
<!--    </label>-->
<!--    <label>-->
<!--      <input type="checkbox" name="fruits[]" value="apple">Apple-->
<!--    </label>-->
<!--    <label>-->
<!--      <input type="checkbox" name="fruits[]" value="peach">Peach-->
<!--    </label>-->
<!--    <label>-->
<!--      <input type="checkbox" name="fruits[]" value="orange">Orange-->
<!--    </label>-->
<!--    <label>-->
<!--      <input type="checkbox" name="fruits[]" value="strawberry">Strawberry-->
<!--    </label>-->
    <button id="submit" @click="serialize">
      New Find
    </button>
<!--    <div id="serialized">-->
<!--    </div>-->
<!--    <pre>{{exampleList2}}</pre>-->
<!--    <label-->
<!--      v-for="(item, index) in exampleList2"-->
<!--      :key="index"-->
<!--    >-->
<!--      {{ item.name }}-->
<!--      <input :id="item.id"-->
<!--        type="checkbox"-->

<!--        @click="addFind()"-->
<!--      />-->
<!--      <input type="checkbox" v-bind:id="item.id">-->
<!--    </label>-->
<!--    <ul>-->
<!--      <li v-for="mainCat in exampleList2">-->
<!--        <input type="checkbox" :value="mainCat.id" :id="mainCat.id" v-model="exampleList" @click="check($event)"> {{mainCat.id}}-->

<!--      </li>-->
<!--    </ul>-->
<!--    {{ exampleList }}-->

<!--    <pre>{{$data}}</pre>-->
  </div>
</template>

<script>
  import nestedTest from "./nestedTest";
  import rawDisplayer from "./rawDisplayer";
  export default {

    data() {

      return {
        exampleList: [

          // {
          //   "id": '',
          //   "name": '',
          //   "elements": []
          // },
          // {
          //   "id": 4,
          //   "name": "Lord Farquad",
          //   "elements": []
          // },
          // {
          //   "id": 2,
          //   "name": "Fiona",
          //   "elements": [
          //     {
          //       "id": 5,
          //       "name": "Prince Charming",
          //       "elements": []
          //     }
          //   ]
          // },
          // {
          //   "id": 3,
          //   "name": "Donkey",
          //   "elements": []
          // }
        ],
        exampleList2 :
        [
          {
            "id": '1',
            "name": "reza",
            "elements": [], checked: false


          },
          {
            "id": '2',
            "name": "mansour",
            "elements": [], checked: false
          },
          {
            "id": '3',
            "name": "naser",
            "elements": []
          },
          {
            "id": '4',
            "name": "rasoul",
            "elements": [], checked: false
          },
        ]
      }
    },

    order: 16,
    components: {
      nestedTest,
      rawDisplayer
    },
    computed: {

        get() {
        //return this.exampleList
          return this.$store.exampleList;

        },
        set(value) {
          this.$store.dispatch("./nestedElement", value);
        }

    },
    methods: {


      // checkedNames () {
      //   return this.names.filter(item => item.checked).map(name => name.name)
      // },


      addFind: function () {
        this.exampleList.push({ id: '' ,name:'mansour',elements: []})
      },


      serialize() {

        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (let i = 0; i < checkboxes.length; i++) {

console.log(JSON.stringify(checkboxes[i]._value))
          JSON.stringify(this.exampleList.push(checkboxes[i]._value))
        }
      },
        // serialize() {
        //   let values = this.exampleList2.filter.call(document.getElementsByName('fruits[]'), function(c) {
        //     return c.checked;
        //   }).map(function(c) {
        //     return c.value;
        //   });
        //   alert(JSON.stringify(values))
        //   this.exampleList = values
        // },

        // this.exampleList.push(this.exampleList2);
        // alert('ddd')
        // let checkboxes = document.querySelectorAll("input[type=checkbox]");
        // let submit = document.getElementById("submit");
        //
        // function getChecked() {
        //   let checked = [];
        //   alert(checked)
        //   for (let i = 0; i < checkboxes.length; i++) {
        //
        //     let checkbox = checkboxes[i];
        //
        //     if (checkbox.checked) checked.push(checkbox.value);
        //
        //     console.log(checked);
        //   }
        //
        //   return checked;
        // }
        //
        // submit.addEventListener("click", function() {
        //   let checked = getChecked();
        //
        //   console.log(checked);
        // });

        // let checkbox = document.getElementById('myDiv');
        // let ln = this.exampleList2;
        // for(let i=0; i< checkbox.length; i++) {
        //   if(checkbox[i].checked)
        //     ln
        //
        // }
        // this.exampleList.push(ln);
        // alert(ln)


      // headline.onclick = function() {
      //   alert('ln')
      //   this.exampleList.push(ln);
      // }
      // get () {
      //   log = document.getElementsByTagName('span')[1];
      //   send_query(document.getElementsByTagName('input'));
      // }
      // getSelectedItems() {
      //   let elements = this.$refs.myDiv
      //   console.log(elements)
      //   for (let i = 0; i < elements.length; i++) {
      //     let element = elements[i];
      //     let strSel = element.options[element.selectedIndex].text;
      //     this.exampleList.push(strSel);
      //   }
      //   console.log( this.exampleList);
      // }
      // check: function(e) {
      //   if (e.target.checked) {
      //     console.log(e.target.value)
      //     // this.exampleList.push({ value})
      //   }
      // }
    }
  };
</script>
