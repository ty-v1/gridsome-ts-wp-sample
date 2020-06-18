import {VueConstructor} from 'vue';
import DefaultLayout from '@/layouts/Default.vue';

export default function (Vue: VueConstructor) {
    Vue.component('Layout', DefaultLayout);
}
