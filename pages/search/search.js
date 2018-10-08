// pages/search/search.js

const SearchUtils = require('../../utils/searchUtils.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    isShowSearchResult: false,
    searchResults: [],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    // searchResult: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.initUserInfo();
  },
  initUserInfo: function() {
    let _this = this;
    if (app.globalData.userInfo) { } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        app.globalData.userInfo = res.userInfo
        _this.onUserSession(res);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          _this.onUserSession(res);
        }
      })
    }
  },
  onUserSession: function(res) {
    // const { encryptedData, iv, rawData, signature, userInfo } = res;
    // console.log(`encryptedData:${encryptedData} [加密后的用户信息]`);
    // console.log(`iv:${iv} [对encryptedData加密算法的初始向量，解密要用到]`);
    // console.log(`rawData:${rawData} [userInfo 的 json字符串，不包含openid 和 unionid]`);
    // console.log(`signature:${signature} [使用sha1对rawData+session_key签名得到的字符串]`);
    // console.log(`userInfo:${userInfo} [用户信息对象，不包含 openid 和 unionid，供前端使用]`);
    let _this = this;
    const {
      encryptedData,
      iv
    } = res;
    wx.login({
      timeout: 3000,
      success: res => {
        // get login token from WeChat Backend
        const code = res.code;
        console.log(`login token from WeChat Backend:  ${code}`)
        const data = {
          code,
          encryptedData,
          iv
        };
        _this.getJwtFromServer(data);
      }
    })
  },
  getJwtFromServer: function(data) {
    let myHost = 'jpuneng.top'
    wx.request({
      url: `http://${myHost}/users/wxLogin`,
      method: 'POST',
      data,
      success: res => {
        wx.setStorageSync('auth', res.data)
      }
    })
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