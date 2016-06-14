// 13291895654 to 132 9189 5654

export default function (number, searchKey) {
  var ret = ''
  number = '' + number
  number = number.replace(/[^\d]/g, '').substr(0, 11)
  // var keyIndex = number.indexOf(searchKey)
  for (var i = 0; i < number.length; i++) {
    if (i === 3 || i === 7) {
      ret += ' '
    }
    ret += number[i]
  }
  if (searchKey) {
    ret = ret.replace(searchKey, '<span class="h">' + searchKey + '</span>')
  }
  return ret
}
