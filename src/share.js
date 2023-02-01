/**
 * 共用的路由配置
*/
export default class shareRouter {
  constructor(routerList) {
      this.router = routerList;
  }
  load(hash){
    // 1、判断是否存在路由
    let path = this.router.find(e => e.path === hash);
    // 2、不存在则显示404
    path  = path || this.router.find(e => e.path === '*');
    document.getElementById('pathDiv').innerHTML = `${path.component}`;
  }
  // 后退前进方法
  go(num) {
    window.history.go(num)
  }
}