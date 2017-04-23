import Vue from 'vue'
import Lightbox from './components/lightbox/Lightbox.vue'

Vue.config.devtools = true
new Vue({
  el: '#app',
  components: {
    Lightbox
  }
})
