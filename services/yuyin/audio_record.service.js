const recorderManager = wx.getRecorderManager()

// audio record start
recorderManager.onStart(() => {

});

/// audio record stop
recorderManager.onStop((res) => {
  // temp file
  const {tempFilePath} = res;
  wx.uploadFile({
    url: app.d.hostUrl + '/Api/jijxxxx',
    filePath: tempFilePath,
    name: 'viceo',
    success: (res) => {
      console.log(res);
    }
  })
})

module.exports = recorderManager
