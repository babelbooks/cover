<template>
  <div id="top" class="login-fixed-background">
  <h2><img src="assets/img/logo-bb-title.svg" height="100px" alt="Babelbooks" class="svg"></h2>
      <div class="container col-xs-12 col-md-6 col-md-offset-3 login-container">
        <div class="row">
          <div class="main">
            <h3>Se connecter</h3>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6" style="margin-bottom:10px;">
                <a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
              </div>
            </div>
            <div class="login-or">
              <hr class="hr-or">
            </div>
            <div class="form-group">
              <label for="inputUsernameEmail">Courriel</label>
              <input type="text" class="form-control" id="inputUsernameEmail">
            </div>
            <div class="form-group">
              <label for="inputPassword">Mot de passe</label>
              <input type="password" class="form-control" id="inputPassword">
            </div>
            <div>
              <router-link to="/mylibrary">
                <button class="btn btn btn-primary">
                  Se connecter
                </button>
              </router-link>
            </div>
            <div class="checkbox pull-right">
              <label>
                <input type="checkbox">
                Se souvenir de moi </label>
            </div>

          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

.login-container{
    border:1px solid black;
    margin-bottom:25px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 25px;
}
.main{
	padding: 15px;
}
</style>
