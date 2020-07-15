<template>
  <div class="swiper-container" id="mySwiper" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in bannerList" :key="banner.id">
        <img :src="banner.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
    
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: "",
  props: ["bannerList"],
  watch: {
    bannerList: {
      handler() {
        // swiper:常用的轮播插件
        //vm$nextTick和Vue的nextTick方法功能是一样的，在最近的一次dom刷新之后执行一个回调

        this.$nextTick(() => {
          new Swiper(this.$refs.banner, {
            // direction: "vertical", // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination"
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar"
            }
          });
        });
      },
      immediate: true //让当前回调立即执行一次
    }
  }
};
</script>
    
<style lang="less" scoped>
</style>