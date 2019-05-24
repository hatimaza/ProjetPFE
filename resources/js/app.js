/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
//import {Form,HasError,AlertError} from 'vform';

// import SweetAlert2 from 'sweetalert2/dist/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';

// window.Swal = SweetAlert2;

// const toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000
// });


//window.Toast = toast;

// window.Form = Form;
// Vue.component(HasError.name,HasError)
// Vue.component(AlertError.name,AlertError)
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// import VueProgressBar from 'vue-progressbar'
// Vue.use(VueProgressBar, {
//     color: 'rgb(120, 250, 150)',
//     failedColor: 'red',
//     height: '3px'
// })

window.Fire =  new Vue();

let routes = [

     { path:'/Acceuil' ,component: require('./components/Home.vue').default},
    // { path:'/' ,component: require('./components/Dashboards.vue').default},
    { path:'/ListeTickets' ,component: require('./components/ListeTickets.vue').default},
    { path:'/ListeTaches' ,component: require('./components/ListeTaches.vue').default},
    { path:'/AddTache' ,component: require('./components/AddTache.vue').default},
    { path:'/Profile' ,component: require('./components/Profile.vue').default},
    { path:'/Detail' ,component: require('./components/Details.vue').default},
    { path:'/Mesprojets' ,component: require('./components/Mesprojets.vue').default},
    { path:'/DetailTicket' ,component: require('./components/DetailTicket.vue').default},
    { path:'/DetailTache' ,component: require('./components/DetailTache.vue').default},
    { path:'/DetailCollaborateur' ,component: require('./components/DetailCollaborateur.vue').default},
    { path:'/MesEquipes' ,component: require('./components/MesEquipes.vue').default},
    { path:'/MesTaches' ,component: require('./components/MesTaches.vue').default},
    { path:'/MesTickets' ,component: require('./components/MesTicket.vue').default},
    { path:'/Index' ,component: require('./components/Index.vue').default},
     { path:'/Statistique' ,component: require('./components/Statistique.vue').default}
    

]
const router = new VueRouter({
   mode:'history',
    routes
})
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
//Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('Acceuil', require('./components/Home.vue').default);
Vue.component('ListeTickets', require('./components/ListeTickets.vue').default);
Vue.component('ListeTaches', require('./components/ListeTaches.vue').default);
Vue.component('AddTache', require('./components/AddTache.vue').default);
Vue.component('Profile', require('./components/Profile.vue').default);
Vue.component('Detail', require('./components/Details.vue').default);
Vue.component('Statistique', require('./components/Statistique.vue').default);
Vue.component('Mesprojets', require('./components/Mesprojets.vue').default);
Vue.component('MesTickets', require('./components/MesTicket.vue').default);
Vue.component('MesTaches', require('./components/MesTaches.vue').default);
Vue.component('Index', require('./components/Index.vue').default);
Vue.component('MesSousTaches', require('./components/MesSousTaches.vue').default);
Vue.component('MesEquipes', require('./components/MesEquipes.vue').default);
Vue.component('DetailCollaborateur', require('./components/DetailCollaborateur.vue').default);
Vue.component('DetailTache', require('./components/DetailTache.vue').default);
Vue.component('DetailTicket', require('./components/DetailTicket.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    router
    // router,
    // data: {
    //     search: ''
    // },
    // methods: {
    //     searchit: _.debounce(() => {
    //         Fire.$emit('searching');
    //     }, 1000),

    //     printme() {
    //         window.print();
    //     }
    // }
})
