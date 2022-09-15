/*
 * @Author: Liziming726 873884635@qq.com
 * @Date: 2022-09-15 21:03:06
 * @LastEditors: Liziming726 873884635@qq.com
 * @LastEditTime: 2022-09-15 21:03:11
 * @FilePath: \farreli\components\date.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}