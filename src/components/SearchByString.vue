<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search" @input="(e) => onChange(e.target.value)">
      <span class="input-group-text bg-primary text-white">S</span>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    onChange(value) {
      this.$emit("on-change", value);
    }
  }
}
</script>