// pages/car/car.js
var amapFile = require('../../libs/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "aa9899403bf5cba47184033f18d234ff"//你申请的高德地图key
};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tips: {},
    address:'',
    formatted_address: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
   console.log(option.keywords)
   this.setData({
     address: option.keywords
   })
   var that = this;
   //用微信小程序的api接口获取经度，维度
   wx.getLocation({
     type: 'wgs84',
     success: function (res) {
       console.log(res)
       markersData.latitude = res.latitude,
         markersData.longitude = res.longitude
       that.map();
     }
   })
  },
  // 重新定位
  replace:function(){
    var that = this;
    //用微信小程序的api接口获取经度，维度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        markersData.latitude = res.latitude,
          markersData.longitude = res.longitude
        that.map();
      }
    })
    this.map()
  },
  // 去定位
  map: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    myAmapFun.getRegeo({
      location: '' + markersData.longitude + ',' + markersData.latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        console.log(data)
        //成功回调
        that.setData({
          adcode: data[0].regeocodeData.addressComponent.adcode,
          formatted_address: data[0].name
        });
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  // 跳转搜索页面
  toseach:function(){
    wx.redirectTo({
      url: "../search/search",
    })
  },
  addAddress:function(){
    wx.redirectTo({
      url: "../addAddress/addAddress",
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