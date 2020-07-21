<template>
  <section>
    <b-tabs :position="atRight ? 'is-right' : ''"


           >
      <b-tab-item label="Pictures" icon="google-photos">
        <tagInput></tagInput>
      </b-tab-item>

      <b-tab-item label="Music" icon="library-music">
        What light is light, if Silvia be not seen? <br>
        What joy is joy, if Silvia be not by— <br>
        Unless it be to think that she is by <br>
        And feed upon the shadow of perfection? <br>
        Except I be by Silvia in the night, <br>
        There is no music in the nightingale.
      </b-tab-item>

      <b-tab-item label="Videos" icon="video" disabled>
        Nunc nec velit nec libero vestibulum eleifend.
        Curabitur pulvinar congue luctus.
        Nullam hendrerit iaculis augue vitae ornare.
        Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
  import tagInput from "./tagInput";
  export default {
    data() {
      return {
        expanded: false,
        atRight: true,
        size: true,
        type: null
      }
    },
    components : {tagInput}
  }
</script>
