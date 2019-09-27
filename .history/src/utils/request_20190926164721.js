function createFly () {
  // eslint-disable-next-line no-undef
  if (mpvuePlatforn === 'wx') {
    const Fly = require('flyio/dist/wx')
    return new Fly()
  }
  return null
}