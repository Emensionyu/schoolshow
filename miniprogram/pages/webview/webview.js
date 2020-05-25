// miniprogram/pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'https://gallery.echartsjs.com/editor.html?c=xfvH5fGgJC&v=3'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.url ? this.setData({url: options.url}) : wx.navigateBack({delta: 2});
  },
})