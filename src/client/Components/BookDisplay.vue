<template>  
  <div class="panel panel-default">
    <router-link to="/book/1">
      <div class="book-wrapper">
        <img v-bind:src="book.cover" class="book-img" alt="" />
        <span class="glyphicon glyphicon-option-horizontal more-options"></span>
        <div class="book-txt-wrapper">
          <h4>
            <b>{{book.title}}</b>
          </h4>
        </div>
      </div>
    </router-link>
    <div class="panel-footer">
      <div class="row">
        <div class="col-xs-4">
          <span class="glyphicon glyphicon-send" aria-hidden="true"></span> 1
        </div>
        <div class="col-xs-4">
          <span class="glyphicon glyphicon-comment" aria-hidden="true"></span> 22
        </div>
        <div class="col-xs-4">
          <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> 6
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../utils/config'

export default {
  name: 'book-display',
  data () {
    return {

    }
  },
  props: ['book']
}
</script>

<style lang="sass">

</style>