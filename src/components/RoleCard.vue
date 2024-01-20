<template>
  <div class="role">
    <div class="p-3">
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
    <div class="mt-3 bg-secondary bottom d-flex flex-row-reverse p-3">
      <div v-if="item.editable">
        <EditDeleteButtons @on-delete="onDelete" @on-edit="onEdit" />
      </div>
      <div class="d-flex align-items-center h-100" v-else> LockIcon </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';
import EditDeleteButtons from './EditDeleteButtons.vue';

export default {
  components: {
    UserAvatar,
    EditDeleteButtons
},
  props: {
    item: {
      type: Object,
      default: () => {}
    },
  },
  methods: {
    onDelete() {
      this.$emit('on-delete', this.item.id)
    },
    onEdit() {
      this.$router.push({name: 'edit-role', params: { id: this.item.id }});
    }
  }
}
</script>

<style scoped lang="scss">
.role {
  border: 1px solid #333;
}
.bottom {
  height: 75px;
}
</style>