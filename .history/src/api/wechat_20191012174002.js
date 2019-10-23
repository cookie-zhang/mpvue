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
        onSuccess(res)
      }else {}
     
    },
    fail: function (error) {
      console.log(error) // 直接抛出异常
    }
  })
}
