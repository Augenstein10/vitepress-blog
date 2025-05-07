<!-- <template>
  <div class="eliminate-async-effect">
    <h1 class="title">Eliminate Async Effect</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { getNews } from "@/utils/getCommonInfo";
function getData(){
    return getNews()
}
function m1(){
    const user = getData();
    //other works
    return user;
}
function m2(){
    const user = m1();
    //other works
    return user;
}
function m3(){
    const user = m2();
    //other works
    return user;
}
function main(){
    console.log('main')
    const user = m3()
    console.log(user)
}

function run(func){
    //1.保存旧的fetch
    const oldFetch = window.fetch
    //2.重写fetch
    const cache = {
        status:'pending',//pending,fulfilled,rejected
        value:null
    }
    function newFetch(...args){
        //有缓存
        if(cache.status === 'fulfilled'){
            return cache.value;
        }
        else if(cache.status === 'rejected'){
            throw cache.value
        }
        
        //无缓存
        //1.请求
        const p = oldFetch(...args).then((res)=> res.json()).then((data)=>{
            cache.status = 'fulfilled'
            cache.value = data
            return data
        }).catch((err)=>{
            cache.status = 'rejected'
            cache.value = err
            throw err
        })
        //2.抛出错误，中断执行
        throw p;
    }
    window.fetch = newFetch
    //3.执行函数
    try{
        func()
    }catch(err){
        if(err instanceof Promise){
            window.fetch = newFetch
            func();
            window.fetch = oldFetch
        }
    }
    //4.恢复fetch
    window.fetch = oldFetch
}
onMounted(() => {
    run(main)
})
</script>
<style scoped>
</style> -->

<script setup>
// 在模板中启用 v-highlight
const vHighlight = {
  mounted: (el) => {
    el.classList.add('is-highlight')
  }
}
</script>

<template>
  <p v-highlight>This sentence is important!99</p>
</template>