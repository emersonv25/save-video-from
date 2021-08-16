import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detalhes: {},
    download: ''
  },
  getters: {

  },
  mutations: {
    set_detalhes (state, detalhes){
      state.detalhes = detalhes
    },
    set_download (state, download){
      state.download = download
    }

  },
  actions: {
    getDetalhes({commit}, url) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/detalhes/', {
            params: {
              url: url,
            }
          })
          .then(function (resp) {
            commit('set_detalhes', resp.data);
            resolve(resp)
          })
          .catch(function (error) {
            console.log(error);
            reject(error)
        })
      })
    },
    getDownload({commit}, payload){
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/download/', {
            params: {
              url: payload.url,
              quality: payload.quality
            }
          })
          .then(function (resp) {
            commit('set_download', resp.data);
            resolve(resp)
          })
          .catch(function (error) {
            console.log(error);
            reject(error)
        })
      })
    }
  },
  modules: {}
})