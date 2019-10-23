export function getSetting (onSuccess, onFail) {
    mpvue.getSetting({
    success: function(res){
    if(res.authSetting['scope.userInfo']){
        onSuccess(res)
    }else{
        onFail(res)
    }
    },
    fail: function(error){
    console.log(error)
    }
})
  }