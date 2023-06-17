<template>
  <div class="slide-list flex" :style="paddingStyle">
    <div
      class="prev btn"
      @click="fnPrev"
      :class="this.scrollResultWidth >= 0 ? 'btnoptaicy' : ''"
    >
      <slot name="prev">
        <svg
          t="1654351550732"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1248"
          width="16"
          height="16"
        >
          <path
            d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"
            p-id="1249"
          ></path>
        </svg>
      </slot>
    </div>
    <div :style="listStyle" class="slide-list hidden">
      <!-- 用作移动 -->
      <div class="slide-list-hidden" :style="listHiddenStyle">
        <slot />
      </div>
    </div>
    <div class="next btn" @click="fnNext" :class="isNext ? 'btnoptaicy' : ''">
      <slot name="next">
        <svg
          t="1654351569582"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1391"
          width="16"
          height="16"
        >
          <path
            d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"
            p-id="1392"
          ></path>
        </svg>
      </slot>
    </div>
    <!-- <slot name="prev" />
    <slot name="next" /> -->
  </div>
</template>

<script>
export default {
  name: "slideList",
  props: {
    slideView: {
      type: Number,
      default: 1,
    },
    slideWidth: {
      type: Number,
      default: 200,
    },
    slidePaddingLR: {
      type: Number,
      default: 0, //优先级比width高
    },
  },
  data() {
    return {
      item: [],
      scrollResultWidth: 0,
      // listHiddenStyle:{}
    };
  },
  computed: {
    listStyle() {
      return {
        width: this.slideView * this.slideWidth + "px",
      };
    },
    paddingStyle() {
      return {
        width: this.slideView * this.slideWidth + 40 + "px",
        paddingLeft: 20 + "px",
        paddingRight: 20 + "px",
      };
    },
    listHiddenStyle() {
      let listWidth;
      console.log(this.item);
      // if (typeof this.slideWidth === "number" && this.slideWidth !== 0) {
      listWidth = this.slideWidth * this.item.length + "px";
      // }
      return {
        width: this.slideWidth * this.item.length + "px",
        transform: "translateX(" + this.scrollResultWidth + "px)",
      };
    },
    singleWidth() {
      return this.slideWidth;
    },
    isNext() {
      return (
        this.item.length * this.slideWidth <
        this.slideView * this.slideWidth +
          Math.abs(this.scrollResultWidth) +
          this.singleWidth
      );
    },
  },
  mounted() {
    this.updateItems();
    this.initgoRightArrow();
  },
  methods: {
    updateItems() {
      //   拿到所有的子组件
      this.item = this.$children.filter(
        (el) => el.$options.name === "slideItem"
      );
      console.log(this.item);
    },
    initgoRightArrow() {
      // const style ={};
      // console.log(this.slideWidth,this.item.length);
      // style.width = this.slideWidth * this.item.length + "px"
      // style.transform ="translateX(" + this.scrollResultWidth + "px)"
      // this.listHiddenStyle = style
    },
    //点击上一个
    fnPrev() {
      if (this.scrollResultWidth >= 0) return;
      this.fnScrollWidth("reduce", this.singleWidth);
    },
    //点击下一个
    fnNext() {
      if (this.isNext) return;
      this.fnScrollWidth("add", this.singleWidth);
    },
    //translate的宽度
    fnScrollWidth(type, width) {
      console.log(">>>>");
      let result = 0;
      if (type === "reduce") {
        result = width;
      } else if (type === "add") {
        result = -width;
      } else {
        result = 0;
      }
      this.scrollResultWidth += result;
    },
  },
};
</script>

<style scoped>
.slide-list {
  position: relative;
  box-sizing: border-box;
}
.hidden {
  overflow: hidden;
}
.flex {
  display: flex;
}
.btn {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.prev {
  left: 0;
  background-repeat: no-repeat;
}
.next {
  right: 0;
}
.btnoptaicy {
  cursor: default;
  opacity: 0.5;
}
.slide-list-hidden {
  position: relative;
  display: flex;
  transition: all 0.3s;
}
.slide-item {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
</style>