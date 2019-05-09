<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showSuccess">success</button>
    <button @click="showError">error</button>
    <p>{{ $t(`navigations.home`) }}</p>
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
        title: 'Done!'
      })
    },
    showError () {
      this.$notify.error({
        position: 'top-right'
      })
    },
    showQuestion () {
      this.$notify.quiestion({
        text: 'click okay to continue'
      })
    }
  }
}
</script>

<style>
</style>
