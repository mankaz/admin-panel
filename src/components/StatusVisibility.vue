<template>
  <section>
    <b-field>
      <b-select placeholder="قابل مشاهده بصورت">
        <option class="visibility-option" disabled="disabled" selected="selected">قابل مشاهده بصورت</option>
        <option class="visibility-option" value="flint">عمومی</option>
        <option class="visibility-option" value="silver">خصوصی</option>
      </b-select>
    </b-field>
  </section>
</template>
<script>

  export default {
    data() {
      return {
        'choices': ['عمومی','خصوصی']
      }
    },

  }
</script>
