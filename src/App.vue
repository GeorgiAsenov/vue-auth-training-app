<template>
  <div id="app">
    <div id="nav">
      <the-navigation/>
      <div>
        <a href="#" @click="langChange('bg')">BG</a>/
        <a href="#" @click="langChange('en')">EN</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import TheNavigation from './components/TheNavigation'
import { mapActions } from 'vuex'

export default {
  components: { TheNavigation },
  methods: {
    langChange (lang) {
      this.chooseLang({ lang: lang, title: this.$route.meta.title })
    },
    ...mapActions([`chooseLang`])
  }
}
</script>
