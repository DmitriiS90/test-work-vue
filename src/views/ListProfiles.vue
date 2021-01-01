<template>
  <div>
      <h3>Profiles</h3>
      <div class="row">
          <div class="input-field col s6">
              <select ref="select" v-model="filter">
                <option value="" disabled selected>Status filter</option>
                <option value="partner">partner</option>
                <option value="client">client</option>
                <option value="admin">admin</option>
              </select>
              <button class="btn" @click="filter=null">clear filter</button>
          </div>
      </div>
      <hr>

      <table v-if="users.length">
        <thead>
          <tr>
            <th>N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Status</th>
            <th>Profiles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, idx) of displayUsers" :key="user.id">
            <td>{{idx + 1}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phoneNumber}}</td>
            <td>{{user.status}}</td>
            <td>
              <router-link tag="button" :to="'/profile/' + user.id" class="btn">
                 Open profile
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No users</p>
  </div>
</template>

<script>

export default {
    name: 'ListUsers',
    data:()=>({
      filter:''
    }),
    computed: {
      users() {
        return this.$store.getters.users
      },
      displayUsers() {
        return this.users.filter(u => {
          if(!this.filter) {
            return true
          }
          return u.status === this.filter
        })
      }
    },
    mounted(){
        M.FormSelect.init(this.$refs.select);
    }
}
</script>
