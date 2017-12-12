// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 跳转收货地址页面
  toMyAdd: function () {
    console.log(0)
    wx.navigateTo({
      url: "../myAddress/myAddress",
    })
  },
  // 跳转去团购页面
  toTuanGou:function(){
    wx.navigateTo({
      url: "../tuanGou/tuanGou",
    })
  },
  // 跳转去设置支付密码
  toSetPay:function(){
    wx.navigateTo({
      url: "../setPay/setPay",
    })
  },
  //跳转绑定手机
  toPhone:function(){
    wx.navigateTo({
      url: "../phone/phone",
    })
  },
  // 跳转发票
  toBill:function(){
    wx.navigateTo({
      url: "../bill/bill",
    })
  },
  // 跳转设置
  toSeting: function () {
    wx.navigateTo({
      url: "../seting/seting",
    })
  },
  // 跳转积分
  toJifen:function(){
    wx.navigateTo({
      url: "../jifen/jifen",
    })
  },
  // 跳转余额
  toYue:function(){
    wx.navigateTo({
      url: "../yue/yue",
    })
  },
  // 跳转优惠券
  toYouhui:function(){
    wx.navigateTo({
      url: "../youhui/youhui",
    })
  },
  // 跳转查看我的订单
  myList:function(){
    wx.navigateTo({
      url: "../myList/myList",
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})