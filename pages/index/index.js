//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    booking: [
      { img: '../../images/icons/location.svg', title: '健康单人精细洗牙', price: 48, sold: 100 },
      { img: '../../images/icons/telphone.svg', title: '美国3M树脂高端系列补牙', price: 48, sold: 100 },
      { img: '../../images/icons/rating.svg', title: '窝沟封闭', price: 48, sold: 100 }
    ],
    userInfo: {}
  },
  phonecall: function() {
    wx.makePhoneCall({
      phoneNumber: '18698349096' //仅为示例，并非真实的电话号码
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
