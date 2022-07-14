// eslint-disable-next-line import/no-anonymous-default-export
export default function (value) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(Number(value))
}
