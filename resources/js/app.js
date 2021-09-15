// require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from '../plugins/vuetify';
import routes from './routes/router';

Vue.use(VueRouter);

Vue.component('app-component', require('./components/App.vue').default);

const router = new VueRouter({
    routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router: router,
});
