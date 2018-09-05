// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eMenu: [
      {
        id: 'keymaps',
        name: '快捷键',
        open: false,
        pages: [
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
            url: '../keymap/keymap?key=idea',
            enable: true
          },
          {
            label: 'WeChat开发者工具快捷键',
            url: '../keymap/keymap?key=weChat',
            enable: false
          },
          {
            label: 'evernote快捷键',
            url: '../keymap/keymap?key=evernote',
            enable: true
          },
          {
            label: 'chrome快捷键',
            url: '../keymap/keymap?key=chrome',
            enable: true
          },
        ]
      },
      {
        id: 'cmds',
        name: '命令行',
        open: false,
        pages: [
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
          {
            label: 'mongo命令',
            url: '../cmd/cmd?key=mongo',
            enable: true
          },
          {
            label: 'Ubuntu命令',
            url: '../cmd/cmd?key=ubuntu',
            enable: true
          },
          {
            label: 'Conda命令',
            url: '../cmd/cmd?key=conda',
            enable: true
          },
          {
            label: 'Pip命令',
            url: '../cmd/cmd?key=pip',
            enable: true
          },
          {
            label: 'Docker命令',
            url: '../cmd/cmd?key=docker',
            enable: true
          }
        ]
      }
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
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.eMenu;
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