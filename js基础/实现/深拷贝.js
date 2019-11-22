function deepCopy(obj) {

  function isObject(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object'
  }

  let copy = {}
  const keys = Object.keys(obj)

  for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i]
      const tmp = obj[key]
    if (Array.isArray(tmp)) {
      copy[key] = [...tmp]
    } else if (isObject(tmp)) {
      copy[key] = deepCopy(tmp)
    } else {
      copy[key] = tmp
    }
  }

  return copy
}


const obj = {
  x: 1,
  y: [2, 3, 4],
  z: {
    m: 5,
    n: 6,
    r: null
  },
  k: null
}

const deep = deepCopy(obj)

deep.z.r = 8
deep.k = 99

console.log(deep)
console.log(obj)
