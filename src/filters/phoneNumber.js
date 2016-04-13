// 13291895654 to 132 9189 5654

module.exports = function(number, searchKey) {
  var ret = ''
  number = '' + number
  number = number.replace(/[^\d]/g, '').substr(0, 11);
  var keyIndex = number.indexOf(searchKey)
  for (var i = 0; i < number.length; i++) {
    if (3 === i || 7 === i) {
      ret += ' '
    }
    ret += number[i]
  }
  if (searchKey) {
    ret = ret.replace(searchKey, '<span class="h">' + searchKey + '</span>')
  }
  return ret
}
