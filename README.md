# 安装
` npm install vue-slide-list -D`
# 使用
## 引入
```
import Vue from "vue";
import { slideItem,slideList } from "vue-slide-list"
Vue.use(slideItem)
Vue.use(slideList)
```
## 使用
```
    <slide-list
      :slideView="slideView"
      :slideWidth="slideWidth"
    >
      <slide-item>//可循环
      内容
      </slide-item>
      <template #prev></template>//左边箭头
      <template #next></template>//右边箭头
    </slide-list>
```
属性名 | 值 | 可选
--- | :---: | :---:
slideView | 默认1  | -
slideWidth | 默认200 | -

具名插槽
插槽名 | 说明 | 可选
--- | :---: | :---:
prev | 左边自定义箭头  | -
next | 右边自定义箭头 | -
