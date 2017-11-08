//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    publicTestItems: [],//所有众测项目
    publicTestItemTotalCount: 0,//项目总数
    pageIndex: 1,//当前页索引
    pageSize: 10,//单页数据
    banners: [],//众测banner图
    isShowMoreBtn: false//是否加载更多按钮
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var self = this;
    if (app.globalData.userInfo) {
      self.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (self.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        self.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          self.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      });
    }
    //页面初始化
    self.getPublicTestItems(self.data.pageIndex);
  },
  getUserInfo: function (e) {
    var self = this;
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    self.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 
   * 跳转到详情页
   */
  redirectToDetailPage: function (event) {
    var id = event.currentTarget.dataset["publictestid"];
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 
   * 加载更多项目
   */
  loadMoreItems: function () {
    var self = this;
    //已加载全部
    if (self.data.publicTestItems.length == self.data.publicTestItemTotalCount) return;

    self.data.pageIndex++;
    self.getPublicTestItems(self.data.pageIndex);
  },
  /**
   * 
   * 页面初始化
   * @param {Number} 请求的页索引
   */
  getPublicTestItems: function (pageIndex) {
    var self = this;
    var publicTestBanner = [];
    wx.request({
      url: "https://h5.ycapp.yiche.com/PublicTest/getPublicTestIndexData",
      data: {
        pageIndex: pageIndex,
        pageSize: self.data.pageSize
      },
      method: "GET",
      success: function (res, statusCode, header) {
        if (res && res.data.success) {
          var data = res.data.data;
          //加载项目列表         
          for (var i = 0; i < data.PublicTestList.length; i++) {
            self.data.publicTestItems.push(data.PublicTestList[i]);
          }
          //第一页数据 更新ui
          if (pageIndex == 1) {
            //加载banner图
            publicTestBanner.push(data.Banner);
            self.setData({
              publicTestItems: self.data.publicTestItems,
              publicTestItemTotalCount: data.PublicTestDetailCount,
              banners: publicTestBanner,
              isShowMoreBtn: pageIndex * self.data.pageSize < data.PublicTestDetailCount
            });
          } else {
            //更新ui项目列表
            self.setData({
              publicTestItems: self.data.publicTestItems,
              publicTestItemTotalCount: data.PublicTestDetailCount,
              isShowMoreBtn: pageIndex * self.data.pageSize < data.PublicTestDetailCount
            });
          }
        }
      },
      fail: function () { }
    });
  }
})
