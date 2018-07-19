// pages/keymap/keymap.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keymapList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log('load data start.')
    that.loadKeymapWin((err, resList) => {
      if (!err) {
        that.setData({
          keymapList: resList
        })
        console.log('load data finished.')
      }
    });
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

  },

  loadKeymapWin: function(callback) {
    let keymapList = [{
        option: 'win + D',
        explain: '隐藏所有窗口（再按一次还原）'
      },
      {
        option: 'win + R',
        explain: '弹出`运行`（可输入cmd、mstsc等指令）'
      },
    ];

    callback(null, keymapList);
  }
})