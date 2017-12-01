// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    check:'',
    list:[
      {
        "img":'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        "title":'甜心小茉莉',
        "text":"茉莉一棒，入口即化",
        "new":"13.9",
        "old":'19.9',
        "num":'0'
      },
      {
        "img": 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        "title": '黑眼豆豆',
        "text": "巧克力面包",
        "new": "10.9",
        "old": '15.9',
        "num": '0'
      }
    ]
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
  title:function(e){
    // console.log(e)
    console.log(e.currentTarget.dataset.t)
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
  check: function (e) {
    console.log(e)
    var clickCheck = e.currentTarget.dataset.check
    // console.log(e.currentTarget.dataset.check)
    if (clickCheck == ''){
      this.setData({
        check: '√'
      })
    }else{
      this.setData({
        check: ''
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