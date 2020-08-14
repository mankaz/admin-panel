<template>
  <section>
    <b-tabs type="is-boxed" size="is-small" :position="atRight ? 'is-right' : 'true'">

      <b-tab-item label="مدیریت نمایش مکان منو" icon="grid-large">

        <div class="columns is-centered">
          <div class="column has-text-centered is-4">
            <menuSelect></menuSelect>
          </div>
          <div class="column has-text-centered is-4">
            <p>منوی افقی دسکتاپ</p>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column has-text-centered is-4">
            <menuSelect></menuSelect>
          </div>
          <div class="column has-text-centered is-4">
            <p>منوی ستونی دسکتاپ</p>
          </div>
        </div>
      </b-tab-item>
      <b-tab-item label="ایجاد منو" icon="menu" v-model="activeTab">
        <div class="column">
          <menuBuilder></menuBuilder>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>



<script>

import menuBuilder from "./menuBuilder";
import menuSelect from "./menuSelect";
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
    components : {menuBuilder,menuSelect}
  }
</script>
