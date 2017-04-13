<template>
  <div>
    <div id="profile-header">
      <avatar style="display:inline-block;" username="John Doe" :size="100"></avatar>
      <p><h3>John Doe</h3></p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8 col-md-offset-2">
          <div id="profile-body">
            <tabs v-model="activeTab" nav-style="tabs" justified>
              <tab header="Mes infos">
                <table style="width:100%">
                  <tr>
                    <td class="tableau-cell"><p><b>Mes points</b></p></td>
                    <td><p>10</p></td>
                  </tr>
                  <tr>
                    <td><p><b>Mon niveau</b></p></td>
                    <td>1</td>
                  </tr>
                </table>
              </tab>
              <tab header="Mes rendez-vous">
                ...
              </tab>
              <tab header="Mon compte">
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
  data () {
    return {
      activeTab: ''
    }
  }
}
</script>

<style lang="sass">
@import "../assets/css/babelbooks";

#profile-header{
  background:linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  padding:15px;
  color:white;
}

#profile-body{
  margin-top:20px;
  padding:20px;
  border: 1px solid #eee;
}

.tableau-cell{
  width:33%;
}

</style>
