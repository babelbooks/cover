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
          <a class="navbar-brand" href="#">Brand</a>
        </div>
        <div>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Se connecter</a></li>
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

    <!-- Header -->
    <header id="top" class="header">
        <div class="text-vertical-center">
            <h1>Babelbooks</h1>
            <h3>Biblioth&egrave;que coop&eacute;rative</h3>
            <br>
            <div class="col-md-6 col-md-offset-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Trouver un livre">
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </span>
              </div><!-- /input-group -->
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">
@import "./assets/css/babelbooks";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}

.header {
    display: table;
    position: relative;
    width: 100%;
    height: 100%;
    background: url(./assets/img/babeltower.jpg) no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
}

.text-vertical-center {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.text-vertical-center h1 {
  margin: 0;
  padding: 0;
  font-size: 4.5em;
  font-weight: 700;
}

</style>
