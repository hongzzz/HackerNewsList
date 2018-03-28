import addS from './addS'

export default function (time) {
  const dif = new Date() / 1000 - time
  if (dif < 3600) {
    return addS(parseInt(dif / 60, 10), 'minute') + ' ago'
  } else if (dif < 86400) {
    return addS(parseInt(dif / 3600, 10), 'hour') + ' ago'
  } else {
    return addS(parseInt(dif / 86400, 10), 'day') + ' ago'
  }
}
