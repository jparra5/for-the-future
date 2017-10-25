/*
Licensed Materials - Property of IBM
Restricted Materials of IBM.  Reproduction, modification and redistribution are prohibited.

DevOps Insights

© Copyright IBM Corporation 2016, 2017.
U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

import Vuex from 'vuex'
import Vue from 'vue'
// import applications from './modules/applications';
// import availability from './modules/availability';

Vue.use(Vuex)

// As the app grows we would include more modules here. Using modules like
// this allows us to use a single state tree with the ability to act on
// different parts of that tree as needed.
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

export default store
