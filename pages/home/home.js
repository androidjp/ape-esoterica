// pages/home.js
const docs = require('../../data/docs').data;
const cmds = require('../../data/cmds').data;
const keymaps = require('../../data/keymaps').data;

Page({

  /**
   * 页面的初始数据
   */
  data: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      eMenu: [{
          id: 'keymaps',
          name: '快捷键',
          open: false,
          pages: this.buildToJump(keymaps, '../keymap/keymap')
        },
        {
          id: 'cmds',
          name: '命令行',
          open: false,
          pages: this.buildToJump(cmds, '../cmd/cmd')
        },
        {
          id: 'docs',
          name: '链接',
          open: false,
          pages: this.buildToJump(docs, '../website/website')
        }
      ]
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

  buildToJump: function(orgList, baseUrl) {
    let toJumpList = [];
    for (let doc of orgList) {
      toJumpList.push({
        label: doc.label,
        url: `${baseUrl}?key=${doc.key}&url=${doc.url}`,
        enable: doc.enable
      });
    }
    return toJumpList;
  },

  displayTab: function(e) {
    let url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },
  kindToggle: function(e) {
    var id = e.currentTarget.id,
      list = this.data.eMenu;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      eMenu: list
    });
  }
})