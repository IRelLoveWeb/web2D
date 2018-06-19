//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    info:'okdone'
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      info:'onload'
    })
  },
  onReady:function(){
    this.setData({
      info: 'onReady'
    })
  },
  onShow: function(){
    this.setData({
      info:'onShow'
    })
  }
})
