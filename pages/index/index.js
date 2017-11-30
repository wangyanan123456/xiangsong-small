//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    tab_now: 10,
    num:1,
    showPrice:true,
    apper:false,
    numbe:0
  },
  //事件处理函数
  
  onLoad: function () {
  },
  onShow:function(){
    var num = wx.getStorageSync('count')
    if(num==0){
      this.setData({
        showPrice: true,
        apper: false,
      })
    }else{
      this.setData({
        showPrice: false,
        apper: true,
        numbe: num
      })
    }
    
    console.log(this.data.numbe)
  },
  toColor:function(e) {
    var sortType = e.currentTarget.dataset.type;
    // console.log(sortType)
    if (this.data.tab_now == sortType && sortType != 1) return;
    if (sortType != 1) {
      this.setData({
        tab_now: sortType
      });
      // this.data.listQuery.sort = this.data.tab_now;
    }
  },
  add:function(){
    this.setData({
      num:this.data.num+1
    })
  },
  jia: function () {
    this.setData({
      apper: true,
      showPrice: false,
    })
  },
  priceUp:function(){
    this.setData({
      apper:true,
      showPrice:false,
      numbe:this.data.numbe+1
    })
  },
  priceDown:function(){
    if (this.data.numbe < 1) {
      this.setData({
        apper: false,
        showPrice: true,
        numbe:0
      })
      return 
    }
    this.setData({
      numbe: this.data.numbe - 1
    })
   
  },
  tosearch:function(){
    wx.navigateTo({
      url: "../searchAddress/searchAddress",
    })
  },
  jian:function(){
    if(this.data.num<=1) return
    this.setData({
      num: this.data.num - 1
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onHide:function(){
    wx.setStorageSync('count', this.data.numbe)
  },
  onUnload: function () {
    thie.setData({
      numbe:0
    })
  },
})
