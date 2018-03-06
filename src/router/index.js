import Vue from 'vue'
import Router from 'vue-router'
import defaultRoutes from './defaultRoutes'
import rankRoutes from './rankRoutes'
import recommendRoutes from './recommendRoutes'
import searchRoutes from './searchRoutes'
import singerRoutes from './singerRoutes'

Vue.use(Router)

export default new Router({
  routes: [
    ...defaultRoutes,
    ...rankRoutes,
    ...recommendRoutes,
    ...searchRoutes,
    ...singerRoutes
  ]
})
