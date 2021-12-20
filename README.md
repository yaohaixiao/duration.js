# duration.js
获取两个时间点的时间见差，包含秒、分钟、小时、天数、星期、月份、年

## 语法

···js
duration = (start[, end])
···

- start - 起始时间
- end - （可选），结束时间

## 使用方法


### 比较起始时间于当前时间的时间差

```js
let diff = duration('2021-09-11')

// =》
// {
//   ago: (unit = 'all', extra = 'ago') => {…},
//   days: 100,
//   hours: 2402,
//   milliseconds: 8648485130,
//   minutes: 144141,
//   months: 3,
//   seconds: 8648485130000,
//   weeks: 14,
//   years: 0
// }
```

### 比较两个具体时间的时间差

```js
let diff = duration('2021-09-11', '2021-09-13')

// =》
// {
//   ago: (unit = 'all', extra = 'ago') => {…}
//   days: 2
//   hours: 48
//   milliseconds: 172800000
//   minutes: 2880
//   months: 0
//   seconds: 172800000000
//   weeks: 0
//   years: 0
// }
```

### 用文本显示两个时间的时间差

```js
let diff = duration('2021-09-11', '2021-09-13')

// 指定具体的时间单位
diff.ago('day') // => '2 days ago'
diff.ago('hours') // => '48 hours ago'
diff.ago('minutes') // => '2880 minutes ago'
diff.ago('seconds') // => '172800000000 seconds ago'

// 显示完整的时间
let diff = duration('2021-09-11')
diff.ago() // => '3 months, 14 weeks, 100 days, 2 hours, 31 minutes, 20 seconds, 326 milliseconds ago'
```
