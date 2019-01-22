// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //   '../../images/swiper1.jpg',
    //   '../../images/swiper2.jpg',
    //   '../../images/s.jpeg',
    // ],
    // 轮播
    swiperList:[],
    // 导航
    navList:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // 采用衔接滑动
    circular:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data)
    // 请求轮播数据
    wx.request({
      url: 'https://locally.uieee.com/slides',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        this.setData({
          swiperList:res.data
        })
      },
      fail: function(res) {},
      complete: (res)=> {
        // console.log(this.data)
      },
    })

    // 请求导航数据
    wx.request({
      url: 'https://locally.uieee.com/categories',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        // console.log(res)
        this.setData({
          navList:res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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

  },
})