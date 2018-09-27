// components/apeCardButton/apeCardButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isDisabled:{
      type: Boolean,
      value: false
    },
    description: {
      type: String,
      value: null
    },
    url: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoWebsite: function() {
      if(this.url) {
        wx.navigateTo({
          url: this.url
        });
      }
    }
  }
})
