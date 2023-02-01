import { ROUTELIST } from "./routerList";
import HashRouter from "./hash";
import HistoryRouter from "./history";

let ROUTER_MODE = 'HASH'; // 路由方式，默认HASH
const routerListDom = document.querySelector('.router-list');
// 循环生成li列表
ROUTELIST.forEach((e, index) => {
  if (index > 1 ) {
    const li = document.createElement('li');
    li.setAttribute('data-url', e.path);
    li.innerHTML = e.name
    routerListDom.append(li);
  }  
});

// 创建一个模拟路由类
class AnalogRouter {
  constructor(params) {
    const { mode, routeList } = params;
    // 根据使用类型，创建对应的实例
    this.router = mode === 'HASH' ? new HashRouter(routeList) : new HistoryRouter(routeList);
  }
  push(path) {
    this.router.push(path);
  }
  replace(path) {
    this.router.replace(path);
  }
  go(num) {
    this.router.go(num);
  }
}

// 创建页面的路由实例
let windowRouter = new AnalogRouter({
  mode: ROUTER_MODE,
  routeList: ROUTELIST    
});

// 点击li时触发
routerListDom.addEventListener('click', e => {
  const { nodeName, id } = e.target;
  // 只有点击li时才继续
  if (nodeName !== 'LI') return;
  // 点击重置路由时
  if ( id === 'rq') {
    windowRouter.replace('/')
  } else {
    const url = e.target.getAttribute('data-url');
    // 存在【/】时，代表是路径
    // 否则是传入数字
    url.includes('/') ? windowRouter.push(url) : windowRouter.go(url);
  }
});

// 切换路由方式按钮
document.getElementById('btn').addEventListener('click', e => {
  let type = e.target.getAttribute('data-type') === 'HASH' ? 'HISTORY' : 'HASH';
  e.target.innerHTML = `当前使用：${type}路由`
  e.target.setAttribute('data-type', type);
  if (type === 'HASH') {
    window.location.href = window.location.origin
  } else {
    windowRouter = new AnalogRouter({
      mode: type,
      routeList: ROUTELIST
    });
  }
})