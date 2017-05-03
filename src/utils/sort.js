/**
 * Created by cuiyang_pc on 2017/5/2.
 */

  export function quickSort (array, key, order) {
    sort(array, 0, array.length, key, order);
  }
  // 左闭右开
  function sort(array, lo, hi, key, order) {
    // 单个元素必然有序
    if (hi - lo < 2) {
      return;
    }
    // 构造轴点
    var mi = partition(array, lo, hi - 1, key, order);
    sort(array, lo, mi, key, order);
    sort(array, mi + 1, hi, key, order);
  }
  // 左闭右闭，构造[lo,hi]区间的轴点，返回其下标
  function partition(array, lo, hi, key, order) {
    // 中位元素与首元素交换
    swap(array[lo], array[Math.floor((lo + hi) / 2)]);
    // 备份首元素
    var pivot = array[lo];
    if(order === 'ascend'){
      if(typeof array[lo][key] === 'number'){
        while (lo < hi) {
          // 向左扩展
          while (lo < hi) {
            if (pivot[key] < array[hi][key]) {
              // console.log(typeof pivot[key])
              hi--;
            } else {
              // 轴点右侧小于pivot的元素左移，覆盖首元素（首元素已经备份）
              array[lo++] = array[hi];
              break;
            }
          }
          //向右扩展
          while (lo < hi) {
            if (array[lo][key] < pivot[key]) {
              lo++;
            } else {
              // 轴点左侧大于pivot的元素右移，覆盖hi元素（hi位置原来的元素在左侧已经有值）
              array[hi--] = array[lo];
              break;
            }
          }
        }
      }else if(typeof array[lo][key] === 'string'){
        // 只有gb2312一级字库的汉字是按拼音组织的
        // 所以当排序汉字时,是按照内码排序，并不都符合拼音顺序
        while (lo < hi) {
          // 向左扩展
          while (lo < hi) {
            if (pivot[key].localeCompare(array[hi][key]) < 0) {
              // console.log(typeof pivot[key])
              hi--;
            } else {
              array[lo++] = array[hi];    // 轴点右侧小于pivot的元素左移，覆盖首元素（首元素已经备份）
              break;
            }
          }
          // 向右扩展
          while (lo < hi) {
            if (array[lo][key].localeCompare(pivot[key]) < 0) {
              lo++;
            } else {
              // 轴点左侧大于pivot的元素右移，覆盖hi元素（hi位置原来的元素在左侧已经有值）
              array[hi--] = array[lo];
              break;
            }
          }
        }
      }
    }else {
      if(typeof array[lo][key] === 'number'){
        while (lo < hi) {
          //  向左扩展
          while (lo < hi) {
            if (pivot[key] > array[hi][key]) {
              hi--;
            } else {
              // 轴点右侧小于pivot的元素左移，覆盖首元素（首元素已经备份）
              array[lo++] = array[hi];
              break;
            }
          }
          // 向右扩展
          while (lo < hi) {
            if (array[lo][key] > pivot[key]) {
              lo++;
            } else {
              // 轴点左侧大于pivot的元素右移，覆盖hi元素（hi位置原来的元素在左侧已经有值）
              array[hi--] = array[lo];
              break;
            }
          }
        }
      }else if(typeof array[lo][key] === 'string'){
        while (lo < hi) {
          // 向左扩展
          while (lo < hi) {
            if (pivot[key].localeCompare(array[hi][key]) > 0) {
              hi--;
            } else {
              // 轴点右侧小于pivot的元素左移，覆盖首元素（首元素已经备份）
              array[lo++] = array[hi];
              break;
            }
          }
          // 向右扩展
          while (lo < hi) {
            if (array[lo][key].localeCompare(pivot[key]) > 0) {
              lo++;
            } else {
              // 轴点左侧大于pivot的元素右移，覆盖hi元素（hi位置原来的元素在左侧已经有值）
              array[hi--] = array[lo];
              break;
            }
          }
        }
      }
    }
    // 循环结束lo一定===hi
    array[lo] = pivot;
    return lo;
  }
  function swap(a, b) {
    var tmp = a;
    b = a;
    a = tmp;
  }
