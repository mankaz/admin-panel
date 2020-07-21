<template>
  <section>
    <b-field >
      <b-taginput
        v-model="tags"
        type="is-success">
      </b-taginput>
    </b-field>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          'Auckland',
          'Wellington',
          'Napier'
        ]
      }
    }
  }
</script>
