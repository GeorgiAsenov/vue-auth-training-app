<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showSuccess('success message', 'OK')">success</button>
    <button @click="showError('error message', 'NOT')">error</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    showSuccess (title, text) {
      this.$notify.success({
        title: title,
        text: text
      })
    },
    showError (title, text) {
      this.$notify.error({
        title: title,
        text: text
      })
    }
  }
}
</script>

<style>

</style>
