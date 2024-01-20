<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="container py-3">
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch('roles/fetchData');
    }
  }
}
</script>