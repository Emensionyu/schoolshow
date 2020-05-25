// miniprogram/pages/analysis/analysis.js
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderList:[],
    number:0,
    money:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.searchOrder();
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

 searchOrder(){
  wx.request({
    url: 'http://192.168.124.8:8080/order',
    success:res=>{
      const { mainOrder }=res.data
      this.calcOrders(mainOrder)
    }
  })
  },
  calcOrders(list){
    let money=0,number=0;
    list.map(element => {
      if(element.statusInfo.text=='交易成功'){
        money+=Number(element.payInfo.actualFee)
        number++
      }
    });
    let orderList=list
    money=Math.floor(money)
    this.setData({
        orderList,
        money,
        number,
    })
  },
  toChart(){
    wx.redirectTo({
      url: '/pages/webview/webview',
    })
  }
  
})