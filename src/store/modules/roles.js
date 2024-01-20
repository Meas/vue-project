import { getRolesService, deleteRoleService } from "@/services/roleService";

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
