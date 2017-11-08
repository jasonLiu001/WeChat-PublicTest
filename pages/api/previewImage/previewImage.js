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
  callNextPages: function (ev) {
    wx.navigateTo({
      url: '/pages/api/getImageInfo/getImageInfo'
    });
  },
  /**
   * 
   * 
   * 预览图片文件
   */
  previewImageFile: function (e) {
    wx.previewImage({
      current: 'http://image.bitautoimg.com/appimage/cms/20170816/w750_h360_818289c40b984e098aff7fdc1fa68bcf.jpg',
      urls: [
        'http://image.bitautoimg.com/appimage/cms/20170929/w750_h360_d8773ab7d65b48f4a899ba5fd1cbe401.png', 'http://image.bitautoimg.com/appimage/cms/20170816/w750_h360_3d337984a4334ad5aee940644fa86c87.jpg',
        'http://image.bitautoimg.com/appimage/cms/20170816/w750_h360_c3a8ad8ab07c4857a9bfdfc638e8dca1.jpg',
        'http://image.bitautoimg.com/appimage/cms/20170816/w750_h360_818289c40b984e098aff7fdc1fa68bcf.jpg'
      ]
    })
  }
})