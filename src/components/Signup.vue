<template>
<div style="height:100%">
  <div id="top" class="login-header">
    <div class="header-bg">
    </div>
    <h2><img src="assets/img/logo-bb-title.svg" height="100px" alt="Babelbooks" class="svg"></h2>
    <div class="container col-xs-12 col-md-6 col-md-offset-3 login-container">
      <div class="row" style="opacity:1;">

        <div class="main">

          <h3>{{ l('signup.title') }}</h3>
          <div class="alert alert-danger" v-if=error>
            <p>{{ error }}</p>
          </div>
          <!-- <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
            </div>
          </div>
          <div class="login-or">
            <hr class="hr-or">
          </div>-->


            <div class="form-group col-md-8 col-sm-12 col-centered">
              <label for="inputUsernameEmail"></label>
              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </div>
                  <input type="text" class="form-control input-lg" id="inputUsernameEmail" v-model="user.username" v-bind:placeholder="l('email')">
                </div>
              </div>

              
              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </div>
                  <input type="text" class="form-control input-lg" id="inputUsernameEmail" v-model="user.firstName" v-bind:placeholder="l('first-name')">
                </div>
              </div>

              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="glyphicon glyphicon-user"></i>
                  </div>
                  <input type="text" class="form-control input-lg" id="inputUsernameEmail" v-model="user.lastName" v-bind:placeholder="l('last-name')">
                </div>
              </div>

              <!-- jghsdkjg -->
              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="  glyphicon glyphicon-lock"></i>
                  </div>
                  <input type="password" class="form-control input-lg" v-model="user.password" v-bind:placeholder="l('password')" v-on:keyup.enter="submit()">
                </div>
              </div>

              <div class="form-group" >
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="  glyphicon glyphicon-lock"></i>
                  </div>
                  <input type="password" class="form-control input-lg" v-bind:placeholder="l('signup.repeatPassword')" v-on:keyup.enter="submit()">
                </div>
              </div>


            </div>

          <div>
            <button class="btn btn-lg btn-primary" @click="submit()">
              {{ l('signup.title') }}
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>

</div>
</template>

<script>
import auth from '../utils/auth';

export default {
  name: 'signup',
  data () {
    return {
      user: {
        username: '',
        password: '',
        firstName: '',
        lastName: ''
      },
      error: ''
    }
  },
  methods: {
    submit() {
      return auth.signup(this, this.user, 'login');
    }
  }
}
</script>

<style lang="sass">
/*@import "../assets/css/babelbooks";*/

.login-container{
   /*border:1px solid black;*/
    margin-bottom:25px;
    background-color: rgb(255,255,255);
    box-shadow: 0 2px 5px 3px rgba(0,0,0,0.5);
    /*border-radius: 25px;*/
}
.main{
	padding: 15px;
}
</style>
