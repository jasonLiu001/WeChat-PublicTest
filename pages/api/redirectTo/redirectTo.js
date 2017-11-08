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

  openNewAndCloseSelf: function (ev) {
    wx.redirectTo({
      url: '/pages/api/chooseLocation/chooseLocation'
    });
  }
})