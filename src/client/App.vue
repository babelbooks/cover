<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="assets/img/logo-bb.svg" class="svg" alt="logo"></a>
        </div>
        <div>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/login">Se connecter</router-link></li>
            <li><a href="#">S'inscrire</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Langue<span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Fr</a></li>
                <li><a href="#">En</a></li>
                <li><a href="#">De</a></li>
                <li><a href="#">Jp</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="view"></router-view>

  </div>
</template>

<script>
import inlineSVG from "./assets/js/inlineSVG.min.js";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
