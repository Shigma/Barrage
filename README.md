# Barrage

一个 JavaScript 的弹幕生成软件。

## 本地构建

1. clone 我们的项目
2. `npm i`更新依赖
3. `npm start`运行

## API: Barrage

### new Barrage({reference, mounted, methods, events, listener})

构造一个新的弹幕对象。

- reference: 弹幕对象中涉及的参考点对象。
- mounted: 弹幕被挂载时触发的回调函数。
- methods: 自定义方法列表，会自动注入该对象。
- events: 弹幕遭遇事件的回调函数列表。
- listener: 为弹幕提供的监听器。

### barrage.setInterval(interval, [times, [period, [start,]]] callback)

为弹幕设定一个计时回调。

- interval: 每次执行回调的时间间隔。
- times: 每个周期中执行回调的次数，默认为 Infinity。
- period：回调唤醒的一个周期，默认为 Infinity。
- start：每个周期中回调触发的开始时间，默认为 0。
- callback：回调函数，参数是 time，即弹幕第一个更新周期到现在的时间。

### barrage.emitBullets([[start,] end, [step,]] callback)

在当前弹幕中发射子弹。当仅有 3 个参数时，默认为 start, end 和 callback。

- start: 起始 index。
- end: 终止 index。
- step: 步长。
- callback: 回调函数，参数是 index，返回一个子弹对象。
- callback 也可以直接是子弹对象本身。

### 更新周期

1. timestamp
2. nexttick
3. before
4. interval
5. mutate
6. listen
7. diaplay
8. timeline