<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-6 col-sm-12">
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label>Name:</label>
          <div>
            <input
              v-model="formData.name"
              type="text"
              required
              class="form-control"
              placeholder="Name"
            >
          </div>
        </div>
        <div class="mb-3">
          <label>Type:</label>
          <div>
            <select class="form-select" v-model="formData.type">
              <option v-for="item in availableRoleTypes" :key="item.id" :value="item.name"> {{item.name}}</option>
          </select>
          </div>
        </div>
        <div class="mb-3">
          <label>Description:</label>
          <div>
            <input
              v-model="formData.description"
              type="text"
              required
              class="form-control"
              placeholder="Description"
            >
          </div>
        </div>
        <button class="btn btn-primary" type="submit"> Save </button>
      </form>
    </div>
  </div>
</template>

<script>
import * as availableRoleTypes from '@/dataObject/RoleTypeData'

export default {
  props: {
    role: null
  },
  data() {
    return {
      availableRoleTypes,
      formData: {
        id: null,
        name: null,
        type: null,
        description: null,
        editable: null,
        active: null
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if(!this.role)
        return;

      this.formData = {...this.role};
    },
    onSubmit() {
      this.$emit('on-submit', this.formData);
    }
  }
}
</script>