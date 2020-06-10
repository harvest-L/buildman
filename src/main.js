/*
 * @Author: flyharvest
 * @Date: 2020-04-21 11:30:29
 * @LastEditTime: 2020-06-10 11:02:45
 * @LastEditors: flyharvest
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#stage',
  components: {App},
  template: '<App/>'
})
