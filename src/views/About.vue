<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showSuccess">success</button>
    <button @click="showSuccess2">success2</button>
    <button @click="showError">error</button>
    <button @click="showQuestion">question</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    showSuccess () {
      this.$notify.success('success message here')
    },
    showSuccess2 () {
      this.$notify.success({
        text: 'vuejs',
        footer: 'asd.jkasjdaskjda'
      })
    },
    showError () {
      this.$notify.error({
        position: 'top-right'
      })
    },
    showQuestion () {
      this.$notify.question({
        text: 'click okay to continue'
      })
    }
  }
}
</script>

<style>

</style>
