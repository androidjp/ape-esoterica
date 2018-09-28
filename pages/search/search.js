// pages/search/search.js

const SearchUtils = require('../../utils/searchUtils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    isShowSearchResult: false,
    searchResults: [],
    // searchResult: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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

  getAllFileNames: function() {
    return [
      '../../data/cmdConda.js',
      '../../data/cmdDocker.js',
      '../../data/cmdGit.js',
      '../../data/cmdMongo.js',
      '../../data/cmdPip.js',
      '../../data/cmdRedis.js',
      '../../data/cmdSsh.js',
      '../../data/cmdUbuntu.js',
      '../../data/keymapChrome.js',
      '../../data/keymapEvernote.js',
      '../../data/keymapIdea.js',
      '../../data/keymapMac.js',
      '../../data/keymapWeChat.js',
      '../../data/keymapWin.js'
    ];
  },

  initAllDatas: function() {
    let allDataList = [];
    let fileNames = this.getAllFileNames();
    for (let fileName of fileNames) {
      let dataList = require(fileName);
      if (dataList && dataList.data) {
        dataList = dataList.data;
      }
      if (dataList.length > 0) {
        allDataList = allDataList.concat(dataList);
      }
    }
    return allDataList;
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
      isShowSearchResult: false,
      searchResults: []
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: "",
      searchResults: []
    });
  },
  inputTyping: function(e) {
    let allDataList = this.initAllDatas();
    this.setData({
      inputVal: e.detail.value,
      searchResults: SearchUtils.getSearchResult(allDataList, e.detail.value)
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