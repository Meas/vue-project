<template>
  <div class="d-flex align-items-center h-100">
    <button @click="onEdit" class="btn btn-primary me-3">
      Edit
    </button>
    <button @click="onDelete" class="btn btn-danger">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onEdit() {
      this.$emit('on-edit');
    },
    onDelete() {
      this.$emit('on-delete');
    }
  }
}
</script>