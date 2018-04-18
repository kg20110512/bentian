const mockdata = require('../../utils/mockdata.js')

Page({
  data:{
     notices: []
  },
  onLoad:function(){
    this.setData({notices:mockdata.notices});
  },
  tapNotice: function (e) {
    var objectId = e.currentTarget.dataset.objectId;
    wx.navigateTo({
      url: "pages/notice_detail/notice_detail?objectId=" + objectId
    });
  },

})