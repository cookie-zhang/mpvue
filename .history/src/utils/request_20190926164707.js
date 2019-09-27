function createFly () {
  if(mpvuePlatforn === 'wx') {
    const Fly = require('flyio/dist/wx')
    return new Fly()
}
return null
}