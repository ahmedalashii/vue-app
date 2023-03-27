// main.js file is the main entry point of the application and it is the first file that is executed when the application is loaded.
// It is used to import the Vue library and the App component and mount the App component to the DOM.

import { createApp } from 'vue'
import App from './App.vue'

// ; is not required in JavaScript but it is a good practice to use it.
createApp(App).mount('#app')
// #app is the id of the div element in the public/index.html file.
