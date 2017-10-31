Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: {
      name: '',
      address: '',
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
  getUserLocation: function (e) {
    var self = this;
    wx.getLocation({
      success: function (res) {

        
        self.setData({
            
        });
      },
    });
  }
})