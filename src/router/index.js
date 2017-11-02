import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import Gridstack from '../components/gridstack-demo.vue';
import debug from '../components/debug.vue';
import mobileConfig from '../components/mobile-config.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'mobileConfig',
            component: mobileConfig,
        },
        {
            path: '/debug',
            name: 'debug',
            component: debug,
        },
    ],
});
