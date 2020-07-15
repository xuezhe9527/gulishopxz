<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <like></like>
    <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand>
    </Brand>
  </div>
</template>
    
<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      this.getFloorList()
    },
    methods:{
      getFloorList(){
        this.$store.dispatch('getFloorList')
      }
    },
    computed:{
      ...mapGetters(['floorList'])
    }

  }
</script>
    
<style lang="less" scoped>
    
</style>