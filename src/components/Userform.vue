<template>
  <div class="container col-sm-5">
    <h3 class="text-warning">FILL THIS FORM</h3>
    <form class="form" v-on:submit.prevent="onSubmit">
      <label for="email">Email :</label>
      <input
        type="email"
        :class=" {error:$v.email.$error} "
        @input="$v.email.$touch()"
        v-model.trim="email"
        class="form-control"
        placeholder="Enter Email"
      >
      <!-- error message-->
      <div v-if="$v.email.$dirty">
        <span
          class="text-danger"
          v-if="!$v.email.email"
        >Please enter valid email address "example@mail.com "</span>
        <span class="text-warning" v-if="!$v.email.required">*Email required</span>
      </div>
      <br>
      <label for="first_name">First Name :</label>
      <input
        type="text"
        :class=" {error:$v.first_name.$error} "
        v-model.trim="first_name"
        @input="$v.first_name.$touch()"
        class="form-control"
        placeholder="Enter First Name"
      >
      <!-- error message-->
      <div v-if="$v.first_name.$dirty">
        <span class="text-warning" v-if="!$v.first_name.required">*Name required</span>
      </div>
      <br>
      <label for="last_name">Last Name :</label>
      <input
        type="text"
        :class=" {error:$v.last_name.$error} "
        v-model.trim="last_name"
        @input="$v.last_name.$touch()"
        class="form-control"
        placeholder="Enter Last Name"
      >
      <br>
      <label for="password">Password :</label>
      <input
        type="password"
        :class=" {error:$v.password.$error} "
        v-model.trim="password"
        @input="$v.password.$touch()"
        class="form-control"
        placeholder="Enter Password error"
      >
      <!-- error message-->
      <div v-if="$v.password.$dirty">
        <span class="text-warning" v-if="!$v.password.required">*Password required</span>
        <span class="text-danger" v-if="!$v.password.minLength">Password must greater then 7</span>
      </div>
      <br>
      <label for="password">Repeat Password :</label>
      <input
        type="password"
        :class=" {error:$v.repeat_password.$error} "
        v-model.trim="repeat_password"
        @input="$v.repeat_password.$touch()"
        class="form-control"
        placeholder="Enter Password error"
      >
      <!-- error message-->
      <div v-if="$v.repeat_password.$dirty">
        <span class="text-danger" v-if="!$v.repeat_password.sameAsPassword">Password much be same</span>
        <span class="text-warning" v-if="!$v.repeat_password.required">*Password required</span>
      </div>
      <button
        type="submit"
        :disabled="$v.$invalid"
        class="btn btn-outline-success my-4 float-right"
      >SUBMIT</button>
    </form>
    <!--Get validators on page  -->
    <!-- <div class="validators">
      <pre> {{$v}} </pre>
    </div>-->
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Userform",
  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      repeat_password: ""
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
      required,
      minLength: minLength(7)
    },
    repeat_password: {
      required,
      minLength: minLength(7),
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onSubmit() {}
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Charmonman|Noto+Serif+TC|Permanent+Marker");

h3 {
  text-align: center;
  font-family: "Permanent Marker", cursive;
  font-size: 40px;
}
label {
  font-family: "Charmonman", cursive;
  font-weight: bold;
}
input:focus {
  outline: none;
}
span {
  font-family: "Noto Serif TC", serif;
}
.error {
  border: 1px solid red;
}
button:disabled {
  cursor: not-allowed;
}
</style>
