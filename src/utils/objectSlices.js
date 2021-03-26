export const getRow = (obj, firstPosition, secondPosition) => 
  Object.keys(obj).slice(firstPosition, secondPosition).reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {})

export const getColumn = (obj, num) => {
  let newArr = []

  Object.keys(obj).map(item => {
    if (item.slice(item.length - 1) === num.toString()) {
      newArr.push(item)
    }
  })

  return newArr.reduce((result, key) => {
    result[key] = obj[key]
    return result
  }, {})
}

export const getMoreItems = (obj, arr) => {
  let newArr = []

  arr.map(item => {
    Object.keys(obj).map(k => {
      if (k === item) { newArr.push(k) }
    })
  })

  return newArr.reduce((result, key) => {
    result[key] = obj[key]
    return result
  }, {})
}

export const getValuesString = (obj) => Object.values(obj).toString().replaceAll(',', '')