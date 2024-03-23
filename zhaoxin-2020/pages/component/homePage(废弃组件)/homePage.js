// pages/component/homePage/homePage.js
Component({
  properties: {

  },
  data: {
    marioShow: 1,
    count: -1,
    animation: ''
  },
  attached() {
    this.countNum()
  },
  ready() {
    this.animation = wx.createAnimation({
      duration: 1050,
      timingFunction: "ease-in",
      success: function(res) {
        console.log(res)
      }
    })
  },
  methods: {
    // 微信小程序中的setTimeout和setInterval都会出现bug,真机调试的时候设置的时间失效,严重卡顿
    // 并且我觉得用九张照片进行切换这种行为,现在想想挺憨批的
    /*countNum: function() {
      setInterval(() => {
        let num = this.data.count+1
        if (num <= 7 || num == 9 || num == 10 || num == 11) {
          this.setData({
            "count": num
          })
        } else if (num == 8) {
          this.animation.translateY(-180).step()
          this.setData({
            "count": num,
            "animation": this.animation.export()
          })
        } else if (num == 12) {
          this.animation.translateY(0).step()
          this.setData({
            "count": num,
            "animation": this.animation.export()
          })
        } else {
          this.setData({
            "count": 1
          })
        }
      }, 550);
    }*/
  }
})