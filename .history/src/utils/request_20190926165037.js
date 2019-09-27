function createFly () {
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
      fly.get()
    })    
  }
}