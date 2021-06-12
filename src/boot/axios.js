import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const apiAle = axios.create({baseURL:'http://localhost:8081/api/v1'})
Vue.prototype.$apiAle = apiAle

const apiLeo = axios.create({baseURL:'http://localhost:8080/api/v1'})
Vue.prototype.$apiLeo = apiLeo

export { axios, apiAle, apiLeo}
