Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ""
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 设置按钮触发事件
   */
  onClickSettingHandler: function () {
    wx.navigateTo({
      url: '/pages/setting/setting',
    })
  },
  /**
   * 点击登录按钮触发
   */
  onClickLoginHandler: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 点击showall按钮触发
   */
  onClickShowAllNotesHandler: function () {
    wx.navigateTo({
      url: '/pages/all/allnote',
    })
  },
  /**
   * 点击商城按钮触发
   */
  onClickGoToFindMaterialHanlder: function () {
    wx.navigateTo({
      url: '/pages/material/material',
    })
  },
  /**
   * 点击日历按钮触发
   */
  onClickGoToCalendarHandler: function () {
    wx.navigateTo({
      url: '/pages/calendar/calendar',
    })
  },
  /**
   * 点击登录按钮触发
   */
  onClickAddNoteHandler: function () {
    wx.navigateTo({
      url: '/pages/addnote/add',
    })
  },
})