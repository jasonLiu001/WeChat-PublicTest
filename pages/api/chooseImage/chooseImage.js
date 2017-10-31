Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  selectPicFile: function (e) {
    var self = this;
    wx.chooseImage({
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        //更新UI
        self.setData({
          imgSrc: tempFilePaths
        });
      }
    });
  }
})