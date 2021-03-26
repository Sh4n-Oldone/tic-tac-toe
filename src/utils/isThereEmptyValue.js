export const isThereEmptyValue = (obj) => {
  let isEmptyValue = false

  Object.values(obj).map(v => !v ? isEmptyValue = true : '')

  return isEmptyValue
}