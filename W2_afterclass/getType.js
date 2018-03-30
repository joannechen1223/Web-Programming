/*
https://www.webbjocke.com/javascript-check-data-types/
*/
function getType(e) {
  if (e === null) return 'null';
  if (typeof e === 'undefined') return 'undefined';
  if (typeof e === 'function') return 'function';
  if (e.constructor === Array) return 'array';
  if (e.constructor === Object) return 'object';
  if (Number.isNaN(e)) return 'NaN';
  return typeof e;
}
