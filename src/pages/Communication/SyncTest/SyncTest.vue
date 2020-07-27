<template>
  <div>
    小明的爸爸现在有{{money}}元
    
    <h2>不使用sync修改符</h2>
    <!-- 自定义事件版本 -->
      <Child :money="money" @spendMoney="spendMoney"></Child>
      <!-- snyc本质 -->
      <Child :money="money" @update:money="spendMoney"></Child>
    <h2>使用sync修改符</h2>
      <Child2 :money.sync="money"></Child2>
    <h2>使用v-model修改符</h2>
    
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    data(){
      return {
        money:1000
      }
    },
    methods:{
      spendMoney(money){
        this.money = money
      }
    },
    components: {
      Child,
      Child2
    }
  }
</script>
