<template>
  <div class="container">
    <h1>Login to your Brsk account</h1>
    <form class="justify-center mt-5" @submit.prevent="Submit">
      <div class="row justify-content-center mb-5">
        <div class="col-6">
          <label for="inputEmail4" class="form-label left">Email</label>
          <input type="email" class="form-control" v-model="form.email" required>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-6">
          <label for="inputPassword4" class="form-label left">Password</label>
          <input type="password" class="form-control" v-model="form.password" required>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-6">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Login Form state tracker
      form:{
        email:"",
        password:"",
      }
    }
  },
  // VueX used to mutate the state and login 
  methods: {
    Submit(){
      this.$store.commit('login', this.form.email, this.form.password)
    }
  }
}
</script>

<style scoped>
.btn-primary {
  float: left;
}

.left {
  float: left;
}

.container {
  width: 800px;
  height: 800px;
}
</style>