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
    return {}
  },
  methods: {
    showSuccess () {
      this.$notify.success({
        title: 'Success',
        text: 'green is good',
        position: 'top-left',
        showConfirmButton: false
      })
    },
    showError () {
      this.$notify.error({
        title: 'Error',
        text: 'red is bad',
        position: 'top-right',
        showConfirmButton: false
      })
    }
  }
}
</script>

<style>

</style>
