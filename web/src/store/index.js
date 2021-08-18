import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detalhes: {},
    exibirDetalhes: false,
    video: '',
    error: '',
    errorDownload: ''
  },
  getters: {

  },
  mutations: {
    set_detalhes (state, detalhes){
      state.detalhes = detalhes
      state.exibirDetalhes = true
    },
    set_download (state, video){
      state.video = video
    },
    set_error(state, error){
      state.error = error
    },
    set_errorDownload(state, error){
      state.errorDownload = error
    },
    clear(state){
      state.error = ''
      state.video = ''
      state.detalhes = {}
      state.exibirDetalhes = false
    },
    clear_download(state){
      state.video = ''
      state.errorDownload = ''
    }

  },
  actions: {
    getDetalhes({commit}, url) {
      let detalhes = {}
      commit('clear')
      return new Promise((resolve, reject) => {
        axios.get('http://192.168.0.108:3000/getinfo/', {
            params: {
              url: url,
            }
          })
          .then(function (resp) {
            detalhes = resp.data
            console.log(detalhes)
            commit('set_detalhes', detalhes);
            resolve(resp)
          })
          .catch(function (error) {
            commit('set_error', 'Endereço <b>inválido</b> ou <b>não suportado</b>')
            reject(error)
        })
      })
    },
    getDownload({commit}, payload){
      commit('clear_download')
      return new Promise((resolve, reject) => {
        axios.get('http://192.168.0.108:3000/geturl/', {
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
            commit('set_errorDownload', 'Download não suportado')
            reject(error)
        })
      })
    }
  },
  modules: {}
})