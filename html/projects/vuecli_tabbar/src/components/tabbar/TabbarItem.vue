<template>
  <div class="tab-bar-item" @click="btnClick">
    <slot name="item-img"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  props:{
    path:String
  },
  methods:{
    btnClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  margin-top: 2px;
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>