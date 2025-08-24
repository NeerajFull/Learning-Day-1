function curry(fn) {
  const fnArgsLength = fn.length;
  return function curriedFunc(...args) {
    if(args.length >= fnArgsLength) {
      return fn(...args);
    }
    else{
      return function(...newArgs) {
        newArgs = [...args, ...newArgs]
        return curriedFunc(...newArgs);
        }
    }
  }
}



// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// console.log(curriedJoin(1, 2, 3)) // '1_2_3'
// console.log(curriedJoin(1)(2, 3)) // '1_2_3'
// console.log(curriedJoin(1, 2)(3)) // '1_2_3'

