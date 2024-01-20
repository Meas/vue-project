<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->
<template>
  <div>
    <div>
      I am homepage
    </div>
    <div class="mt-3 row">
      <div v-for="item in items" :key="item.id" class="col-4 mt-3">
        <RoleCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import RoleCard from '@/components/RoleCard.vue';
import { getUserRoles } from '@/services/roleService';

export default {
  components: {
    RoleCard
  },
  mounted() {
    this.init();
  },
  data () {
    return {
      items: [],
    };
  },
  methods: {
    init() {
      this.items = getUserRoles();
    }
  },
}
</script>