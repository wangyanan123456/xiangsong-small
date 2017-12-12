// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    tab_now:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  toMyAdd: function () {
    console.log(0)
    wx.navigateTo({
      url: "../myAddress/myAddress",
    })
  },
  toTuanGou:function(){
    wx.navigateTo({
      url: "../tuanGou/tuanGou",
    })
  },
  toColor:function(e){
    var sortType = e.currentTarget.dataset.type;
    // console.log(sortType)
    if (this.data.tab_now == sortType && sortType != 6) return;
    if (sortType != 6) {
      this.setData({
        tab_now: sortType
      });
    }

    if (sortType ==1){
      this.setData({
        show:true
      })
    }
    if (sortType == 2) {
      this.setData({
        show: false
      })
    }
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