<template>
  <div class="slide-item" :style="itemStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: "slideItem",
  computed: {
    itemStyle() {
        let itemWidth = "auto";
      
      const propsData = this.$parent.$options.propsData;
  
         itemWidth = propsData.slideWidth + "px"
   
      return {
        width: itemWidth,
        // paddingLeft:propsData.slidePaddingLR +'px',
        // paddingRight:propsData.slidePaddingLR + 'px'
      };
    },
  },
};
</script>

<style>
</style>