import Vue from 'vue'
import './extend.js'

// 定义过滤器
Vue.filter('formatTitle', (value = '', maxwidth = 18) => {
  let result = value;
  if (value.length > 0 && value.length > maxwidth) {
    result = `${value.substring(0, maxwidth)}...`;
  }
  return result;
});
/*
* 格式化字符串
* 字符串截取，默认截取18位
*/
Vue.filter('formatStr', (value, maxwidth) => {
  const maxWidth = maxwidth || 18;
  let result = value || '';
  if (value.length > 0 && value.length > maxWidth) {
    result = value.substring(0, maxWidth);
  }
  return result;
});

// 公里转换万公里  元转换万元(不带单位)
Vue.filter('formatMillion', (number, str) => {
  const newVal = number / 10000;
  const unit = str || '万元';
  if (!number) {
    return '--';
  } else if (parseInt(newVal, 10) === newVal) {
    return `${newVal}${unit}`;
  }
  return `${newVal.toFixed(2)}${unit}`;
});
/**
 * 时间戳转换
 * @parm {Number} val 时间戳
 * @parm {String} format 不传默认为yyyy-MM-dd格式， 指定时间格式,如：yyyy-MM
 * @parm {String} separators 分隔符，不传默认为'-'
 * return {String} 时间字符串
 */
Vue.filter('formatDate', (val, format, separators) => {
  if (val) {
    const d = new Date(val);
    const sptors = separators || '-';
    let dformat;
    switch (format) {
      case 'yyyy':
        dformat = d.getFullYear();
        break;
      case 'yyyy-MM':
        dformat = [d.getFullYear(), addZero(d.getMonth() + 1)].join(sptors);
        break;
      case 'yyyy-MM-dd':
        dformat = [d.getFullYear(), addZero(d.getMonth() + 1), addZero(d.getDate())].join(sptors);
        break;
      case 'hh-mm':
        dformat = [addZero(d.getHours()), addZero(d.getMinutes())].join(sptors);
        break;
      case 'hh-mm-ss':
        dformat = [addZero(d.getHours()), addZero(d.getMinutes()), addZero(d.getSeconds())].join(sptors);
        break;
      default:
        dformat = [d.getFullYear(), addZero(d.getMonth() + 1), addZero(d.getDate())].join(sptors);
    }
    return dformat;
  }
  return '--';
});
Vue.filter('parseDate', (val, format) => {
  const da = new Date(val);
  if (da == 'Invalid Date') {
    return val;
  }
  return da.pattern(format);
});
