// pages/keymap/keymap.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keymapList: [],
    path: '../../data/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log('load data start.')
    wx.setNavigationBarTitle({
      title: options.key + '快捷键' //页面标题为路由参数
    })

    let key = `${this.data.path}keymap${options.key[0].toUpperCase()}${options.key.substring(1)}.js`;
    this.setData({
      keymapList: require(key).data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }

})