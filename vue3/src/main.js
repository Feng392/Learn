import store from './store'
import "echarts";
import { createApp } from 'vue';
import ECharts from "vue-echarts";
import App from './App.vue';

const app = createApp(App);
    app.use(store)
    app.component("ECharts", ECharts)
    app.mount('#app');

