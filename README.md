## 基于easy-cli
>  一个react + react-router  + es6 + less的脚手架

##  easy-react-virtual-list
**一个精简的虚拟化列表组件，支持动态高度。**

>注意: 由于在 iOS UIWebviews 中，`scroll` 事件是在滚动停止之后触发的，所以不兼容iOS UIWebviews。[了解更多](https://developer.mozilla.org/en-US/docs/Web/Events/scroll#Browser_compatibility)

## 扫码体验
![](./1.png)
### [100行代码实现React虚拟卷帘virtual-list](https://libin1991.github.io/2019/04/04/100%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0React%E8%99%9A%E6%8B%9F%E5%8D%B7%E5%B8%98virtual-list/)
<br/>

### **在线体验 [https://libin1991.github.io/easy-react-virtual-list/dist/](https://libin1991.github.io/easy-react-virtual-list/dist/)**

## 基本使用
```js
import React, { Component } from 'react'
import VirtualizedList from 'easy-react-virtual-list'

export default class Hello extends Component {
  constructor (props) {
    super(props)
    this.data = [{
      id: 1,
      val: Math.random()
    }, {
      id: 2,
      val: Math.random()
    }, {
      id: 3,
      val: Math.random()
    }, ...]

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem ({index}) {
    const item = this.data[index]
    return (
      <div>#{index}, {item.val}</div>
    )
  }

  render () {
    return (
      <VirtualizedList
        itemCount={this.data.length}
        estimatedItemHeight={20}
        renderItem={this.renderItem}
      />
    )
  }
}
```



## Prop Types
|Property|Type|Default|Required?|Description|
|:--:|:--:|:--:|:--:|:--:|
|itemCount|Number||✓|需要渲染的数据个数|
|renderItem|Function||✓|渲染列表项元素的函数: `({index: number}): React.PropTypes.node`|
|overscanCount|Number|5||在可见区域之外的上/下方渲染的 Buffer 值，调整这个值可以避免部分设备上的滚动那个闪烁|
|estimatedItemHeight|Number|175||列表项的预估高度|
|className|String|''||设置包裹元素的 className|
|onScroll|Function|() => {}||滚动容器的 scrollTop 发生改变时触发: `({scrollTop: number}):void`|
|loadMoreItems|Function|() => {}||用于无限滚动。当需要加载更多数据时触发|
|loadingComponent|React.PropTypes.node|null||用于无限滚动。当在加载下一页数据时显示的 Loading 组件|
|endComponent|React.PropTypes.node|null||用于无限滚动。当没有更多可加载的数据时显示的组件|
|hasMore|Boolean|false||用于无限滚动。表示是否有更多数据需要加载|
|height|Number|undefined||包裹元素的高度. 如果属性 `useWindow` 是 `false` 并且未设置 `scrollableTarget`, 包裹元素会成为滚动容器|
|useWindow|Boolean|true||是否使 Window 成为滚动容器，此时会监听 `window` 上的 `scroll` 事件。在移动端建议使用|
|scrollableTarget|String|undefined||设置滚动容器元素, 其值会用于 `document.getElementById`。Window 是默认的滚动容器。如果要自定义滚动容器，需要将属性 `useWindow` 置为 `false`，并且不要设置 `height` 属性 |

 
