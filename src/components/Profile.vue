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
                <h3> Appointments in which you are giving the book </h3>
                <accordion :one-at-atime="true" type="info">
                  <panel v-for="(appointment,index) in appointmentsFor" type="primary">
                    <strong slot="header">Appointment #{{index}}<br>
                      With: Tabernac<br>
                      When: 10/01/2017<br>
                      Where: Insa
                    </strong>
                    <gmap-map
                      :center="center"
                      :zoom="7"
                      style="width: 100%; height: 400px"
                    >
                      <gmap-marker
                        :key="index"
                        :position="marker.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=marker.position"
                      ></gmap-marker>
                    </gmap-map>
                  </panel>
                </accordion>
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
import { tabs,tab,accordion,panel } from 'vue-strap'

export default {
  name: 'Profile',
  components: {
    avatar: Avatar.Avatar,
    tabs,
    tab,
    accordion,
    panel
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
      activeTab: 0,
      appointmentsFor: [''],
      appointmentsWith: [],
      center: {lat: 10.0, lng: 10.0},
      marker: {
        position: {lat: 10.0, lng: 10.0}
      }
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

</style>
