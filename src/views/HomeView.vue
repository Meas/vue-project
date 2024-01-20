<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->
<template>
  <div class="mt-3">
    <h3>
      User Roles Management
    </h3>
    <div class="mt-3 row">
      <div class="col-4">
        <SearchByString @on-change="handleSearchTextChange" />
      </div>
      <div class="col-4">
        <SearchByStatus @on-change="handleStatusChange"/>
      </div>
    </div>
    <div class="mt-3 row">
      <div v-for="item in filteredList" :key="item.id" class="col-4 mt-3">
        <RoleCard :item="item" @on-delete="handleOnDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import RoleCard from '@/components/RoleCard.vue';
import SearchByStatus from '@/components/SearchByStatus.vue';
import SearchByString from '@/components/SearchByString.vue';
import { ACTIVE, INACTIVE } from '@/dataObject/RoleStatusData';

import { mapGetters } from 'vuex';

export default {
  components: {
    RoleCard,
    SearchByString,
    SearchByStatus
},
  mounted() {
    this.init();
  },
  data () {
    return {
      searchText: '',
      status: 0
    };
  },
  computed: {
    ...mapGetters({
      roleData: 'roles/getData',
    }),
    filteredList() {
      let items = [...this.roleData];
      if(this.searchText) 
        items = items.filter(item => {
          return item.name.toLowerCase().includes(this.searchText.toLocaleLowerCase());
        })
      if(this.status !== 0) 
        items = items.filter(item => {
          return item.active && this.status == ACTIVE.id || !item.active && this.status == INACTIVE.id;
        })
      return items;
    }

  },
  methods: {
    init() {

    },
    handleStatusChange(e) {
      this.status = Number(e);
    },
    handleSearchTextChange(e) {
      this.searchText = e;
    },
    handleOnDelete(e) {
      this.$store.dispatch('roles/deleteItem', e);
    }
  },
}
</script>