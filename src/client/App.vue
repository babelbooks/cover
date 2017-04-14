<template>
  <div id="app">
    <navbar placement="top" type="default">
      <!-- Brand as slot -->
      <a title="Home" slot="brand" class="navbar-brand" href="/"><img src="assets/img/logo-bb.svg" class="svg" alt="logo"></a>
      <ul slot="right" class="nav navbar-nav navbar-right">
        <dropdown v-if="user.authenticated" v-bind:text="user.username" role="menu">
          <li><router-link to="/profile">{{ l('navbar.myProfil') }}</router-link></li>
          <li><router-link to="/mylibrary">{{ l('myLibrary.title') }}</router-link></li>
          <li><a href="#" @click="logout()">{{ l('navbar.logout') }}</a></li>
        </dropdown>
        <li v-if="!user.authenticated"><router-link to="/login">{{ l('login.title') }}</router-link></li>
        <li v-if="!user.authenticated"><router-link to="/signup">{{ l('signup.title') }}</router-link></li>
        <dropdown v-bind:text="l('navbar.lang')" role="menu">
          <li @click="changeLang('fr')"><a href="#">Fr</a></li>
          <li @click="changeLang('en')"><a href="#">En</a></li>
          <li @click="changeLang('de')"><a href="#">De</a></li>
          <li @click="changeLang('jp')"><a href="#">Jp</a></li>
        </dropdown>
      </ul>
    </navbar>
    <router-view class="view"></router-view>
    <spinner ref="spinner" global v-model="spinner" size="lg" fixed v-bind:text="l('loading')"></spinner>
  </div>
</template>

<script>
import inlineSVG from "./assets/js/inlineSVG.min.js";
import { navbar,dropdown,spinner } from 'vue-strap'
import store from './store/store'
import auth from './auth'

export default {
  name: 'app',
  store,
  components:{
    navbar,
    dropdown,
    spinner
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  data () {
    return {
      spinner: false
    }
  },
  methods:{
    changeLang(lang){
      this.spinner = true;
      var self = this;
      setTimeout(function(){
        self.spinner = false;
        self.changeLanguage(lang);
      }, 1500);
    },
    logout: function(){
      this.spinner = true;
      var self = this;
      setTimeout(function(){
        auth.logout(self);
        self.spinner = false;
      }, 1000);
    }
  },
  mounted: function () {
      this.$nextTick(function () {
          inlineSVG.init({
            svgSelector: 'img.svg', // the class attached to all images that should be inlined
            initClass: 'js-inlinesvg', // class added to <html>
          }, function () {
            console.log('All SVGs inlined');
          });
      })
  },
  updated: function () {

      this.$nextTick(function () {
          inlineSVG.init({
            svgSelector: 'img.svg', // the class attached to all images that should be inlined
            initClass: 'js-inlinesvg', // class added to <html>
          }, function () {
            console.log('All SVGs inlined');
          });
      })
  },
}



</script>

<style lang="sass">
@import "/assets/css/navbar";
@import "assets/css/babelbooks";


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
