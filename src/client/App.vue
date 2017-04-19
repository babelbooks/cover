<template>
  <div id="app">
    <navbar placement="top" type="default">
      <!-- Brand as slot -->
      <a title="Home" slot="brand" class="navbar-brand" href="/"><img src="assets/img/logo-bb.svg" class="svg" alt="logo"></a>
        <div v-show="displaySearchNavbar" class="navbar-form search-nav">
          <div class="input-group search-nav-input">
              <input  v-on:keyup.enter="submitSearch()" type="text" class="form-control search-nav-input-bar"
              v-bind:placeholder="l('home.search')"
              v-model="search">
              <div class="input-group-btn">
                  <button @click="submitSearch()" class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
              </div>
          </div>
        </div>
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
          <!-- <li @click="changeLang('de')"><a href="#">De</a></li>
          <li @click="changeLang('jp')"><a href="#">Jp</a></li> -->
        </dropdown>
      </ul>
    </navbar>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <spinner global size="lg" fixed v-bind:text="l('loading')"></spinner>
  </div>
</template>

<script>
import inlineSVG from "./assets/js/inlineSVG.min.js";
import { navbar,dropdown,spinner } from 'vue-strap'
import store from './store/store'
import auth from './utils/auth'

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
    },
    displaySearchNavbar() {
      if ((this.$route.name === 'home') || (this.$route.name === 'signup') || (this.$route.name === 'login')){
        return false
      }else{
        return true
      }
    }
  },
  data () {
    return {
      search:''
    }
  },
  methods:{
    changeLang(lang){
      this.$root.$emit('spinner::show')
      var self = this;
      setTimeout(function(){
        self.changeLanguage(lang);
        self.$root.$emit('spinner::hide')
      }, 1500);
    },
    logout: function(){
      this.$root.$emit('spinner::show')
      var self = this;
      setTimeout(function(){
        auth.logout(self);
        self.$root.$emit('spinner::hide')
      }, 1000);
    },
    submitSearch: function(){
      this.$router.push({ name: 'search', params: { search: this.search }})
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

@media(min-width:992px){
  .search-nav-input-bar{
    min-width:500px;
  }
}

.search-nav-input{
  margin-right:15px;
  margin-left:15px;
}
</style>
