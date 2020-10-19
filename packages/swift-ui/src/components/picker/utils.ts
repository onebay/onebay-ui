function getTimeRange(begin: number, end: number) {
  const range: string[] = []
  for (let i = begin; i <= end; i++) {
    range.push(`${i < 10 ? '0' : ''}${i}`)
  }
  return range
}

export const hoursRange = ['20', '21', '22', '23', ...getTimeRange(0, 23), '00', '01', '02', '03']

export const minutesRange = ['56', '57', '58', '59', ...getTimeRange(0, 59), '00', '01', '02', '03']

/**
 * Check whether the passed value is legal
 */
export function verifyValue(value: number, range: unknown[]): boolean {
  if (!isNaN(+value) && value >= 0 && value < range.length) return true
  return false
}

/**
 * Check whether the passed time value is legal
 */
export function verifyTime(value: string): boolean {
  if (!/^\d{1,2}:\d{1,2}$/.test(value)) return false

  const time = value.split(':').map((num) => +num)

  if (time[0] < 0 || time[0] > 23) return false
  if (time[1] < 0 || time[1] > 59) return false

  return true
}

/**
 * compare time
 * return t1 <= t2
 */
export function compareTime(t1: string, t2: string): boolean {
  const t1List = t1.split(':').map((i) => +i)
  const t2List = t2.split(':').map((i) => +i)
  if (t1List[0] < t2List[0]) return true
  if (t1List[0] === t2List[0] && t1List[1] <= t2List[1]) return true

  return false
}

/**
 * Check the validity of the date, return the validity and date array
 */
export function verifyDate(dateStr: string): boolean | Date {
  if (!dateStr) return false
  const date = new Date(dateStr.replace(/-/g, '/'))
  return isNaN(date.getMonth()) ? false : date
}

/**
 * Get the maximum number of days in the month
 */
function getMaxDay(year: number, month: number) {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30
  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return 29
    else return 28
  }
  return 31
}
export type ValidValue = number | string | string[]
export function formatValue(value: number | number[] | string): ValidValue {
  let res: ValidValue
  if (Array.isArray(value)) {
    res = value.map((item) => String(item))
  } else {
    res = value
  }
  return res
}

/**
 * Get time array
 */
function getDateRange(start: number, end: number) {
  const range: number[] = []
  for (let i = start; i <= end; i++) {
    range.push(i)
  }
  return range
}

/**
 * Get an array of year intervals
 */
export function getYearRange(start: number, end: number): number[] {
  return getDateRange(start, end)
}

/**
 * Get an array of month intervals
 */
export function getMonthRange(start: Date, end: Date, year: number): number[] {
  let rangeStart = 1
  let rangeEnd = 12

  // when start year equal to the year, rangeStart should be start month
  if (start.getFullYear() === year) {
    rangeStart = start.getMonth() + 1
  }

  // when end year equal to the year, rangeEnd should be end month
  if (end.getFullYear() === year) {
    rangeEnd = end.getMonth() + 1
  }

  return getDateRange(rangeStart, rangeEnd)
}

/**
 * Get date range array
 */
export function getDayRange(start: Date, end: Date, year: number, month: number): number[] {
  let rangeStart = 1
  let rangeEnd = getMaxDay(year, month)

  if (start.getFullYear() === year && start.getMonth() + 1 === month) {
    rangeStart = start.getDate()
  }

  if (end.getFullYear() === year && end.getMonth() + 1 === month) {
    rangeEnd = end.getDate()
  }

  return getDateRange(rangeStart, rangeEnd)
}
