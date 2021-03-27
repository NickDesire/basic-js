const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr))
    {
      return 1 + arr.reduce(((max, mas) => Math.max(max, this.calculateDepth(mas))), 0);
    }
    else return 0;
  }
};