
<template>

  <b-menu class="menu-collapse">
    <b-menu-list>
      <b-menu-item icon="settings" >
        <template slot="label" slot-scope="props">
          برچسب ها
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <div v-for="(list , index) in dataNodes" :key="list.id">
          <label>{{list.title}}</label>
          <input id="check" type="checkbox" :name="list.text"  :value="list" />
        </div>


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
</template>

<script>
  import tagInput from "./tagInput";
  import categoriesName from "./categoriesName";
  import categoriesSelectList from "./categoriesSelectList"
  import categoriesCheckbox from "./categoriesCheckbox"
  import StatusVisibility from "./StatusVisibility"
  import datepicker from "./datePicker";
   import  mixin from "../mixin"

  export default {

    data() {
      return {

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

        isActive: true
      }
    },
    components : {tagInput,categoriesName,categoriesSelectList,categoriesCheckbox,StatusVisibility,datepicker
    },
    methods:{

    },
    mixins : [mixin]
  }

</script>
