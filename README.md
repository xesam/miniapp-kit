# 微信小程序 Compat

处理 iphone 手机底部小黑条的边距问题。

## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)


index.json

```json
{
  "usingComponents": {
    "safe-area": "miniapp-compat/safe-area/index",
    "safe-bottom": "miniapp-compat/safe-bottom/index"
  }
}
```

index.wxml

```html
<view class="container">
    <safe-area ui-class="safe-1">
        <view class="content-1">safe 1</view>
    </safe-area>
    <safe-bottom ui-class="safe-2">
        <view class="content-2">safe 2</view>
    </safe-bottom>
</view>
```

显示效果

![1.png](./assets/1.png)