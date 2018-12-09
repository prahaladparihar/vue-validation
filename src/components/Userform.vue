<template>
  <div class="container col-sm-5">
    <h3 class="text-warning">FILL THIS FORM</h3>
    <form class="form" v-on:submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input
        type="email"
        :class=" {error:$v.email.$error} "
        @input="$v.email.$touch()"
        v-model.trim="email"
        class="form-control"
        placeholder="Enter Email"
      >
      <br>
      <label for="first_name">First Name</label>
      <input
        type="text"
        :class=" {error:$v.first_name.$error} "
        v-model.trim="first_name"
        @input="$v.first_name.$touch"
        class="form-control"
        placeholder="Enter First Name"
      >
      <br>
      <label for="last_name">Last Name</label>
      <input
        type="text"
        :class=" {error:$v.last_name.$error} "
        v-model.trim="last_name"
        @input="$v.last_name.$touch"
        class="form-control"
        placeholder="Enter Last Name"
      >
      <br>
      <label for="password">Password</label>
      <input
        type="password"
        :class=" {error:$v.password.$error} "
        v-model.trim="password"
        @input="$v.password.$touch"
        class="form-control"
        placeholder="Enter Password"
      >
      <br>
      <button type="submit" class="btn btn-outline-success my-4">Submit</button>
    </form>
    <div class="validators">
      <pre> {{$v}} </pre>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "Userform",
  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    first_name: {
      required
    },
    last_name: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    onSubmit() {}
  }
};
</script>


<style scoped>
h3 {
  text-align: center;
}
input:focus {
  outline: none;
}
.error {
  border: 1px solid red;
}
</style>
