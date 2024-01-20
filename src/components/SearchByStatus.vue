<template>
  <div>
    <select class="form-select" aria-label="Default select example" @change="(e) => onChange(e.target.value)">
      <option selected value="0">Active and Inactive</option>
      <option v-for="item in availableStatuses" :key="item.id" :value="item.id"> {{item.name}}</option>
    </select>
</div>
</template>

<script>
import * as availableStatuses from '@/dataObject/RoleStatusData'

export default{
  data() {
    return {
      availableStatuses
    }
  },
  methods: {
    onChange(value) {
      this.$emit("on-change", value);
    }
  }
}

</script>