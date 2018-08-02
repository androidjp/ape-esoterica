// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eMenu: [
      {
        label: 'windows快捷键',
        url: '../keymap/keymap?key=win',
        enable: true
      },
      {
        label: 'MacOS快捷键',
        url: '../keymap/keymap?key=mac',
        enable: true        
      },
      {
        label: 'Inteillj Idea快捷键',
        url: '../keymap/ij',
        enable: false        
      },
      {
        label: 'WeChat开发者工具快捷键',
        url: '../keymap/wechatApp',
        enable: false        
      },
      {
        label: 'ssh命令',
        url: '../cmd/cmd?key=ssh',
        enable: true        
      },
      {
        label: 'git命令',
        url: '../cmd/cmd?key=git',
        enable: true
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  displayTab: function(e) {
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  }
})