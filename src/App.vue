<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>
    
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reqCategoryList } from "@/api";
export default {
  name: "",
  components: {
    Header,
    Footer
  },
  // mounted() {
  //   reqCategoryList()
  // },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList"); //放到App里面
    }
  }
};
</script>
    
<style  lang="less" scoped>
</style>