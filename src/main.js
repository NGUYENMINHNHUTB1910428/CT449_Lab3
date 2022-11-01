import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from "./router";
import { faMagnifyingGlass, faRotateRight, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faAddressBook, } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faMagnifyingGlass, faRotateRight, faPlus, faTrash, faAddressBook)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount("#app");
