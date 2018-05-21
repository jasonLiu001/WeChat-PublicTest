
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
    //打开页面时提示授权
    //this.getUserAuthroize();
    //页面时就调用登录接口 获取登录凭证
    wx.login({
      success: res => {
         console.log(res.code);
      }
    });
  },

  /**
   * 
   * 获取用户手机号 回调函数
   */
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },

  callNextPages: function (ev) {
    wx.navigateTo({
      url: '/pages/api/request/request'
    });
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
              success: (res) => {
                console.log(res);
              },
              fail: err => {
                this.setData({
                  authorizeString: err.errMsg,
                  authMsg: '用户已拒绝授权'
                });
                console.log(err);
              }
            });
          }
        },
        fail: res => {
          console.log(res);
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