const mockdata = require('../../utils/mockdata.js')

Page({
  data:{
     notices: []
  },
  onLoad:function(){
    this.setData({notices:mockdata.notices});
  }

})