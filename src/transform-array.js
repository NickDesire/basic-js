const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let newArr = [];
  let s=0;
  if(arr.length == 0) return newArr;
  if (!Array.isArray(arr)) throw new Error;
  for (let k=0; k<arr.length; k++)
  {
    if (arr[k] == '--discard-next' || arr[k] == '--discard-prev' || arr[k] == '--double-next' ||
        arr[k] == '--double-prev'){
      s = s+1;
    }

  }
  if(s == 0) return arr;
  for (let i=0; i<arr.length; i++)
  {
    switch(arr[i]) {
      case '--discard-next':
        if (i != arr.length-1)
        {
          i = i+1;
        }
        break;
      case '--discard-prev':
        if (i != 0)
        {  if (arr[i-2] != '--discard-next')
          newArr.pop();
        }
        break;
      case '--double-next':
        if (i != arr.length-1)
        {
          newArr.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if (i != 0)
        {
          if(arr[i-2] != '--discard-next')
            newArr.push(arr[i-1]);
        }
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }
  return newArr;
};