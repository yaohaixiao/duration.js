/**
 * 获取两个时间点的时间见差，包含秒、分钟、小时、天数、星期、月份、年
 * ================================================
 * @param {String|Date} start - 开始时间
 * @param {String|Date} [end] - 结束时间
 * @returns {Object}
 */
const duration = (start, end = new Date()) => {
  const ms = new Date(end).getTime() - new Date(start).getTime()
  const years = Math.floor(ms / (1000 * 3600 * 24 * 365))
  const months = Math.floor(ms / (1000 * 3600 * 24 * 30))
  const weeks = Math.floor(ms / (1000 * 3600 * 24 * 7))
  const days = Math.floor(ms / (1000 * 3600 * 24))
  const hours = Math.floor(ms / (1000 * 3600))
  const minutes = Math.floor(ms / (1000 * 60))
  const seconds = Math.floor(ms * 1000)
  const milliseconds = ms
  const ago = (unit = 'all', extra = 'ago') => {
    const time = {
      'year': years,
      'month': months,
      'week': weeks,
      'day': days,
      'hour': hours,
      'minute': minutes,
      'second': seconds,
      'millisecond': milliseconds
    }
    const all = {
      year: years % 365,
      month: months % 30,
      week: weeks % 7,
      day: days % 1,
      hour: hours % 24,
      minute: minutes % 60,
      second: seconds % 60,
      millisecond: Math.floor(milliseconds) % 1000
    }

    if (unit === 'all') {
      return Object.entries(all).filter(val => {
        return val[1] !== 0
      }).map(([key, val]) => {
        return `${val} ${key}${val !== 1 ? 's' : ''}`
      }).join(', ') + ` ${extra}`;
    } else {
      const val = time[unit]

      if (val) {
        if (val !== 1) {
          unit += 's'
        }

        return `${val} ${unit} ${extra}`
      } else {
        return ''
      }
    }
  }

  return {
    milliseconds: milliseconds,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
    weeks: weeks,
    months: months,
    years: years,
    ago: ago
  }
}
