// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    isShowSearchResult: false,
    searchResults: [{
        label: '实时搜索文本AAA',
        data: {
          option: 'AA',
          cmd: 'AAA'
        }
      },
      {
        label: '实时搜索文本BBB',
        data: {
          option: 'BB',
          cmd: 'BBB'
        }
      },
      {
        label: '实时搜索文本CC',
        data: {
          option: 'CC',
          cmd: 'CCC'
        }
      },
    ],
    searchResult: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false,
      isShowSearchResult: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  showSearchResult: function(e) {
    let data = e.currentTarget.dataset.data;
    this.setData({
      isShowSearchResult: true,
      searchResult: data
    });
  }
})