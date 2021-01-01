<template>
  <div class="row">

    <div class="col s6 offset-s3">

    <h3>New user</h3>

    <form @submit.prevent="submitForm">

      <div class="field">
        <input id="name" v-model="name" type="text" placeholder="name" class="validate" required/>
        <span class="helper-text" data-error="name is requerd" ></span>
      </div>
      <div class="field">
        <input id="email" v-model="email" type="email" placeholder="email" class="validate" required/>
        <span class="helper-text" data-error="email is requerd" ></span>
      </div>
      <div class="field">
        <input id="phone" v-model="phoneNumber" type="text" placeholder="phone number" class="validate" required/>
        <span class="helper-text" data-error="phone number is requerd" ></span>
      </div>
      <div class="field">
        <select ref="select" v-model="status" class="validate" required>
          <option value="" disabled selected>status</option>
          <option value="partner">partner</option>
          <option value="client">client</option>
          <option value="admin">admin</option>
        </select>
        <span class="helper-text" data-error="status is requerd" ></span>
      </div>

      <button class="btn" type="submit">Create profile</button>
      
    </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreateUser',
  components: {
    
  },
  data:()=>({
    name:'',
    email:'',
    phoneNumber:'',
    status:''
  }),
  mounted(){
    M.FormSelect.init(this.$refs.select);
  },
  methods: {
    submitForm(){
      const user = {
        name:this.name,
        id: Date.now(),
        email:this.email,
        phoneNumber:this.phoneNumber,
        status:this.status
      }
      this.$store.dispatch('createUser', user)
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