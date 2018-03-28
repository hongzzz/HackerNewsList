export default function (number, label) {
  if (number <= 1) {
    return number + ' ' + label
  } else {
    return number + ' ' + label + 's'
  }
}