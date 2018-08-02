// pages/cmd/cmd.js

import cmdSshData from '../../data/cmdSsh.js'
import cmdGitData from '../../data/cmdGit.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cmdList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: options.key + '命令' //页面标题为路由参数
    })

    switch (options.key) {
      case 'ssh':
        this.setData({
          cmdList: cmdSshData.data
        })
        break;
      case 'git':
        this.setData({
          cmdList: cmdGitData.data
        })
        break;
    }
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