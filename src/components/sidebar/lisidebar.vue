<template lang="html">
  <li>
    <router-link :to=li.link class="menu-item">

        <span  :class="[faClass(li.icon)]"></span>
        <span class="menu-label"> {{li.title}} </span>

    </router-link>

  </li>
</template>

<script>
  export default {
    props:['li','index'],
    methods: {
      faClass(icon) {
        return `menu-icon fa fa-${icon}`;
      }
    }
  }
</script>
