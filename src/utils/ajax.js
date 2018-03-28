export default function (method, url) {
  let xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.open(method, url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.withCredentials = false
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.status)
        }
      }
    }
    xhr.send()
  })
}
