<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  height: 49px;
  background-color: whitesmoke;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -1px 2px rgba(111, 111, 111, 0.2);
}

</style>