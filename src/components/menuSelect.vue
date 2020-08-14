<template>
  <section>
    <b-field>
      <b-select
        placeholder="Default"
        expanded>
        <option v-for="choice in choices">{{ choice }}</option>
      </b-select>
    </b-field>
  </section>
</template>
<script>

  export default {
    data() {
      return {
        'choices': ['تست 1','تست 2','تست 3','تست4']
      }
    },

  }
</script>
