# mini-pro
小程序练习示例


# 登录授权管理
### 实现过程分析
1.添加了**首页**和**我的**两个`tabbar`,点击我的，弹出授权验证，如果通过，则在我的页面获取用户名和头像

2.如果授权验证，选择了拒绝，那么我的页面将展示，默认的头像框和和用户名***！

3.此时再次点击我的，小程序中的`tabbar`是不会再次触发`onLoad()`事件的 那么如何重新弹出授权认证框呢？

4.重新点击其他的`tabbar`，再次回到我的，正常业务是应该弹出授权验证的，如何实现？

5.小程序中，`tabbar`切换，是会触发`onHide`事件，所以在首页的`onHide`事件中执行逻辑就可以了?

6.针对5补充，使用5会出现`bug`，如果`tabbar`大于2个的时候，在`tabbar`之间切换是会出问题的，正确的解决方案是在**我的**页面js中，因为`onShow`是每次页面展示都是会触发的，所有在这里执行逻辑，获取当前打开的 的所有页，再找到最后的那个页面即是当前显示的页面，在这里调用`onShow()`方法来触发`onLoad`事件

```javascript
wx.switchTab({
    url: './logs',
    success:function(e){
    var page = getCurrentPages().pop()
    if(page == undefined || page == null) return;
    page.onLoad();
    }
})
```

# 首页功能实现
- 修改`app.json`配置，是为当前小程序的全局配置  
- 为首页启用下拉刷新

## 轮播实现

```html
<!--.wxml-->
<swiper class='swiper'
indicator-dots="{{indicatorDots}}"
autoplay="{{autoplay}}"
interval="{{interval}}"
duration="{{duration}}"
circular="{{circular}}"
<block wx:for="{{imgUrls}}" wx:key="*this">
<swiper-item class="swiper-item">
<image src="{{item}}" class="slide-image" mode='aspectFill' />
</swiper-item>
</block>
<swiper>

```

```css
<！--.wxss-->
.swiper,
.swiper-item,
.swiper-item image {
width: 100%;
height: 390rpx;
}
```

```javascript
data:{
// 本地数据
imgUrls: [
'../../images/swiper1.jpg',
'../../images/swiper2.jpg',
'../../images/s.jpeg',
],
indicatorDots: true,
autoplay: true,
interval: 3000,
duration: 1000,
// 采用衔接滑动
circular:true
}
```

- 导航flex布局完成

### 点击跳转页面

```html
<!--使用navigator标签 配上url地址 传递当前点击的分类名称-->
<navigator class='nav-item-single'
wx:for="{{navList}}" 
wx:key="{{item.id}}"
url="/pages/shoplist/shoplist?cateName={{item.name}}&cateId={{item.id}}"
>
</navigator>
```

```javascript
//页面传递参数之后，进入的页面通过onLoad事件可以接受参数。
console.log(options) 

//动态设置页面标题
wx.setNavigationBarTitle({
title: options.cateName
})
```

## 配置域名及服务器

- 登录微信公众号官网；

- 开发-开发设置-服务器域名 添加即可，可以添加多个。