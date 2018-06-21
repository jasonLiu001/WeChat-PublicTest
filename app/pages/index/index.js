//index.js
//获取应用实例
const app = getApp();
const fakeData = require("../../utils/fakedata.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasMoreData: true,
    pageIndex: 1,
    list: [],
    displayColumns: [{ id: 1, name: 'currentAccountBalance', des: '账号余额' }],
    icons: fakeData.iconList
  },

  findInvestInfoList: function () {
    wx.request({
      url: fakeData.apiUrl.findInvestInfoList + "?pageIndex=" + this.data.pageIndex + "&pageSize=20&planType=1",
      method: 'POST',
      success: (data) => {
        if (data) {
          //解析 服务器端接口数据
          let serverData = data.data;

          //全部加载完成 隐藏正在载入...
          if (!data || serverData.data === null || serverData.data === undefined) {
            this.data.hasMoreData = false;
            return;
          }

          //遍历数组数据
          for (let key in serverData.data) {
            this.data.list.push(serverData.data[key]);
            this.setData({
              list: this.data.list
            });
          }

        }
      },
      fail: (data, code) => {
        console.log(`handling fail, code = ${code}`)
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.findInvestInfoList();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.pageIndex++;
    this.findInvestInfoList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
