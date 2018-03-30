/*
https://www.w3schools.com/js/js_function_closures.asp
*/
const count = (function () {
  let privateCnt = 0;
  function changeBy(val) { privateCnt += val; }
  return {
    getCount() { return privateCnt; },
    increase() { return changeBy(1); },
    decrease() { return changeBy(-1); },
  };
}());
