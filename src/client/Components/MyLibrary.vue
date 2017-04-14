<template>
  <div>
    <div id="my-library-header">
      <p><h3>{{ l('myLibrary.title') }}</h3></p>
    </div>
    <div style="padding-top:10px;">
      <div class="pull-left" style="padding-left:35px;">
        <button type="button" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
      </div>
      <div class="pull-right" style="padding-right:35px;">
        <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span></button>
        <button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></button>
      </div>
    </div>
    <br>
    <br>
    <hr>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">Livre #1</h3>
            </div>
            <div class="panel-body">
              Description<br> auteur<br> annee<br>photo
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">Livre #2</h3>
            </div>
            <div class="panel-body">
              Description<br> auteur<br> annee<br>photo
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">Livre #3</h3>
            </div>
            <div class="panel-body">
              Description<br> auteur<br> annee<br>photo
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="panel panel-success">
            <div class="panel-heading">
              <h3 class="panel-title">Livre #4</h3>
            </div>
            <div class="panel-body">
              Description<br> auteur<br> annee<br>photo
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLibrary',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#my-library-header{
  background:linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  padding:15px;
  color:white;
}

</style>
