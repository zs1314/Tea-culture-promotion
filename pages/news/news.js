// pages/news/news.js
import {formatNum} from "../../utils/common.js"
import {formatTime} from "../../utils/common.js"
import {queryNews} from "../../api/apis"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr:[],
    loading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.getNewData()
  },
  getNewData(size=0){
    this.setData({
      loading:true
    })
    queryNews({limit:8,size}).then(res=>{
        console.log(res);
        res.data.forEach(item=>{
          item.view_count=formatNum(item.view_count)
          item.publish_date=formatTime(item.publish_date,5)
        })
        let olddata=this.data.newsArr
        // let newdata=[...olddata,...res.data]
        let newdata=olddata.concat(res.data)
        this.setData({
          newsArr:newdata,
          loading:false
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
      this.getNewData(this.data.newsArr.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})