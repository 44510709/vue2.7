<template>
  <div class="home">
    <h1>{{name}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="setToken"> 设置token</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, ref,onBeforeMount } from "vue";
import store from '@/store/index';
import {test} from '../api'
export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld
  },
  setup() {
    let name = ref('HomeView')
    //设置token
    function setToken(){
      store.dispatch('set_token',12312)
    }
    //请求
    onBeforeMount(async ()=>{
      let res = await test();
      console.log(res)
    })

    return { name,setToken };
  },
});
</script>
