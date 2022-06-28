function getFlagValue(array, flag) {
  const flagIndex = array.indexOf(flag)
  const finalIndex = flagIndex + 1

  return array[finalIndex]
}

export default getFlagValue
