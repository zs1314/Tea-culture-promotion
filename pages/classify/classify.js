// pages/classify/classify.js
import {listNav} from "../../api/apis"
import {queryProduct} from "../../api/apis"
let navid
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navactive:0,
      navArr:[],
      proArr:[],
      loading:false,
      isData:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let {idx}=options;
    await this.getNavList();
    if(idx){
      this.navChange(idx)
    }
    else{
      navid=this.data.navArr[0]._id
      this.getProductList();
    }
    
  },

  // 获取分类导航
  async getNavList(){
    await listNav().then(res=>{
      console.log(res);
      this.setData({
        navArr:res.data
      })
    })
  },

  // 获取产品列表
  getProductList(s=0){
    this.setData({
      loading:true
    })
    queryProduct({
      navid:navid,
      size:s
    }).then(res=>{
        // console.log(res);
        let oldArr=this.data.proArr
        let newArr=oldArr.concat(res.data)
        this.setData({
          proArr:newArr,
          loading:false
        })
    })
  },

  // 导航调切换
  navChange(e){
    // console.log(e);
    let index=e?.detail?.index ?? e
    navid=this.data.navArr[index]._id
    this.setData({
      proArr:[],
      navactive:Number(index)
    })
    this.getProductList()
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

    this.getProductList(this.data.proArr.length)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})