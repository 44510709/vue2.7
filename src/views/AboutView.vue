<template>
  <div class="about">
    <h1>{{name}}</h1>
    <h2>当前鼠标坐标X:{{ point.x }} -- Y:{{ point.y }}</h2>
    <h3>{{token}}</h3>
  </div>
</template>

 <script>
import { defineComponent, ref,reactive } from "vue";
import store from '@/store/index';
import usePoint from "../hooks/use_point.js";
export default defineComponent({
  name: "AboutView",
  setup() {
    let name = ref('你好')
    let point = usePoint();
    let token = ref(store.state.token);
    return { name,point,token };
  },
});
</script>