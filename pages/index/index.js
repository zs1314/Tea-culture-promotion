import {formatNum} from "../../utils/common.js"
import {formatTime} from "../../utils/common.js"
import {listNav} from "../../api/apis"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr:[],
    newsArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavData();
    this.getNewsData();
  },
  // 获取导航数据
  getNavData(){
    listNav().then(res=>{
      console.log(res);
      this.setData({
        navArr:res.data
      })
    })
    // 接口
    // wx.request({
    //   url: 'https://tea.qingnian8.com/nav/get',
    //   header:{
    //     "Content-Type":"application/json"
    //   },
    //   method:"POST",
    //   success:res=>{
    //     // console.log(res);
        
    //     this.setData({
    //       navArr:res.data.data
    //     })
    //   }
    // })
  },

  // 获取新闻列表
  getNewsData(){
    wx.request({
      url: 'https://tea.qingnian8.com/news/get',
      header:{
        "Content-Type":"application/json"
      },
      method:"POST",
      // 传递残数
      data:{
        limit:3,
        hot:true
      },
      success:res=>{
        // console.log(res);
        res.data.data.forEach(item=>{
          item.view_count=formatNum(item.view_count)
          item.publish_date=formatTime(item.publish_date,5)
        })

        this.setData({
          newsArr:res.data.data
        })
      }
    })
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
    
  }
})