<template>
  <div class="atui-calendar" v-show="show">
    <div class="atui-calendar-popup" v-show="displayDayView">
      <div class="atui-calendar-inner">
        <div class="atui-calendar-header">
          <!-- <span class="atui-calendar-prev-year-btn">»</span> -->
          <span class="month-btn atui-calendar-preBtn" @click="preNextMonthClick(0)">‹</span>
          <span class="month-btn atui-calendar-nextBtn" @click="preNextMonthClick(1)">›</span>
          <!-- <span class="atui-calendar-next-year-btn">»</span> -->
          <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
        </div>
        <div class="atui-calendar-body">
          <div class="atui-calendar-weekRange">
            <span v-for="w in weekRange">{{w}}</span>
          </div>
          <div class="atui-calendar-dateRange">
            <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,$event)">{{d.text}}</span>
          </div>
        </div>
        <div class="atui-calendar-footer">
          <a class="atui-calendar-today-btn" role="button" @click="daySelect(new Date(),$event)" :title="stringifyDayHeader(currDate)">今天</a>
        </div>
      </div>
    </div>
    <div class="atui-calendar-popup" v-show="displayMonthView">
      <div class="atui-calendar-inner">
        <div class="atui-calendar-header">
          <span class="month-btn atui-calendar-preBtn" @click="preNextYearClick(0)">&lt;</span>
          <span class="month-btn atui-calendar-nextBtn" @click="preNextYearClick(1)">&gt;</span>
          <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
        </div>
        <div class="atui-calendar-body">
          <div class="atui-calendar-monthRange">
            <template v-for="m in monthNames">
              <span :class="{'atui-calendar-dateRange-item-active':
                  (monthNames[parse(value).getMonth()]  === m) &&
                  currDate.getFullYear() === parse(value).getFullYear()}"
                  @click="monthSelect($index)"
                >{{m.substr(0,3)}}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="atui-calendar-popup" v-show="displayYearView">
      <div class="atui-calendar-inner">
        <div class="atui-calendar-header">
          <span class="month-btn atui-calendar-preBtn" @click="preNextDecadeClick(0)">&lt;</span>
          <span class="month-btn atui-calendar-nextBtn" @click="preNextDecadeClick(1)">&gt;</span>
          <p>{{stringifyDecadeHeader(currDate)}}</p>
        </div>
        <div class="atui-calendar-body">
          <div class="atui-calendar-monthRange decadeRange">
            <template v-for="decade in decadeRange">
              <span :class="{'atui-calendar-dateRange-item-active':
                  parse(value).getFullYear() === decade.text}"
                  @click.stop="yearSelect(decade.text)"
                >{{decade.text}}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const localeConfig = {
  zh_CN: {
    weekRange: ['日', '一', '二', '三', '四', '五', '六'],
    monthNames: [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      '10', '11', '12'
    ]
  },
  en_US: {
    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ]
  }
}
export default {
  props: {
    value: {
      type: String,
      default () {
        return new Date().toLocaleDateString()
      }
    },
    format: {
      default: 'yyyy-MMMM-dd'
    },
    locale: {
      default: 'zh_CN'
    },
    disabledDate: {
      type: Function,
      default () {
        return () => {}
      }
    },
    width: {
      type: String,
      default: '100%'
    },
    show: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'month'
    }
  },
  data () {
    return {
      weekRange: localeConfig[this.locale].weekRange,
      dateRange: [],
      decadeRange: [],
      currDate: new Date(),
      displayDayView: true,
      displayMonthView: false,
      displayYearView: false,
      monthNames: localeConfig[this.locale].monthNames
    }
  },
  watch: {
    currDate () {
      this.getDateRange()
    },
    disabledDate () {
      this.getDateRange()
    }
  },
  methods: {
    close () {
      this.displayDayView = this.displayMonthView = this.displayMonthView = false
    },
    preNextDecadeClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 10, months, date)
      } else {
        this.currDate = new Date(year + 10, months, date)
      }
    },
    preNextMonthClick (flag) {
      const year = this.currDate.getFullYear()
      const month = this.currDate.getMonth()
      const date = this.currDate.getDate()
      if (flag === 0) {
        const preMonth = this.getYearMonth(year, month - 1)
        this.currDate = new Date(preMonth.year, preMonth.month, date)
      } else {
        const nextMonth = this.getYearMonth(year, month + 1)
        this.currDate = new Date(nextMonth.year, nextMonth.month, date)
      }
    },
    preNextYearClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 1, months, date)
      } else {
        this.currDate = new Date(year + 1, months, date)
      }
    },
    yearSelect (year) {
      this.displayYearView = false
      this.displayMonthView = true
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
    },
    daySelect (date, event) {
      let el = event.target
      if (el.className.split(' ').indexOf('atui-calendar-item-disable') >= 0) {
        return false
      } else {
        this.currDate = date
        this.value = this.stringify(this.currDate)
        this.$dispatch('change', this.value)
      }
    },
    switchMonthView () {
      this.displayDayView = false
      this.displayMonthView = true
    },
    switchDecadeView () {
      this.displayMonthView = false
      this.displayYearView = true
    },
    monthSelect (index) {
      this.displayMonthView = false
      this.displayDayView = true
      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())
    },
    getYearMonth (year, month) {
      if (month > 11) {
        year++
        month = 0
      } else if (month < 0) {
        year--
        month = 11
      }
      return {year: year, month: month}
    },
    stringifyDecadeHeader (date) {
      const yearStr = date.getFullYear().toString()
      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
      return firstYearOfDecade + '-' + lastYearOfDecade
    },
    stringifyDayHeader (date) {
      return date.getFullYear() + '年' + this.monthNames[date.getMonth()] + '月'
    },
    parseMonth (date) {
      return this.monthNames[date.getMonth()]
    },
    stringifyYearHeader (date) {
      return date.getFullYear()
    },
    stringify (date, format = this.format) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const monthName = this.parseMonth(date)

      return format
      .replace(/yyyy/g, year)
      .replace(/MMMM/g, monthName)
      .replace(/MMM/g, monthName.substring(0, 3))
      .replace(/MM/g, ('0' + month).slice(-2))
      .replace(/dd/g, ('0' + day).slice(-2))
      .replace(/yy/g, year)
      .replace(/M(?!a)/g, month)
      .replace(/d/g, day)
    },
    parse (str) {
      const date = new Date(str)
      return isNaN(date.getFullYear()) ? null : date
    },
    getDayCount (year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
        return 28
      }
      return dict[month]
    },
    getDateRange () {
      this.dateRange = []
      this.decadeRange = []
      const time = {
        year: this.currDate.getFullYear(),
        month: this.currDate.getMonth(),
        day: this.currDate.getDate()
      }
      const yearStr = time.year.toString()
      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
      for (let i = 0; i < 12; i++) {
        this.decadeRange.push({
          text: firstYearOfDecade + i
        })
      }
      const currMonthFirstDay = new Date(time.year, time.month, 1)
      let firstDayWeek = currMonthFirstDay.getDay() + 1
      if (firstDayWeek === 0) {
        firstDayWeek = 7
      }
      const dayCount = this.getDayCount(time.year, time.month)
      if (firstDayWeek > 1) {
        const preMonth = this.getYearMonth(time.year, time.month - 1)
        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
        for (let i = 1; i < firstDayWeek; i++) {
          const dayText = prevMonthDayCount - firstDayWeek + i + 1
          const date = new Date(preMonth.year, preMonth.month, dayText)
          const sclass = this.disabledDate(date) ? 'atui-calendar-item-disable' : 'atui-calendar-item-gray'
          this.dateRange.push({
            text: dayText,
            date: date,
            sclass: sclass
          })
        }
      }

      for (let i = 1; i <= dayCount; i++) {
        const date = new Date(time.year, time.month, i)
        // const week = date.getDay()
        let sclass = ''
        // this.disabledDaysOfWeek.forEach((el)=> {
        //   if (week === parseInt(el, 10)) sclass = 'atui-calendar-item-disable'
        // })
        // 开发者指定的禁用日期
        if (i === time.day) {
          if (this.value) {
            const valueDate = this.parse(this.value)
            if (valueDate) {
              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                sclass = 'atui-calendar-dateRange-item-active'
              }
            }
          }
        }
        if (this.disabledDate(date)) {
          sclass = 'atui-calendar-item-disable'
        }
        this.dateRange.push({
          text: i,
          date: date,
          sclass: sclass
        })
      }

      if (this.dateRange.length < 42) {
        const nextMonthNeed = 42 - this.dateRange.length
        const nextMonth = this.getYearMonth(time.year, time.month + 1)
        for (let i = 1; i <= nextMonthNeed; i++) {
          const date = new Date(nextMonth.year, nextMonth.month, i)
          const sclass = this.disabledDate(date) ? 'atui-calendar-item-disable' : 'atui-calendar-item-gray'
          this.dateRange.push({
            text: i,
            date: date,
            sclass: sclass
          })
        }
      }
    }
  },
  ready () {
    this.$dispatch('child-created', this)
    this.currDate = this.parse(this.value) || this.parse(new Date())
  }
}
</script>
