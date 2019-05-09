<template>
  <div id="detail">
    <!-- 顶部操作栏：返回-购物车-分享 -->
    <div class="header">
      <div class="header-left">
        <span class="back-icon" @touchend="goBack">&lt;</span>
      </div>
      <div class="header-right">
        <span class="cart-icon">购</span>
        <span class="share-icon">享</span>
      </div>
    </div>
    <!-- 产品详情 -->
    <div class="product-details">
      <div class="pics">
        <img src="http://www.meiyueshow.com/images/home/banner.png" alt="product-pic">
      </div>
      <div class="price">
        <p class="price-now">￥128.00</p>
        <p class="price-ever">
          <small>
            原价：
            <del>￥168.00</del>
          </small>
        </p>
      </div>
      <div class="product-name">优云焕齿速白牙擦</div>
      <div class="product-function">
        <p>优云焕齿速白牙擦优云焕齿速白牙擦优云焕齿速白牙擦优云焕齿速白牙擦优云焕齿速白牙擦</p>
      </div>
      <div class="store">
        <img src alt="store-pic">
        <div>
          <p class="store-name">优云美施专卖店</p>
          <p class="onshelf">在售商品2件</p>
        </div>
        <div class="store-link">进店逛逛&nbsp;&gt;</div>
      </div>
      <div class="pics-context">
        <p>图文详情</p>
        <img src alt="图文详情">
      </div>
      <div class="related">
        <p>相关</p>
        <div class="related-products">
          <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 购买等操作 -->
    <div class="footer">
      <div class="collect">收藏</div>
      <div class="server">客服</div>
      <div class="cart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  components: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.header {
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  /* margin-top: 20px; */
  padding-top: 28px;
  /* display: flex; */
  background-color: #fff;
}
.header .header-left {
  float: left;
}
.header .header-right {
  float: right;
  margin-right: 10px;
}
.header .header-left .back-icon,
.header .header-right .cart-icon,
.header .header-right .share-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-left: 10px;
  background-color: #bbb;
  border-radius: 50%;
}

.product-details {
  width: 100%;
  margin-top: 60px;
}
.product-details .pics {
  width: 100%;
}
.product-details .pics img {
  width: 100%;
}
.product-details .price {
  border-bottom: 1px solid #eee;
}
.product-details .price .price-now,
.product-details .price .price-ever {
  margin-left: 16px;
}
.product-details .price .price-now {
  color: #f00;
}
</style>

