import {request} from "../utils/request"

export function listNav(){
    return request({
        url:"/nav/get",
        method:'POST'
    })
}

//获取新闻列表
export function queryNews(data){
  return request({
    url:"/news/get",
    method:"POST",
    data
  })
}

//获取新闻详情
export function newsDetail(data){
  return request({
    url:"/news/detail",
    method:"POST",
    data
  })
}

//获取产品列表
export function queryProduct(data){
  return request({
    url:"/product/getlist",
    method:"POST",
    data
  })
}


//获取产品详情
export function queryProductDetail(data){
  return request({
    url:"/product/detail",
    method:"POST",
    data
  })
}