// pages/pair/pair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pairs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      pairs: this.calculatePairs()
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

  calculatePairs: () => {
    let pairMember = {
      'A': 'Jasper',
      'B': 'Pogba',
      'C': 'Liz',
      'D': 'Sampson'
    };
    let ruleA_SingleWeek = [
      [
        ['A', 'B'],
        ['C', 'D']
      ],
      [
        ['B', 'D'],
        ['A', 'C']
      ],
      [
        ['D', 'C'],
        ['B', 'A']
      ],
      [
        ['C', 'A'],
        ['B', 'D']
      ],
      [
        ['A', 'D'],
        ['C', 'B']
      ]
    ];

    let ruleA_DoubleWeek = [
      [
        ['A', 'D'],
        ['C', 'B']
      ],
      [
        ['D', 'B'],
        ['A', 'C']
      ],
      [
        ['B', 'C'],
        ['D', 'A']
      ],
      [
        ['C', 'A'],
        ['D', 'B']
      ],
      [
        ['A', 'B'],
        ['C', 'D']
      ]
    ];

    let dt = new Date();
    let isDouble = Math.floor(dt.getDate() / 7) % 2 === 0;
    let whichDay = dt.getDay() - 1;

    return [
      isDouble ? ruleA_DoubleWeek[whichDay][0].map(member => pairMember[member]) : ruleA_SingleWeek[whichDay][0].map(member => pairMember[member]),
      isDouble ? ruleA_DoubleWeek[whichDay][1].map(member => pairMember[member]) : ruleA_SingleWeek[whichDay][1].map(member => pairMember[member])
    ];
  }
})