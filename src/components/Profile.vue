<template>
  <div>
    <div id="pages-header">
      <avatar style="display:inline-block;" v-bind:username="user.firstName + ' ' + user.lastName" :size="100"></avatar>
      <p><h3>{{user.firstName}} {{user.lastName}}</h3></p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 col-md-offset-1">
          <div id="profile-body">
            <tabs v-model="activeTab" nav-style="tabs" justified>
              <tab v-bind:header="l('profile.infos')">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-xs-3">
                        <b>{{l('profile.points')}}</b>
                      </div>
                      <div class="col-xs-9">
                        {{user.points}}
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-xs-3">
                        <b>{{l('profile.level')}}</b>
                      </div>
                      <div class="col-xs-9">
                        {{user.score}}
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-xs-3">
                        <b>{{l('profile.memberSince')}}</b>
                      </div>
                      <div class="col-xs-9">
                        {{formatDate}}
                      </div>
                    </div>
                  </li>
                </ul>
              </tab>
              <tab v-bind:header="l('profile.appointment')">
                <div class="panel panel-success">
                  <div class="panel-heading">
                    <h3 class="panel-title">Appointment #1</h3>
                  </div>
                  <div class="panel-body">
                    <p> <a href="#">Chez Roger</a> - 20/04/2017 14:00 </p>
                    <hr>

                  </div>
                </div>
              </tab>
              <tab v-bind:header="l('profile.param')">
                ...
              </tab>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'
import { tabs,tab } from 'vue-strap'

export default {
  name: 'Profile',
  components: {
    avatar: Avatar.Avatar,
    tabs,
    tab
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    formatDate() {

      var d = new Date(this.$store.state.user.signUpDate);
      var day = d.getDate();
      var monthIndex = d.getMonth();
      var year = d.getFullYear();
      return day + ' ' + this.$store.state.mlang.monthNames[monthIndex] + ' ' + year;
    }
  },
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#profile-body{
  margin-top:20px;
  padding:20px;
  border: 1px solid #eee;
}

.tableau-cell{
  width:33%;
}

</style>
