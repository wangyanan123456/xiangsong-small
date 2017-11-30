// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  priceUp: function () {
    this.setData({
      num: this.data.num + 1
    })
  },
  priceDown: function () {
    if (this.data.num < 1) {
      this.setData({
        num: 0
      })
      return
    }
    this.setData({
      num: this.data.num - 1
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
    var num = wx.getStorageSync('count')
    this.setData({
      num:num
    })
    console.log(this.data.num)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorageSync('count', this.data.num)
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