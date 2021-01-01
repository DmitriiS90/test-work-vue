<template>
  <div class="row">

    <div class="col s6 offset-s3">

    <h3>New user</h3>

    <form @submit.prevent="submitForm">

      <div class="field">
        <input type="text" 
               placeholder="name"
               v-model="name"
               required
               :class="{invalid: $v.name.$dirty && !$v.name.required}"/>

        <span v-if="$v.name.$dirty && !$v.name.required" class="helper-text invalid" data-error="Name is required"></span>
      </div>

      <div class="field">
        <input type="email"
               placeholder="email"
               v-model="email"
               required
               :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"/>

        <span v-if="$v.email.$dirty && !$v.email.required" class="helper-text invalid" data-error="Email is required"></span> 
        <span v-else-if="$v.email.$dirty && !$v.email.email" class="helper-text invalid" data-error="Invalid email"></span> 
      </div>

      <div class="field">
        <input  type="text" 
                placeholder="phone number"
                v-model="phoneNumber"
                required
                :class="{invalid: ($v.phoneNumber.$dirty && !$v.phoneNumber.required) || ($v.phoneNumber.$dirty && !$v.phoneNumber.minLength)}"/>

        <span v-if="$v.phoneNumber.$dirty && !$v.phoneNumber.required" class="helper-text invalid" data-error="phone number is requerd" ></span>
        <span v-else-if="$v.phoneNumber.$dirty && !$v.phoneNumber.minLength" class="helper-text invalid" data-error="Phone number length must be 8" ></span>
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
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'CreateProfile',
  data:()=>({
    name:'',
    email:'',
    phoneNumber:'',
    status:''
  }),
  validations: {
    name:{required},
    email:{email, required},
    phoneNumber:{required, minLength: minLength(8)}
  },
  mounted(){
    M.FormSelect.init(this.$refs.select);
  },
  methods: {
    submitForm(){
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
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