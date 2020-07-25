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
          <b-menu-list label="Menu">
            <a class="navbar-item is-active">
              <router-link to="/" exact>dashboard</router-link>
            </a>
            <b-menu-item icon="account" label="نوشته ها">
              <template slot="label" slot-scope="props">

                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>

                <router-link  to="/AddText" exact>متن جدید</router-link>


                <router-link to="/about" exact>همه نوشته ها</router-link>


            </b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <ulsidebar :menuitem="menuitem"></ulsidebar>
          </b-menu-list>
        </b-menu>
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
          {title : 'داشبورد',icon:'tachometer-alt'},
          {title : ' محصولات',icon: 'cogs'}
        ],
      }
    },
    components : {ulsidebar},
  }
</script>
