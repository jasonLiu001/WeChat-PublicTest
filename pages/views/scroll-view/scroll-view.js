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
    //console.log(options.id);//上一页面传递的参数
  },
  callNextPages: function (ev) {
    wx.navigateTo({
      url: '/pages/api/downloadFile/downloadFile'
    });
  }
})