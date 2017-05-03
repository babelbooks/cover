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
              <input v-on:keyup.enter="submitSearch()" type="text" class="form-control"
              v-bind:placeholder="l('home.search')"
              v-model="search">
              <span class="input-group-btn">
                <button @click="submitSearch()" class="btn btn-default" type="button">
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
      <p>{{ l('home.Description1') }} </p>
      
   </div>
    <div class="col-12 col-md-4 column">
    <span class="glyphicon glyphicon-link"></span>
      <p>{{ l('home.Description2') }} </p>
    </div>
    <div class="col-12 col-md-4 column">
    <span><icon name="recycle" scale="3"></icon></span>
      <p>{{ l('home.Description3') }} </p>
    </div>
  </div>

    <div class="fixed-bg " style="background: url('../assets/img/books.jpeg') no-repeat center center fixed;">
        <h3 class="heading text-vertical-center">Découvrez et partagez des livres en toute simplicitée</h3>
    </div>
    <div class="container block" id="block">
      <h2>
        {{ l('home.contact') }}
      </h2>
      <hr>
      <div class="row">
        <div class="col-xs-6 col-md-6 form-group">
          <input class="form-control"v-bind:placeholder="l('home.yourName')" type="text"/>
        </div>
        <div class="col-xs-6 col-md-6 form-group">
          <input class="form-control" v-bind:placeholder="l('home.yourEmail')" type="email"/>
        </div>
      </div>
      <textarea class="form-control" v-bind:placeholder="l('home.yourMessage')" rows="5"></textarea>
      <br />
      <div class="row">
        <div class="col-xs-12 col-md-12 form-group">
          <button class="btn btn-primary btn-lg" type="submit">{{ l('home.submit') }}</button>
        </div>
      </div>
    </div>

    <div class="fixed-bg" style="background: url('../assets/img/read.jpg') no-repeat center center fixed;">
        <h3 class="heading text-vertical-center">Plus de 87,549 utilisateurs et 20,879,780 livres partagés</h3>
    </div>
    </div>

    <div class="footer">
      <p>Babelbooks, une application SMART développée par H4113</p>
      <p><a href="https://github.com/babelbooks" title="Github">Github</a></p>
    </div>
</div>

</template>

<script>
import $ from 'jquery';

export default {
  name: 'login',
  data () {
    return {
      search: ''
    }
  },
  methods:{
    submitSearch: function(){
      this.$router.push({ name: 'search', params: { search: this.search }})
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
