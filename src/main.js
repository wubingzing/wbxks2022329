import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import setRem from "./setRem";
import "./style/index.css"
Vue.use(ElementUI);
Vue.config.productionTip = false;
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

setRem(750, 100);
window.addEventListener("resize", function () {
  setRem(750, 100);
});
console.log(vm);
