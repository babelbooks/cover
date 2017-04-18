<template>
  <div id="top" class="login-fixed-background">
  <h2><img src="assets/img/logo-bb-title.svg" height="100px" alt="Babelbooks" class="svg"></h2>
      <div class="container col-xs-12 col-md-6 col-md-offset-3 login-container">
        <div class="row">
          <div class="main">
            <h3>{{ l('login.title') }}</h3>
            <div class="alert alert-danger" v-if="error">
              <p>{{ error }}</p>
            </div>
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
              <label for="inputUsernameEmail">{{ l('email') }}</label>
              <input type="text" class="form-control" v-model="credentials.username">
            </div>
            <div class="form-group">
              <label for="inputPassword">{{ l('password') }}</label>
              <input type="password" class="form-control" v-model="credentials.password">
            </div>
            <div>
              <button class="btn btn btn-primary" @click="submit()">
                {{ l('login.title') }}
              </button>
            </div>
            <div class="checkbox pull-right">
              <label>
                <input type="checkbox">
                {{ l('login.remember') }} </label>
            </div>

          </div>

        </div>
      </div>
  </div>
</template>

<script>
import auth from '../utils/auth'

export default {
  name: 'login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods:{
    submit: function(){
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, 'mylibrary')
    }
  }
}
</script>

<style lang="sass">
/*@import "../assets/css/babelbooks";*/

.login-container{
   /*border:1px solid black;*/
    margin-bottom:25px;
    background-color: rgba(255,255,255,0.8);
    /*border-radius: 25px;*/
}
.main{
	padding: 30px;
  font-family: 'Dosis', sans-serif;
}
</style>
