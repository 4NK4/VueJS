<template>
  <div>
      <span class="sp_title">{{message}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:"我是子组件"
        }
    }
}
</script>

<style>
.sp_title{
    color:blue;
}
</style>