<template>
  <div id="top" class="login-fixed-background">
  <h2><img src="assets/img/logo-bb-title.svg" height="100px" alt="Babelbooks" class="svg"></h2>
      <div class="container col-xs-12 col-md-6 col-md-offset-3 login-container">
        <div class="row">
          <div class=" main ">
            <h3>{{ l('login.title') }}</h3>
            <div class="alert alert-danger" v-if="error">
              <p>{{ error }}</p>
            </div>
            <div class="form-group col-md-8 col-sm-12 col-centered">
              <label for="inputUsernameEmail"></label>
              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </div>
                  <input type="text" class="form-control input-lg" v-model="credentials.username" v-bind:placeholder="l('email')">
                </div>
              </div>
              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="  glyphicon glyphicon-lock"></i>
                  </div>
                  <input type="password" class="form-control input-lg" v-model="credentials.password" v-bind:placeholder="l('password')">
                </div>
              </div>
            </div>

            <div>
              <button class="btn btn-lg btn-primary" @click="submit()">
                {{ l('login.title') }}
              </button>
              <div class="checkbox">
                <label>
                  <input type="checkbox">
                  {{ l('login.remember') }} </label>
              </div>
            </div>

            <!--<div class="login-or">
              <hr class="hr-or">
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6" style="margin-bottom:10px;">
                <a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6">
                <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
              </div>
            </div>-->

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
    submit () {
      return auth.login(this, this.credentials, 'mylibrary');
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
