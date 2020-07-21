<template lang="html">
  <li>
    <a href="#" class="menu-item">
      <span  :class="[faClass(li.icon)]"></span>
      <span class="menu-label"> {{li.title}} </span>
    </a>
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
