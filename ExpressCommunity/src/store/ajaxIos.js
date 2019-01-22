import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import qs from 'qs';
Vue.use(Vuex);
Vue.prototype.axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8;'; //设置文本提交类型

const baseServer = "http://192.168.1.103:65534/JingYanSheQu/server/search/";
const getData = {

    //获取数据库表中信息
    getAxiosMethod(THIS, URL, METHODNAME) {
        let _this = THIS;
        axios.get(baseServer + URL).then((res) => {
            _this.commit(METHODNAME, res.data);
        }).catch((e) => {
            console.log(e);
        });
    },

    //提交客户端数据信息到数据库	
    postAxiosMethod(THIS, URL, args, METHODNAME) {

        let _this = THIS,
            data = qs.stringify({ postInfo: args });
        axios.post(baseServer + URL, data)
            .then(function(res) {
                _this.commit(METHODNAME, res.data);
            }).catch(function(e) {
                console.log(e);
            });
    },

    //上传视频到服务器
    postVideo(THIS,servFile,f,METHODNAME){
      $.ajax({
          url:baseServer + servFile,
          type:"post",
          data:f,
          processData:false,  
          contentType: false, 
          xhr:function(){
              let xhr = $.ajaxSettings.xhr();
              if (xhr.upload) {
                xhr.upload.addEventListener("progress", function(e){
                  var per= Math.ceil(100 * e.loaded / e.total ) +'%';//计算百分比
                  document.getElementsByClassName('videoUploadPrograss')[0].innerHTML = per;
                  if(Math.ceil(100 * e.loaded / e.total ) > 46 ){
                    document.getElementsByClassName('videoUploadPrograss')[0].style.color="#fff";
                  }
                  document.getElementsByClassName('videoUploadbg')[0].style.width = per;
                }, false);
                return xhr;
            }
          },
          success:function(e){
              THIS.commit(METHODNAME);
          },
          error:function(e){
              
          }
      });
    }
}

export default {
    getData
}