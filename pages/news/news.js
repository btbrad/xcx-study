// pages/news/news.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    currentPage: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData: function () {
    let { list, currentPage } = this.data
    wx.request({
      url: `http://localhost:9527/list?page=${currentPage}`,
      success: (res) => {
        console.log(res)
        this.setData({
          list: [...list, ...res.data],
        })
        wx.hideLoading()
        if (!res.data.length) {
          wx.showToast({
            title: '没有更多了...',
            icon: 'info',
            duration: 2000,
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中...',
    })
    const { currentPage } = this.data
    this.setData({
      currentPage: currentPage + 1,
    })
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
