<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showSuccess">success</button>
    <button @click="showError">error</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    showSuccess () {
      this.$notify.success({})
    },
    showError () {
      this.$notify.error({})
    }
  }
}
</script>

<style>

</style>
