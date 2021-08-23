import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../api.json'

//const apiUrl = api.local
const apiUrl = api.server

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detalhes: {},
    exibirDetalhes: false,
    video: '',
    error: '',
    errorDownload: '',
    url: ''
  },
  getters: {

  },
  mutations: {
    set_url(state, url){
      state.url = url
    },
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
        axios.get(apiUrl + '/getinfo/', {
            params: {
              url: url,
            }
          })
          .then(function (resp) {
            detalhes = resp.data
            commit('set_detalhes', detalhes);
            resolve(resp)
          })
          .catch(function (error) {
            commit('set_error', 'Endereço inválido ou não suportado')
            reject(error)
        })
      })
    },
    getDownload({commit}, payload){
      commit('clear_download')
      return new Promise((resolve, reject) => {
        axios.get(apiUrl + '/geturl/', {
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