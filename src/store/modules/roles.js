import { getRolesService, deleteRoleService, updateRoleService } from "@/services/roleService";

const state = {
  data: []
}

// getters
const getters = {
  getData: (state) => {
    return state.data;
  }
}

// actions
const actions = {
  async fetchData ({ commit }, payload) {
    const response = await getRolesService();

    //TODO: error handling
    commit('setRoleData', response);
  },
  async deleteItem({ commit, state }, payload) {
    const response = await deleteRoleService(payload);
    //TODO: error handling
    const updatedList = state.data.filter(item => item.id !== Number(payload))

    commit('setRoleData', updatedList);
  },

  async updateItem({ commit, state }, payload) {
    const response = await updateRoleService(payload);
    //TODO: error handling
    const updatedList = state.data.map(item => {
      if(item.id == payload.id) 
        item = payload;
      return item;
    })
    console.log('updatedList', updatedList);

    commit('setRoleData', updatedList);
  }
}

// mutations
const mutations = {
  setRoleData (state, payload) {
    state.data = payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
