// pages/car/car.js
var amapFile = require('../../libs/amap-wx.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tips: {},
    address:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
   console.log(option.keywords)
   this.setData({
     address: option.keywords
   })
  },
  toseach:function(){
   
    console.log(9)
    wx.redirectTo({
      url: "../search/search",
    })
    //  this.setData({
    //   address:""
    // })
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