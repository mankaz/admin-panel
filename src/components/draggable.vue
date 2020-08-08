<template>
  <div>
  <ComponentExample link="SimpleRtl">
    <div v-for="(list , index) in nestableItems2" :key="list.id">
      <label>{{list.text}}</label>
      <input  id="check" type="checkbox" :name="list.text"  :value="list"/>
    </div>
    <VueNestable
      v-model="nestableItems"
      rtl
    >
      <VueNestableHandle
        slot-scope="{ item }"
        :item="item"
      >
        <i class="fas fa-user" />
        {{ item.text }}
      </VueNestableHandle>
    </VueNestable>
  </ComponentExample>
    <button id="submit" @click="serialize">
      New Find
    </button>
    <pre>{{$data}}</pre>

  </div>
</template>

<script>
  import ComponentExample from './ComponentExample.vue'
  export default {
    components: {
      ComponentExample
    },
    data () {
      return {
        nestableItems: [

        ],
        nestableItems2: [
          {
            id: 0,
            text: 'Andy',
            children:{}
          }, {
            id: 1,
            text: 'Harry',
            children: [{
              id: 2,
              text: 'David',
              children:{}
            }]
          }, {
            id: 3,
            text: 'Lisa',
            children:{}
          }
        ]
      }
    },
    methods:{
      serialize() {

        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (let i = 0; i < checkboxes.length; i++) {
          alert(checkboxes[i]._value)
          console.log(JSON.stringify(checkboxes[i]))
          this.nestableItems.push(checkboxes[i]._value)
        }
      },
    }
  }
</script>

<style scoped>
</style>
© 2020 GitHub, Inc.
