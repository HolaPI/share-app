<template>
  <div id="newProducts">
    <!-- 页面介绍 -->
    <div class="info">
      <span class="back-icon">&lt;</span>
      <div class="title">新品首发</div>
    </div>
    <!-- 瀑布流产品列 -->
    <div class="main">
      <carousel :per-page="1" :autoplay="true" :loop="true">
        <slide>
          <div class="jumbo-pic">
            1
            <img src="http://www.meiyueshow.com/images/home/banner.png" alt="新品首发">
          </div>
        </slide>
        <slide>
          <div class="jumbo-pic">
            2
            <img src="http://www.meiyueshow.com/images/home/banner.png" alt="新品首发">
          </div>
        </slide>
        <slide>
          <div class="jumbo-pic">
            3
            <img src="http://www.meiyueshow.com/images/home/banner.png" alt="新品首发">
          </div>
        </slide>
      </carousel>

      <div class="products">
        <ul>
          <!-- 循环罗列产品，触摸进入产品详情 -->
          <li @touchend="showDetails">
            <div class="product-pic">
              <img src="http://www.meiyueshow.com/images/home/banner.png" alt="产品图">
            </div>
            <p class="brief-info">优云焕齿速白牙擦</p>
            <div class="price">
              <span class="price-now">￥128</span>
              <del class="price-ever">
                <small>￥168</small>
              </del>
            </div>
          </li>
          <li>
            <div class="product-pic">
              <img src="http://www.meiyueshow.com/images/home/banner.png" alt="产品图">
            </div>
            <p class="brief-info">优云焕齿速白牙擦</p>
            <div class="price">
              <span class="price-now">￥128</span>
              <del class="price-ever">
                <small>￥168</small>
              </del>
            </div>
          </li>
          <li>
            <div class="product-pic">
              <img src="http://www.meiyueshow.com/images/home/banner.png" alt="产品图">
            </div>
            <p class="brief-info">优云焕齿速白牙擦</p>
            <div class="price">
              <span class="price-now">￥128</span>
              <del class="price-ever">
                <small>￥168</small>
              </del>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newProducts",
  components: {},
  methods: {
    showDetails() {
      this.$router.push({ path: "/product-detail" });
    }
  }
};
</script>

<style scope>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.info {
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  /* margin-top: 20px; */
  padding-top: 28px;
  display: flex;
  background-color: #fff;
}
.info .back-icon {
  display: inline-block;
  margin-left: 10px;
}
.info .title {
  display: inline-block;
  flex: 1;
  text-align: center;
}
.main {
  width: 100%;
  margin-top: 60px;
}
.main .jumbo-pic img {
  width: 100%;
}
.main .products {
  width: 100%;
}
.main .products ul li {
  float: left;
  width: 160px;
  height: 340px;
  margin: 5px 10px;
  border-radius: 5px;
  /* background-color: #fff; */
  overflow: hidden;
}
.main .products .product-pic img {
  width: 100%;
  height: 260px;
}
.main .products .brief-info {
  margin-top: 8px;
}
.main .products .price {
  margin-top: 4px;
}
.main .products .price .price-now {
  color: #f00;
  padding-right: 4px;
}
</style>
