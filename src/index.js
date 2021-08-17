/*
 * @Author: your name
 * @Date: 2021-08-17 10:05:18
 * @LastEditTime: 2021-08-17 10:15:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rollingpenetration\src\index.js
 */
class Rollingpenetration {
  constructor(){
      this.scrollTo=0
  }
  //弹窗显示的回调
  showUiCallback () {
      const documentElement = document.scrollingElement

      const scrollTop = documentElement.scrollTop

      this.scrollTop = scrollTop

      documentElement.style.position = 'fixed'
      documentElement.style.top = -this.scrollTop + 'px'
  }
  //弹窗隐藏的回调
  hideUiCallback() {
      const documentElement = document.scrollingElement

      documentElement.style.position = 'static'
      documentElement.scrollTop = this.scrollTop
  }
}

const rollingpenetration= new Rollingpenetration()

export default rollingpenetration
