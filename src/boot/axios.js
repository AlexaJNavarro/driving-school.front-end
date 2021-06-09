import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({baseURL:'http://localhost:8081/api/v1'})
Vue.prototype.$api = api

export { axios, api}
