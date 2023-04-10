//给定时间，计算7天前的时间
// map对象
function getMonthDayCount(year) {
  return {
    1: 31,
    2: year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }
}

function get7dayAgo(date) {
//  '2023.3.29'
//  分割字符串
  let [year, month, day] = date.split('.')
  // 计算出7天前的日期
  day = day - 7;
  //判断是否小于0，如果小于0，就要向前推一个月
  if (day <= 0) {
    month = month - 1;
    // 判断月份是否小于0，如果小于0，就要向前推一年
    if (month <= 0) {
      year = year - 1;
      // 重新计算月份
      month = 12;
    }
    // 重新计算天数
    day = getMonthDayCount(year)[month] + day;
  }

  return `${year}.${month}.${day}`;
}

console.log(get7dayAgo('2023.3.29'));
console.log(get7dayAgo('2023.3.3'));
console.log(get7dayAgo('2023.1.2'));