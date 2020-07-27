<template>
  <div>
    我是孩子
  </div>
</template>
    
<script>
  export default {
    name: 'Child',
    props:['yyy'],
    mounted(){
      console.log(this.$attrs,this.$listeners);
    }
  }
</script>
    
<style lang="less" scoped>
    
</style>