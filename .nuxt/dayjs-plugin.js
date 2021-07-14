import dayjs from 'dayjs'

import 'dayjs/locale/zh'
import 'dayjs/locale/en'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('zh')

dayjs.tz.setDefault('Asia/Taiwan')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
