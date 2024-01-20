<template>
  <div class="outer" :title="`${item.first_name} ${item.last_name}`">
    <img :src="item.photo_url">
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.outer {
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
</style>