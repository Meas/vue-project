<template>
  <div class="role p-3">
    <h4> {{ item.name }} </h4>
    <h5> {{ item.type }} </h5>
    <p>
      {{ item.description }}
    </p>
    
    <div class="d-flex flex-row">
      <div v-for="user in item.users" :key="user.id" class="me-2">
        <UserAvatar :item="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';

export default {
  components: {
    UserAvatar
},
  props: {
    item: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style scoped lang="scss">
.role {
  border: 1px solid #333;
}
</style>