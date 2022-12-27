import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'

import router from './router';

import { faDiscord, faTwitter, faGithub, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css';

var vueApp = createApp(App);
vueApp.use(router);
library.add(faDiscord, faTwitter, faGithub, faYoutube, faTiktok, faEnvelope);
vueApp.component('font-awesome-icon', FontAwesomeIcon)

vueApp.mount('#app')