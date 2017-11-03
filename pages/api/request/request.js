// pages/api/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverResponse: [],
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
    this.buildRequest();
  },
  /**
   *  发送请求
   */
  sendRequest: function () {
    this.buildRequest();
  },
  /**
   * 
   * 
   * 构建请求
   */
  buildRequest: function () {
    wx.request({
      url: "https://h5.ycapp.yiche.com/PublicTest/GetUserCarScore",
      success: res => {
        if (res && res.data && res.data.data) {
          this.data.count++;
          this.data.serverResponse.push(this.data.count);
          //更新UI
          this.setData({
            serverResponse: this.data.serverResponse
          });
        }
      }
    });
  }
})