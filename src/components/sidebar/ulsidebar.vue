<template lang="html">
  <ul >
    <lisidebar v-for="(li , index) in menuitem" :li="li" :index="index"></lisidebar>
  </ul>
</template>

<script>
  import lisidebar from "./lisidebar.vue";
  export default {
      props: ['menuitem'],
    components : {lisidebar}
  }
</script>
