function toast(tip,time,cb=''){
    var that = this;
    this.setData({
        toastShow:'block',
        toastTip:tip
    })
    setTimeout(function(){
        that.setData({
            toastShow:'none'
        })
        typeof cb == "function" && cb()
    },time)
    
}
module.exports = {
  toast: toast
}