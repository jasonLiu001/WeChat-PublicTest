Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  downLoadFiles: function () {
    wx.downloadFile({
      url: "https://h5.ycapp.yiche.com/Templates/UniversalLink/apple-app-site-association",
      success: function (res) {
        console.log(res);
      }
    });
  },

  callNextPages: function (ev) {
    wx.navigateTo({
      url: '/pages/api/chooseImage/chooseImage'
    });
  },

  /**
   * 
   * 返回上级页面
   */
  callBackPages: function (ev) {
    wx.navigateBack({
      url: ''
    });
  }
})