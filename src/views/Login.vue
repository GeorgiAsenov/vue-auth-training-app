<template>
  <div class="Login">
    <div v-if="isLoading">..Is Loading</div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <form @submit.prevent="submit">
      <input type="email" v-model="form.email" placeholder="user@mail.com">
      <input type="password" v-model="form.password" placeholder="12345">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { close } from 'fs';

export default {
  name: 'Login',
  data () {
    return {
      showForm: true,
      isLoading: false,
      form: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    // checkForApiError (error) {

    // },
    // extract the login action from Vuex to our component to be used as a method
    ...mapActions(['login']),
    submit () {
      this.isLoading = true
      this.errorMessage = '';

      // calls the login action and passes the form object to it
      this.login(this.form)
        .then(response => {
          // when its done we set isLoading to false.
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          console.log(error)
          // if there was an error in the API, we show it.
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
