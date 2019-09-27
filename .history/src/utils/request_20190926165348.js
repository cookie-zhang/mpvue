function createFly () {
  // eslint-disable-next-line no-undef
  if (mpvuePlatforn === 'wx') {
    const Fly = require('flyio/dist/wx')
    return new Fly()
  }
  return null
}

export function get (url, params = {}) {
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

function handleErro 

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
