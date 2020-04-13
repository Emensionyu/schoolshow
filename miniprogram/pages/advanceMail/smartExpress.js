// miniprogram/pages/smartExpress/smartExpress.js
var util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detail: {
        OrderCode: "01265701",
        ShipperCode: "SF",
        PayType: 1,
        ExpType: 1,
        StartDate:'2020-4-15',
        Sender: {
          Company: "LV",
          Name: "mensionyu",
          Mobile: "18379991528",
          ProvinceName: "安徽省",
          CityName: "阜阳市",
          ExpADreaNae:"太和县",
          Address:"安徽省阜阳市太和县原墙镇街上"
        },
        Receiver: {
          Company: "GCCUI",
          Name: "liaoyin",
          Mobile: "18355201030",
          ProvinceName: "安徽省",
          CityName: "阜阳市",
          ExpAreaName: "太和县",
          Address: "安徽省阜阳市太和县坟台镇街上"
        },
        Commodity: [{
          GoodsName: "",
          Goodsquantity: 1,
          GoodsWeight: 1.0
        }],
    },
    code:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  searchCompany() {
    var RequestData = JSON.stringify(this.data.detail)
    var DataSign = encodeURI(util.Base64((util.md5(RequestData + '9028a00c-e9da-494d-a9ca-68b519c9d34a'))))
    wx.request({
      url: 'http://api.kdniao.com/api/OOrderService',
      data: {
        //数据内容(进行过url编码)
        'RequestData': RequestData,
        //电商ID
        'EBusinessID': '1618269',
        //请求指令类型：1001
        'RequestType': '1001',
        //数据内容签名把（请求内容（未编码）+ApiKey）进行MD5加密，然后Base64编码，最后进行URL（utf-8）编码
        'DataSign': DataSign,
        //请求、返回数据类型： 2-json；
        'DataType': '2',
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      method: 'POST',
      success: (res) => {
        this.setData({
          code:res.data.Order.OrderCode
        })
      }
    })
  },
  onChange(obj){
    let key=obj.detail.name
    this.data.detail[key]=obj.detail.value
    this.setData({
      detail
    })
  }
})