<template>
<div>
  <div class="tittle">
      {{message}}
  </div>
  <hr/>
  <cpn></cpn>
</div>
</template>

<script>
import cpn from "./cnp.vue";

export default {
  components: {
      cpn
  },
  data() {
    return {
      message: "hello Vue module!!"
    };
  }
};
</script>
   
<style>
.tittle {
  color: rgb(26, 33, 133);
}
</style>