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
      this.$notify.success('success', 'the message is send')
    },
    showError () {
      this.$notify.error('error', 'the message it\'s not send')
    }
  }
}
</script>

<style>

</style>
