<template>
<div class="sidebar-page">
  <section class="sidebar-layout">
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
      :mobile="mobile"
    >
      <div class="p-1">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
<!--          <b-menu-list label="Menu">-->
<!--            <a class="navbar-item is-active">-->
<!--              <router-link to="/" exact>dashboard</router-link>-->
<!--            </a>-->
<!--            <b-menu-item  expanded icon="text-box-multiple" size="is-large" label="نوشته ها">-->
<!--                <router-link  to="/AddText" exact><b-icon icon="text-box-plus-outline" size="is-small"></b-icon>متن جدید</router-link>-->
<!--                <router-link to="/about" exact>همه نوشته ها </router-link>-->
<!--            </b-menu-item>-->
<!--          </b-menu-list>-->
<!--          <b-menu-list>-->
<!--            <ulsidebar :menuitem="menuitem"></ulsidebar>-->
<!--          </b-menu-list>-->

          <b-menu-list icon="text-box-outline" label="متن">
            <ulsidebar :menuitem="menuitem"></ulsidebar>
          </b-menu-list>
        </b-menu>
<!--        <b-menu class="menu-collapse">-->
<!--          <b-menu-list>-->
<!--        <b-menu-item icon="settings" >-->
<!--          <template slot="label" slot-scope="props">-->
<!--            برچسب ها-->
<!--            <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>-->
<!--          </template>-->
<!--          <router-link  to="/AddText" exact>متن جدید</router-link>-->
<!--        </b-menu-item>-->
<!--          </b-menu-list>-->
<!--        </b-menu>-->

      </div>
    </b-sidebar>

  </section>
</div>
</template>
<script>
  import ulsidebar from "../sidebar/ulsidebar";

  export default {
    data() {
      return {
        open: true,
        overlay: false,
        fullheight: true,
        fullwidth: false,
        right: true,
        expandOnHover: false,
        mobile: "reduce",
        reduce: true,
        menuitem:[
          {title : 'متن جدید',icon:'text-box-plus-outline',link:'/AddText'},
          {title : '  نوشته ها',icon: 'text-box-multiple-outline',link:'/about',},
          {title : 'منو ساز',icon: 'text-box-multiple-outline',link:'/menuBuilderView',}
        ],
      }
    },
    components : {ulsidebar},
  }
</script>
