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
          <div class="form-group">
            <label for="inputUsernameEmail">{{ l('email') }}</label>
            <input type="text" class="form-control" id="inputUsernameEmail" v-model=user.username>
          </div>
          <div class="form-group">
            <label for="inputFirstName">{{ l('first-name') }}</label>
            <input type="text" class="form-control" id="inputFirstName" v-model=user.firstName>
          </div>
          <div class="form-group">
            <label for="inputFirstName">{{ l('last-name') }}</label>
            <input type="text" class="form-control" id="inputLastName" v-model=user.lastName>
          </div>
          <div class="form-group">
            <label for="inputPassword">{{ l('password') }}</label>
            <input type="password" class="form-control" id="inputPassword" v-model=user.password>
          </div>
          <div class="form-group">
            <label for="inputPassword">{{ l('signup.repeatPassword') }}</label>
            <input type="password" class="form-control" id="inputPassword-check">
          </div>
          <div>
            <button class="btn btn btn-primary" @click="submit()">
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
