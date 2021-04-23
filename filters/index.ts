/*
 * @Author: Cleveng
 * @Date: 2021-04-23 08:50:53
 * @LastEditTime: 2021-04-23 08:51:08
 * @Description: file header
 */
export function ellipsis (value: string): string {
  if (!value) return ''
  const len: number = 74
  if (value.length > len) {
    return value.slice(0, len) + '...'
  }
  return value
}
