<template>
  <section>
    <b-tabs  type="is-boxed" size="is-small" :position="atRight ? 'is-left' : 'true'">
      <b-tab-item  label="تازه ترین ها"   v-model="activeTab">
        <div class="column">
          <div class="field categories-checkbox" v-for="(list , index) in dataNodes" :key="list.id">
            <!--                        <label>{{list.title}}</label>-->
            <!--                        <input id="check" type="checkbox" :name="list.text"  :value="list" />-->
            <div class="field b-checkbox checkbox"> <b-checkbox :native-value="list" :value="false" :name="list.text" type="is-info"> {{list.title}} </b-checkbox>
            </div>

          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="جستجو" >
        <div class="column">
          <b-field>
            <b-input v-model="name"></b-input>
          </b-field>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import mixin from "../mixin";
  export default {
    data() {
      return {
        activeTab: 0,
        expanded: false,
        atRight: true,
        size: true,
        type: null,
      }
    },
    components: {},
    mixins : [mixin]
  }
</script>
