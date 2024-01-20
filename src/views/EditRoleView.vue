<template>
  <div class="mt-3">
    <div v-if="!item">
      404
    </div>
    <div v-else>
      <div>
        <RoleForm :role="item" @on-submit="handleSubmit"/>
      </div>
    </div>
  </div>
</template>

<script>
import RoleForm from '@/components/RoleForm.vue';
import { mapGetters } from 'vuex';

export default {
    mounted() {
      this.init();
    },
    data() {
      return {
        item: null
      };
    },
    computed: {
      ...mapGetters({
        roleData: 'roles/getData',
      })
    },
    methods: {
      init() {
        const role = this.roleData.find(item => item.id == this.$route.params.id);
        this.item = role;
      },
      handleSubmit (value) {
        console.log('edit', value);
        this.$store.dispatch('roles/updateItem', value);
        this.$router.push({name: 'home'});
      }
    },
    components: { RoleForm }
}
</script>