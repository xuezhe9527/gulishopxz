<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">按钮1</button>
    <Event1 @click.native="test2"></Event1>


    <br>
    <br>

    <button @haha="test3">按钮2</button>
    <Event2 @xxx="test5" @click="test4"></Event2>


  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
     test1(event){
       console.log(event.target.innerText);
     },
     test2(event){
       console.log(event.target.innerText);
     },
     test3(){
       console.log(111);
     },
     test5(event){
       console.log(event);
     },
     test4(event){
       console.log(event);
     }
    }
  }
</script>
