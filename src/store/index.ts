import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import { BASS, TREBLE } from "@/entities/Clef";
import { NOTATION_SOLFEGE } from "@/entities/base/index";

/**
 * Vuex Store
 */
Vue.use(Vuex)

export enum MUTATIONS {
  TOGGLE_CLEF = "toggleClef",
  SET_NOTATION = "setNotation"
}

const DEFAULT_FILTER_CLEFS = [BASS, TREBLE];

const store = new Vuex.Store({
  state: {
    filter_clefs: DEFAULT_FILTER_CLEFS,
    filter_notation: NOTATION_SOLFEGE
  },
  mutations: {
    toggleClef(state, clef) {
      if (state.filter_clefs.indexOf(clef) > -1) {
        state.filter_clefs.splice(
          state.filter_clefs.indexOf(clef),
          1
        )
      }
      else {
        state.filter_clefs.push(clef);
      }
    },
    setNotation(state, notation) {
      state.filter_notation = notation
    }
  }
})

export default store;
