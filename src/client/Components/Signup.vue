<template>
  <div id="top" class="login-fixed-background">
    <h2><img src="assets/img/logo-bb-title.svg" height="100px" alt="Babelbooks" class="svg"></h2>

    <div class="container col-xs-12 col-md-6 col-md-offset-3 login-container">
      <div class="row" style="opacity:1;">

        <div class="main">

          <h3>{{ l('signup.title') }}</h3>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
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
            <label for="inputUsernameEmail">{{ l('email') }}</label>
            <input type="text" class="form-control" id="inputUsernameEmail">
          </div>
          <div class="form-group">
            <label for="inputPassword">{{ l('password') }}</label>
            <input type="password" class="form-control" id="inputPassword">
          </div>
          <div class="form-group">
            <label for="inputPassword">{{ l('signup.repeatPassword') }}</label>
            <input type="password" class="form-control" id="inputPassword">
          </div>
          <div>
            <button class="btn btn btn-primary">
              {{ l('signup.title') }}
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
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
    margin-bottom:15px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 25px;
}
.main{
	padding: 15px;
}
</style>
