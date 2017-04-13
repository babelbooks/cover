<template>
<div style="height:100%">
   <header id="top" class="header">
      <div class="header-bg">
        
      </div>
      <div class="text-vertical-center">
          <h1><img src="assets/img/logo-bb-title.svg"  alt="Babelbooks" class="svg logo"></h1>
          <h3>Biblioth&egrave;que coop&eacute;rative</h3>
          <br>
          <div class="col-md-6 col-md-offset-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Trouver un livre">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
<<<<<<< HEAD
                  <i class="glyphicon glyphicon-search"></i>
=======
                  <span class="glyphicon glyphicon-search"></span>
>>>>>>> 934aee7ff4a95ef2faff8cf9160ca93eee4cb2f4
                </button>
              </span>
            </div><!-- /input-group -->
          </div>
      </div>

      <a class="scroll" href="#block"><span></span>En savoir plus</a>
  </header>
  <div class="page-bottom">
    <div class="container block" id="block">
    <h2>Une bibliothéque pour tout le monde</h2>
    <div class="col-12 col-md-4 column">
      <span class="glyphicon glyphicon-book"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-book"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-book"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>


  </div>
  <div class="fixed-bg" style="background: url('../assets/img/books.jpeg') no-repeat center center fixed;"></div> 
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
@import "../assets/css/babelbooks";

</style>
