<template>
  <div id="app">
    <Tabbar>

      <TabbarItem path='/home'>
        <img slot="item-img" src="./assets/img/tabbar/home.svg" />
        <div slot="item-text">首页</div>
      </TabbarItem>
      
      <TabbarItem path='/category'>
        <img slot="item-img" src="./assets/img/tabbar/category.svg" />
        <div slot="item-text">分类</div>
      </TabbarItem>

      <TabbarItem path='/shopcart'>
        <img slot="item-img" src="./assets/img/tabbar/shopcart.svg" />
        <div slot="item-text">购物车</div>
      </TabbarItem>

      <TabbarItem path='/profile'>
        <img slot="item-img" src="./assets/img/tabbar/profile.svg" />
        <div slot="item-text">我的</div>
      </TabbarItem>

    </Tabbar>
    <router-view></router-view>

  </div>
</template>

<script>
import Tabbar from "./components/tabbar/Tabbar";
import TabbarItem from "./components/tabbar/TabbarItem";

export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>