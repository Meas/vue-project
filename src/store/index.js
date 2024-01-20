/* import Vue from "vue";
import Vuex from "vuex";

import roles from "./modules/roles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    roles
  },
  strict: false,
});
 */

import { createStore } from 'vuex'

import roles from "./modules/roles";

export default createStore({
  modules: {
    roles
  },
  strict: false,
})