export function getSetting (onSuccess, onFail) {
  mpvue.getSetting({
    success: function (res) {
      i f(res.authSetting['scope.userInfo']){
        onSuccess(res)
      }else{
        onFail(res)
      }
    },
    fail: function(error) {
      console.log(error)
    }
  })
}