<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <Child xxx='XXX' :yyy="'yyy'" zzz="ZZZ"  @click="test2" @heihei="test1"></Child>

    <MyButton type="danger" icon="el-icon-delete" title="修改" @heihei="test1" @click="test2"></MyButton>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from '@/pages/Communication/AttrsListenersTest/Child'
import MyButton from '@/pages/Communication/AttrsListenersTest/MyButton'
  export default {
    name: 'AttrsListenersTest',
    components:{
      Child,
      MyButton
    },
    data(){
      return{

      }
    },
    methods: {
      test1(){
        console.log("test1");
      },
      test2(){
        console.log("test2");
      }
    },
  }
</script>
