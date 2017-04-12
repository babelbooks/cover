<template>
  <header id="top" class="header">
      <div class="text-vertical-center">
          <h1><img src="assets/img/logo-bb-title.svg" height="200px" alt="Babelbooks" class="svg"></h1>
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
@import "../assets/css/babelbooks"

</style>
