<template>
  <div class="row">
      <div v-if="user" class="col s6 offset-s3">
          <h3>{{user.name}}</h3>
          <form @submit.prevent="submitForm">

              <div class="field">
                  <input v-model="email" id="email" type="email" class="validate" required/>
                  <span class="helper-text" data-error="email is requerd"></span>
              </div>
              <div class="field">
                  <input v-model="phoneNumber" id="phoneNumber" type="text" class="validate" required/>
                  <span class="helper-text" data-error="phone number is requerd"></span>
              </div>
              <div class="field">
                  <select ref="select" v-model="status" class="validate" required>
                    <option value="" disabled selected>Статус</option>
                    <option value="partner">Партнер</option>
                    <option value="client">Клиент</option>
                    <option value="admin">Admin</option>
                   </select>
              </div>
              <div>
                  <button class="btn" type="submit" style="margin-right: 1rem">Edit profile</button>
                  <button class="btn red" type="button" @click="deleteProfile">Delete profile</button>
              </div>
              
          </form>
      </div>
      <p v-else>No users</p>
  </div>
</template>

<script>
export default {
    data:()=>({
        email: '',
        phoneNumber: '',
        status: ''
    }),
    computed: {
        user(){
            return this.$store.getters.userById(Number(this.$route.params.id))
        } 
    },
    mounted() {
        this.email = this.user.email,
        this.phoneNumber = this.user.phoneNumber,
        this.status = this.user.status
        M.FormSelect.init(this.$refs.select);
    },
    methods: {
        submitForm() {
            this.$store.dispatch('editUser', {
                id: this.user.id,
                email: this.email,
                phoneNumber: this.phoneNumber,
                status: this.status
            })
            this.$router.push('/list')
        },
        deleteProfile() {
            this.$store.dispatch('deleteUser', this.user.id)
            this.$router.push('/list')
        }
    }

}
</script>

<style>
.field {
    height: 60px;
}
</style>