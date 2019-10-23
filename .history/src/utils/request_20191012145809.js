function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}

export function get (url, params = {},showErr) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(res => {
        if (res && res.data && res.data.error_code === 0) {
          resolve(res)
        } else {
          reject(res)
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
        handleErro(err)
        reject(err)
      })
    })
  }
}

function handleErro (err) {
  console.log(err)
}

export function post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(res => {
        console.log(res)
        resolve(res)
      }).catch(err => {
        console.log(err)
      })
    })
  }
}
