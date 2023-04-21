// pages/todolist/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    list: [] as any,
  },
  // 输入框事件
  bindKeyInput(e: any) {
    this.setData({
      inputValue: e.detail.value,
    })
  },
  // 新增
  add() {
    this.setData({
      list: this.data.list.concat(this.data.inputValue),
      inputValue: '',
    })
  },
  // 删除
  deldete(e: any) {
    console.log(e.target.dataset.index);
    const couerrtIndex = e.target.dataset.index;
    this.setData({
      list: this.data.list.filter((_: string,index: number) => index !== couerrtIndex)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})