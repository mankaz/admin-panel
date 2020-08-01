<template lang="html">
  <li>
    <router-link :to=li.link class="menu-item">
      <i :class="[faClass(li.icon)]" aria-hidden="true"></i>
        <span class="menu-label"> {{li.title}} </span>

    </router-link>

  </li>
</template>

<script>
  export default {
    props:['li','index'],
    methods: {
      faClass(icon) {
        return `mdi mdi-${icon}`;
      }
    }
  }
</script>
