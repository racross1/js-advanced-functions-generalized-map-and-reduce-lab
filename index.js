function map(src, cb) {
    let r = []
    for (let i = 0; i < src.length; i++) {
      r.push(cb(src[i])) 
    }
    return r
  }

  function reduce(src, cb, start) {
    let sum = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1
    for (; i < src.length; i++) {
      sum = (cb(sum, src[i])) 
    }
    return sum
  }
