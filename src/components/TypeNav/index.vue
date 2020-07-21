<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOut()" @mouseenter="isShow=true">
        <h2 class="all">全部商品分类</h2>
        <!-- <transition name="show"> -->
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                @mouseenter="moveIn(index)"
                :class="{item_on:currentIndex === index}"
              >
                <h3>
                  <!-- <a href>图书、音像、数字商品</a> -->
                  <a
                    href="javascript:;"
                    :data-category1Id="c1.categoryId"
                    :data-categoryName="c1.categoryName"
                  >{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <a href>电子书</a> -->
                        <a
                          href="javascript:;"
                          :data-category2Id="c2.categoryId"
                          :data-categoryName="c2.categoryName"
                        >{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                          <a
                            href="javascript:;"
                            :data-category3Id="c3.categoryId"
                            :data-categoryName="c3.categoryName"
                          >{{c3.categoryName}}</a>
                        </em>
                        <!-- <em>
                          <a href>文学</a>
                        </em>
                        <em>
                          <a href>经管</a>
                        </em>
                        <em>
                          <a href>畅读VIP</a>
                        </em>-->
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!-- </transition> -->
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
    
<script>
import { mapState } from "vuex";
import _ from "lodash"; //全部引入则浪费
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true
    };
  },
  mounted() {
    // this.getCategoryList();  //放到App里面,避免因为组件销毁和创建时重新mounted
    //挂在好就要判断下当前路由是否时home是的话显示sort 否则隐藏
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },
  methods: {
    // getCategoryList() {
    //   this.$store.dispatch("getCategoryList"); //放到App里面
    // },

    // moveIn(index) {
    //   this.currentIndex = index
    // },
    // moveIn: function(index){
    //   this.currentIndex = index
    // },
    // moveIn:_.throttle(function(index){
    moveIn: throttle(
      function(index) {
        this.currentIndex = index;
      },
      50,
      { trailing: false } //设置最后一次是否延迟触发
    ),

    moveOut() {
      this.currentIndex = -1;
      //在search页面,鼠标移除时要隐藏sort
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
    toSearch(event) {
      let data = event.target.dataset;
      let { categoryname, category1id, category2id, category3id } = data;
      // console.log(categoryname,category1id,category2id,category3id);
      //判断categoryname是否有值
      // 有值的话说明是a，则创建location和query
      // 再往query里面添加四个值 ,把query放到location里面
      // 最后再发送lllll
      if (categoryname) {
        let location = {
          name: "search"
        };
        let query = {};
        query.categoryName = categoryname;

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }

        location.query = query;

        let { params } = this.$route;
        if (params) {
          location.params = params;
        }
        //不应该直接push，要先判断下是否是从home到search，是，则push  否则replace
        // this.$router.push(location);
        if(this.$route.path !== '/home'){
          this.$router.replace(location);
        }else{
          this.$router.push(location);
        }
      }
    }
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  }
};
</script>
    
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      //动画样式
      &.show-enter {
        height: 0;
        opacity: 0;
      }
      &.show-enter-to {
        height: 500;
        opacity: 1;
        background: pink;
      }
      &.show-enter-active {
        transition: all 3s;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  // width: 415px;
                  width: 650px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   background-color: #aaa;
          //     .item-list {
          //         display: block;
          //     }
          // }
          &.item_on {
            background-color: #aaa;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>