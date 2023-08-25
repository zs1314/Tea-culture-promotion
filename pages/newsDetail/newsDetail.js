import {formatTime,formatNum} from "../../utils/common"
import {newsDetail} from "../../api/apis"
let id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options为上一个页面传递的对象，用来存储所有参数
    console.log(options);
    id=options.id;
    this.getDetail();
  },

  
  //获取详情页数据  
  getDetail(){
    newsDetail({
      id
    }).then(res=>{
      console.log(res);
      // 格式化时间
      res.data.publish_date=formatTime(res.data.publish_date,6)
      // 格式化阅读量
      res.data.view_count = formatNum(res.data.view_count)
      // 修改富文本的html标签
      res.data.content =res.data.content.replace(/<p/gi,"<p class='pstyle'");
      res.data.content =res.data.content.replace(/<img/gi,"<img class='imgstyle'");
      wx.setNavigationBarTitle({
        title:res.data.title
      })
      this.setData({
        detail:res.data
      })
    })
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
  onShareAppMessage(e) {    
    return {
      title:this.data.detail.title,
      path:"/pages/newsDetail/newsDetail?id="+this.data.detail._id
    }
  },

  // 分享到朋友圈
  onShareTimeline(){
    return {
      title:this.data.detail.title,
      path:"/pages/newsDetail/newsDetail?id="+this.data.detail._id
    }
  }
  
})