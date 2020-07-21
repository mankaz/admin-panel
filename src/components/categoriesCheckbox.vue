<template>
  <section>
    <div class="field categories-checkbox">
      <b-checkbox v-for="choice in choices" type="is-success">
        {{choice}}
      </b-checkbox>
    </div>
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
