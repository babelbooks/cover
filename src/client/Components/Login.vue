<template>
  <header id="top" class="header">
    <div class="text-vertical-center">
      <div class="container col-md-6 col-md-offset-3 login-container">
        <div class="row">

          <div class="main">

            <h3>Se connecter</h3>
            <div class="row">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <a href="#" class="btn btn-lg btn-primary btn-block">Facebook</a>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <a href="#" class="btn btn-lg btn-info btn-block">Google</a>
              </div>
            </div>
            <div class="login-or">
              <hr class="hr-or">
            </div>
            <form role="form">
              <div class="form-group">
                <label for="inputUsernameEmail">Courriel</label>
                <input type="text" class="form-control" id="inputUsernameEmail">
              </div>
              <div class="form-group">
                <label for="inputPassword">Mot de passe</label>
                <input type="password" class="form-control" id="inputPassword">
              </div>
              <div>
                <button type="submit" class="btn btn btn-primary">
                  Log In
                </button>
              </div>
              <div class="checkbox pull-right">
                <label>
                  <input type="checkbox">
                  Se souvenir de moi </label>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  </header>
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
    background-color:white;
    border-radius: 25px;
}
.main{
	padding: 38px;
}
.social-box{
  margin: 0 auto;
  padding: 38px;
  border-bottom:1px #ccc solid;
}
.social-box a{
  font-weight:bold;
  font-size:18px;
  padding:8px;
}
.social-box a i{
  font-weight:bold;
  font-size:20px;
}
.heading-desc{
	font-size:20px;
	font-weight:bold;
	padding:38px 38px 0px 38px;

}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: 20px;
  padding: 20px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-radius: 5px;

}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-radius: 5px;
}
.login-footer{
	background:#f0f0f0;
	margin: 0 auto;
	border-top: 1px solid #dadada;
	padding:20px;
}
.login-footer .left-section a{
	font-weight:bold;
	color:#8a8a8a;
	line-height:19px;
}
.mg-btm{
	margin-bottom:20px;
}
</style>
