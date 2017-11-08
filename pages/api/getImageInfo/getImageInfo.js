Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    path: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  callNextPages: function (ev) {
    wx.navigateTo({
      url: '/pages/api/chooseLocation/chooseLocation'
    });
  },
  getImageFileInfo: function (e) {
    var self = this;
    wx.getImageInfo({
      src: 'http://image.bitautoimg.com/appimage/cms/20170816/w750_h360_818289c40b984e098aff7fdc1fa68bcf.jpg',
      success: function (res) {
        console.log(res.width);
        console.log(res.height);

        self.setData({
          width: res.width,
          height: res.height,
          path: res.path
        });
      }
    });

    // wx.chooseImage({
    //   success: function (res) {
    //     wx.getImageInfo({
    //       src: res.tempFilePaths[0],
    //       success: function (picInfo) {
    //         console.log(picInfo.height);
    //         console.log(picInfo.width);
    //         console.log(picInfo.path);
    //         //更新UI
    //         self.setData({
    //           width: picInfo.width,
    //           height: picInfo.height,
    //           path: picInfo.path
    //         });
    //       }
    //     });
    //   }
    // });
  }
})