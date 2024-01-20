<template>
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