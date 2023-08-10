<template>
  <div class="container">
    <h1>Register your Brsk account</h1>
    <form class="row g-3 mt-5" @submit.prevent="submitForm">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="email address" required>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="password" required>
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required>
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity" placeholder="city" required>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose</option>
          <option>England</option>
          <option>Northen Ireland</option>
          <option>Wales</option>
          <option>Scotland</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip" placeholder="zip code" required>
      </div>
      <div class="col-12 pt-5">
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Register Form state tracker
      form:{
        email:"",
        password:"",
        address1:"",
        address2:"",
        city:"",
        State:"",
        zip:"",
      }
    }
  },
  // VueX used to mutate the state and register
  methods: {
    submitForm(){
      this.$store.commit('register',
      this.form.email, 
      this.form.password, 
      this.form.address1, 
      this.form.address2, 
      this.form.city, 
      this.form.State, 
      this.form.zip,
    )

    this.$router.push('/about');
    },
  }
}
</script>

<style scoped>
.btn-primary {
  float: left;
}
</style>