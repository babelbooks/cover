<template>
<div style="height:100%">
   <header id="top" class="header">
      <div class="header-bg">

      </div>
      <div class="text-vertical-center">
        <div class="center-vertical">
          <h1><img src="assets/img/logo-bb-title.svg"  alt="Babelbooks" class="svg logo"></h1>
          <h3>{{ l('home.title') }}</h3>
          <br>
          <div class="col-md-6 col-md-offset-3">
            <div class="input-group">
              <input type="text" class="form-control" v-bind:placeholder="l('home.search')">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <a class="scroll" href="#block"><span></span>{{ l('home.knowMore') }}</a>
  </header>

  <div class="page-bottom">
    <div class="container block" id="block">
    <h2>{{ l('home.title2') }}</h2>
    <div class="col-12 col-md-4 column">
      <span class="glyphicon glyphicon-book"></span>
      <p>Vos livres prennent la poussière dans votre bibliothéque ? BabelBooks est une librarie partagée et
    collaborative où chaque utilisateur mets à disposition ses libres pour tout le monde.
    Vous pouvez emprunter des livres dans toute la ville et faire de nouvelles découvertes
    litéraires.</p>
    </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-refresh"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-tags"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>

    <div class="fixed-bg " style="background: url('../assets/img/books.jpeg') no-repeat center center fixed;">
        <h3 class="heading text-vertical-center">Plus de 87,549 utilisateurs et 20,879,780 livres partagés</h3>
    </div>
    <div class="container block" id="block">
    <h2>Partagez vos livres avec le monde !</h2>
    <div class="col-12 col-md-4 column">
      <span class="glyphicon glyphicon-book"></span>
      <p>Vos livres prennent la poussière dans votre bibliothéque ? BabelBooks est une librarie partagée et
    collaborative où chaque utilisateur mets à disposition ses libres pour tout le monde.
    Vous pouvez emprunter des livres dans toute la ville et faire de nouvelles découvertes
    litéraires.</p>
    </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-refresh"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-tags"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>

    <div class="fixed-bg" style="background: url('../assets/img/read.jpg') no-repeat center center fixed;">
        <h3 class="heading text-vertical-center">Plus de 87,549 utilisateurs et 20,879,780 livres partagés</h3>
    </div>
    </div>

    <div class="footer">
      
    </div>
</div>

</template>

<script>
import $ from "../assets/js/jQuery.js";

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    $('a.scroll').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'swing');
    });
  },
  updated: function() {
    $('a.scroll').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'swing');
    });
  }
}
</script>

<style lang="sass">

</style>
