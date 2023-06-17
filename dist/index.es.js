var t={name:"slideList",props:{slideView:{type:Number,default:1},slideWidth:{type:Number,default:200},slidePaddingLR:{type:Number,default:0}},data:function(){return{item:[],scrollResultWidth:0}},computed:{listStyle:function(){return{width:this.slideView*this.slideWidth+"px"}},paddingStyle:function(){return{width:this.slideView*this.slideWidth+40+"px",paddingLeft:"20px",paddingRight:"20px"}},listHiddenStyle:function(){return console.log(this.item),this.slideWidth,this.item.length,{width:this.slideWidth*this.item.length+"px",transform:"translateX("+this.scrollResultWidth+"px)"}},singleWidth:function(){return this.slideWidth},isNext:function(){return this.item.length*this.slideWidth<this.slideView*this.slideWidth+Math.abs(this.scrollResultWidth)+this.singleWidth}},mounted:function(){this.updateItems(),this.initgoRightArrow()},methods:{updateItems:function(){this.item=this.$children.filter((function(t){return"slideItem"===t.$options.name})),console.log(this.item)},initgoRightArrow:function(){},fnPrev:function(){this.scrollResultWidth>=0||this.fnScrollWidth("reduce",this.singleWidth)},fnNext:function(){this.isNext||this.fnScrollWidth("add",this.singleWidth)},fnScrollWidth:function(t,n){console.log(">>>>");var e=0;e="reduce"===t?n:"add"===t?-n:0,this.scrollResultWidth+=e}}};function n(t,n,e,i,s,l,d,o,a,r){"boolean"!=typeof d&&(a=o,o=d,d=!1);const A="function"==typeof e?e.options:e;let h;if(t&&t.render&&(A.render=t.render,A.staticRenderFns=t.staticRenderFns,A._compiled=!0,s&&(A.functional=!0)),i&&(A._scopeId=i),l?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(l)},A._ssrRegister=h):n&&(h=d?function(t){n.call(this,r(t,this.$root.$options.shadowRoot))}:function(t){n.call(this,o(t))}),h)if(A.functional){const t=A.render;A.render=function(n,e){return h.call(e),t(n,e)}}else{const t=A.beforeCreate;A.beforeCreate=t?[].concat(t,h):[h]}return e}const e="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(t){return(t,n)=>function(t,n){const i=e?n.media||"default":t,d=l[i]||(l[i]={ids:new Set,styles:[]});if(!d.ids.has(t)){d.ids.add(t);let e=n.source;if(n.map&&(e+="\n/*# sourceURL="+n.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",n.media&&d.element.setAttribute("media",n.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(e),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{const t=d.ids.size-1,n=document.createTextNode(e),i=d.element.childNodes;i[t]&&d.element.removeChild(i[t]),i.length?d.element.insertBefore(n,i[t]):d.element.appendChild(n)}}}(t,n)}let s;const l={};const d=t;var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"slide-list flex",style:t.paddingStyle},[e("div",{staticClass:"prev btn",class:this.scrollResultWidth>=0?"btnoptaicy":"",on:{click:t.fnPrev}},[t._t("prev",(function(){return[e("svg",{staticClass:"icon",attrs:{t:"1654351550732",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1248",width:"16",height:"16"}},[e("path",{attrs:{d:"M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z","p-id":"1249"}})])]}))],2),t._v(" "),e("div",{staticClass:"slide-list hidden",style:t.listStyle},[e("div",{staticClass:"slide-list-hidden",style:t.listHiddenStyle},[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"next btn",class:t.isNext?"btnoptaicy":"",on:{click:t.fnNext}},[t._t("next",(function(){return[e("svg",{staticClass:"icon",attrs:{t:"1654351569582",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1391",width:"16",height:"16"}},[e("path",{attrs:{d:"M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z","p-id":"1392"}})])]}))],2)])};o._withStripped=!0;const a=n({render:o,staticRenderFns:[]},(function(t){t&&t("data-v-23a568de_0",{source:"\n.slide-list[data-v-23a568de] {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.hidden[data-v-23a568de] {\n  overflow: hidden;\n}\n.flex[data-v-23a568de] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.btn[data-v-23a568de] {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  cursor: pointer;\n}\n.prev[data-v-23a568de] {\n  left: 0;\n  background-repeat: no-repeat;\n}\n.next[data-v-23a568de] {\n  right: 0;\n}\n.btnoptaicy[data-v-23a568de] {\n  cursor: default;\n  opacity: 0.5;\n}\n.slide-list-hidden[data-v-23a568de] {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.slide-item[data-v-23a568de] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n}\n",map:{version:3,sources:["E:\\学习资料\\轮子\\vue-slide-list\\src\\package\\slideList.vue"],names:[],mappings:";AAkKA;EACA,kBAAA;EACA,8BAAA;UAAA,sBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;AACA;AACA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,mCAAA;UAAA,2BAAA;EACA,eAAA;AACA;AACA;EACA,OAAA;EACA,4BAAA;AACA;AACA;EACA,QAAA;AACA;AACA;EACA,eAAA;EACA,YAAA;AACA;AACA;EACA,kBAAA;EACA,oBAAA;EAAA,qBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,oBAAA;AACA;AACA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;AACA",file:"slideList.vue",sourcesContent:['<template>\n  <div class="slide-list flex" :style="paddingStyle">\n    <div\n      class="prev btn"\n      @click="fnPrev"\n      :class="this.scrollResultWidth >= 0 ? \'btnoptaicy\' : \'\'"\n    >\n      <slot name="prev">\n        <svg\n          t="1654351550732"\n          class="icon"\n          viewBox="0 0 1024 1024"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n          p-id="1248"\n          width="16"\n          height="16"\n        >\n          <path\n            d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"\n            p-id="1249"\n          ></path>\n        </svg>\n      </slot>\n    </div>\n    <div :style="listStyle" class="slide-list hidden">\n      \x3c!-- 用作移动 --\x3e\n      <div class="slide-list-hidden" :style="listHiddenStyle">\n        <slot />\n      </div>\n    </div>\n    <div class="next btn" @click="fnNext" :class="isNext ? \'btnoptaicy\' : \'\'">\n      <slot name="next">\n        <svg\n          t="1654351569582"\n          class="icon"\n          viewBox="0 0 1024 1024"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n          p-id="1391"\n          width="16"\n          height="16"\n        >\n          <path\n            d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"\n            p-id="1392"\n          ></path>\n        </svg>\n      </slot>\n    </div>\n    \x3c!-- <slot name="prev" />\n    <slot name="next" /> --\x3e\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "slideList",\n  props: {\n    slideView: {\n      type: Number,\n      default: 1,\n    },\n    slideWidth: {\n      type: Number,\n      default: 200,\n    },\n    slidePaddingLR: {\n      type: Number,\n      default: 0, //优先级比width高\n    },\n  },\n  data() {\n    return {\n      item: [],\n      scrollResultWidth: 0,\n      // listHiddenStyle:{}\n    };\n  },\n  computed: {\n    listStyle() {\n      return {\n        width: this.slideView * this.slideWidth + "px",\n      };\n    },\n    paddingStyle() {\n      return {\n        width: this.slideView * this.slideWidth + 40 + "px",\n        paddingLeft: 20 + "px",\n        paddingRight: 20 + "px",\n      };\n    },\n    listHiddenStyle() {\n      let listWidth;\n      console.log(this.item);\n      // if (typeof this.slideWidth === "number" && this.slideWidth !== 0) {\n      listWidth = this.slideWidth * this.item.length + "px";\n      // }\n      return {\n        width: this.slideWidth * this.item.length + "px",\n        transform: "translateX(" + this.scrollResultWidth + "px)",\n      };\n    },\n    singleWidth() {\n      return this.slideWidth;\n    },\n    isNext() {\n      return (\n        this.item.length * this.slideWidth <\n        this.slideView * this.slideWidth +\n          Math.abs(this.scrollResultWidth) +\n          this.singleWidth\n      );\n    },\n  },\n  mounted() {\n    this.updateItems();\n    this.initgoRightArrow();\n  },\n  methods: {\n    updateItems() {\n      //   拿到所有的子组件\n      this.item = this.$children.filter(\n        (el) => el.$options.name === "slideItem"\n      );\n      console.log(this.item);\n    },\n    initgoRightArrow() {\n      // const style ={};\n      // console.log(this.slideWidth,this.item.length);\n      // style.width = this.slideWidth * this.item.length + "px"\n      // style.transform ="translateX(" + this.scrollResultWidth + "px)"\n      // this.listHiddenStyle = style\n    },\n    //点击上一个\n    fnPrev() {\n      if (this.scrollResultWidth >= 0) return;\n      this.fnScrollWidth("reduce", this.singleWidth);\n    },\n    //点击下一个\n    fnNext() {\n      if (this.isNext) return;\n      this.fnScrollWidth("add", this.singleWidth);\n    },\n    //translate的宽度\n    fnScrollWidth(type, width) {\n      console.log(">>>>");\n      let result = 0;\n      if (type === "reduce") {\n        result = width;\n      } else if (type === "add") {\n        result = -width;\n      } else {\n        result = 0;\n      }\n      this.scrollResultWidth += result;\n    },\n  },\n};\n<\/script>\n\n<style scoped>\n.slide-list {\n  position: relative;\n  box-sizing: border-box;\n}\n.hidden {\n  overflow: hidden;\n}\n.flex {\n  display: flex;\n}\n.btn {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.prev {\n  left: 0;\n  background-repeat: no-repeat;\n}\n.next {\n  right: 0;\n}\n.btnoptaicy {\n  cursor: default;\n  opacity: 0.5;\n}\n.slide-list-hidden {\n  position: relative;\n  display: flex;\n  transition: all 0.3s;\n}\n.slide-item {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: center;\n}\n</style>']},media:void 0})}),d,"data-v-23a568de",false,undefined,!1,i,void 0,void 0);function r(t){t.component(a.name,a)}const A={name:"slideItem",computed:{itemStyle:function(){return{width:this.$parent.$options.propsData.slideWidth+"px"}}}};var h=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"slide-item",style:t.itemStyle},[t._t("default")],2)};h._withStripped=!0;const c=n({render:h,staticRenderFns:[]},(function(t){t&&t("data-v-189132ea_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"slideItem.vue"},media:void 0})}),A,undefined,false,undefined,!1,i,void 0,void 0);function p(t){t.component(c.name,c)}function u(t){t.use(p),t.use(r)}export{u as default,p as slideItem,r as slideList};
