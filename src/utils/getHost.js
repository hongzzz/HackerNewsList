export default function (url) {
  const parser = document.createElement('a')
  parser.href = url
  return parser.hostname
}