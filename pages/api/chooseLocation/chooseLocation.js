Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: {
      latitude: 0.0,
      longitude: 0.0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 
   * 
   * 获取用户位置
   */
  getUserLocation: function (ev) {
    //获取位置
    wx.getLocation({
      success: res => {
        this.data.location.latitude = res.latitude;
        this.data.location.longitude = res.longitude;
        //更新UI
        this.setData({
          location: this.data.location
        });
      }
    })
  }
})