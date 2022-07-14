// eslint-disable-next-line import/no-anonymous-default-export
export default function (value) {
  if (value?.length > 0 && value?.length <= 8) {
    return true
  } else {
    return false
  }
}
