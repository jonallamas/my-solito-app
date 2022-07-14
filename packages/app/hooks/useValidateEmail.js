// eslint-disable-next-line import/no-anonymous-default-export
export default function (email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (email.match(validRegex)) {
    return true
  } else {
    return false
  }
}
