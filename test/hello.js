/**
 * Created by jiangyi on 16/6/29.
 */

/*export default function(name) {
  let result = null;
  if (name) {
    result = 'hello ' + name;
  } else {
    result = 'goodbye';
  }
  return result;
}*/
export default {
  sayHi: function(name) {
    let result = null;
    if (name) {
      result = 'hello ' + name;
    } else {
      result = 'hello ' + 'avatar'
    }
    return result;
  },
  sayGoodbye: function(name) {
    let result = null;

    if (name) {
      result = 'goodbye';
    }
    return result;
  }
}
