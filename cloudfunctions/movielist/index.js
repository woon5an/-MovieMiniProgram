// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//引入request-promise
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {

  //调用豆瓣的api
  return rp(`https://douban.uieee.com/v2/movie/top250?start=${event.start}&count=${event.count}`)
    .then(function (res) {
      console.log(res);
      return res;
    })
    .catch(function (err) {
      console.error(err);
    });
}