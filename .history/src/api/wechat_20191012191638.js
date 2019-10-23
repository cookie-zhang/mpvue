export function getSetting (auth, onSuccess, onFail) {
  mpvue.getSetting({
    success: function (res) {
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

export function getUserInfo (onSuccess, onFail) {
  mpvue.getUserInfo({
    success: function (res) {
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail: function (error) {
      console.log(error) // 直接抛出异常
    }
  })
}

export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) {
  return mpvue.getStorage(key)
}

export function getOpenId () {
  mpvue.login({
    success (res) {
      if(){}
    },
    fail (res) {
      console.log(res)
    }
  })
}