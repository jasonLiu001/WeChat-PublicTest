// pages/api/authorize/authorize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorizeString: '',
    authMsg: '',
    code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 
   * 多次调用登录
   */
  multiLogin: function (e) {
    wx.login({
      success: res => {
        this.setData({
          code: res.code
        });
      }
    });
  },

  /**
   * 
   * 
   * 获取用户授权
   */
  getUserAuthroize: function (ev) {
    //api兼容判断
    if (wx.authorize && wx.getSetting) {
      wx.getSetting({
        success: res => {
          if (res.authSetting["scope.userInfo"]) {//如果已经授权
            this.setData({
              authorizeString: res.authSetting["scope.userInfo"],
              authMsg: '当前用户已授权'
            });
            console.dir(res.authSetting);
          } else {
            wx.authorize({
              scope: 'scope.userInfo',
              success: (errMsg) => {
                console.log(errMsg);
              }
            });
          }
        }
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      });
    }
  }
})