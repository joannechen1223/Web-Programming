const curringSum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};
