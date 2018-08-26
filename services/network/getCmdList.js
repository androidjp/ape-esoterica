const rootDocment = 'http://47.106.86.64:9999';//你的域名

module.exports = (url, data, cb) => {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'get',
    header: { 'Content-Type': 'application/json', 'Accept':'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.body)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}