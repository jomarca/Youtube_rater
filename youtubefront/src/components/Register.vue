<template>
  <div class="">
    <h1>User Registration</h1>

      <form id="formvideo"  @submit.prevent="CreateUser">
                  <p>
                    <label for="username">Username </label>
                    <input class="ml-2" type="text" name="username" id="username" v-model="username">
                  </p>
                  <p>
                    <label for="password">password </label>
                    <input class="ml-2" type="password" name="password" id="password" v-model="password" >
                  </p>
                 
                  <p>
                    <input type="submit" value="Submit">  
                  </p>

        </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'register',
  components: {
    
  },
  data() {
    return {
   username:null,
   password:null,
    }
  },
  methods: {
    CreateUser() {
      console.log(this.username)
      axios.post('http://127.0.0.1:8000/api/users/', {
        username: this.username,
        password: this.password,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      this.$router.push('/') 

       },
    }
  }
</script>
