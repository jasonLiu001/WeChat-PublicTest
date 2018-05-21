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
    //1.判断用户是否已经授权     
    //已授权 显示手机号登录和微信快捷登录按钮
    //未授权 显示授权微信后登录按钮


  },

  //授权微信后登录
  authAndLogin: function (ev) {
    //手工打开设置界面，引导用户开启授权
    wx.openSetting({
      success: (res) => {
 
      }
    });
  },
  //微信快捷登录
  useWeiXinLogin: function (e) { },
  //手机号登录
  useMobileLogin: function (ev) { }
})