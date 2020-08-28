<template>
  <div>
    <!-- Navbar -->
    <div  class="fixed-top" style="margin-bottom:30px">
      <b-navbar toggleable="lg" type="dark" variant="info" >
        <b-navbar-brand href="/">IMS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/utility">Utility Program</b-nav-item>
            <b-nav-item href="investPlanner" hidden>Invest Planner</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item @click="changeLang('en')">EN</b-dropdown-item>
              <b-dropdown-item @click="changeLang('th')">TH</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right hidden>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- Content -->
    <div class="ims-container">
      <Nuxt class="ims-container" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    changeLang(lang){
      this.$store.dispatch('userConfig/changeLocalLang',lang)
      console.log(this.langState)
      this.$i18n.setLocale(this.langState)

      //location.reload()
    }
  },
  computed: {
    ...mapState({
      langState : (state)=>state.userConfig.localLang
    })
  },
}
</script>
