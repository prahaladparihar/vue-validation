<template>
  <div class="container col-sm-5">
    <h3 class="text-info">ADD THIS FORM</h3>
    <form class="form" v-on:submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input type="email" v-model.trim="email" class="form-control" placeholder="Enter Email">
      <br>
      <label for="first_name">First Name</label>
      <input
        type="text"
        v-model.trim="first_name"
        class="form-control"
        placeholder="Enter First Name"
      >
      <br>
      <label for="last_name">Last Name</label>
      <input
        type="text"
        v-model.trim="last_name"
        class="form-control"
        placeholder="Enter Last Name"
      >
      <br>
      <label for="password">Password</label>
      <input
        type="password"
        v-model.trim="password"
        class="form-control"
        placeholder="Enter Password"
      >
      <br>
      <button type="submit" class="btn btn-outline-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Userform"
};
</script>


<style scoped>
h3 {
  text-align: center;
}
</style>
