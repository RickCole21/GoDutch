/**
 * 根据key获取链接地址中的参数值
 * @param  {[type]} k key值
 * @return {[type]}   对应参数值
 */
function getUrlParamByKey(k) {
  var params = {}; // 参数对象
  var search = window.location.search;
  if (!search) return '';
  var s = search.substring(1).split('&');
  s.forEach(function (item) {
    var key = item.substring(0, item.indexOf('='));
    var param = item.substring(item.indexOf('=') + 1);
    params[key] = param;
  });
  return params[k] || '';
}

export {getUrlParamByKey};