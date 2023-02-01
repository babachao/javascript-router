
import shareRouter from "./share";

/**
 * history方式路由
 * 参考MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history
 *            https://developer.mozilla.org/zh-CN/docs/Web/API/History_API
 * */
export default class HistoryRouter extends shareRouter {
    constructor(router) {
      super(router);
      this.pathChange();
      // 参考MDS文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event
      window.addEventListener('popstate', e => {
        console.log('我触发了', e)
        this.pathChange();
      })
    }
    // 路由改变事件
    pathChange() {
      this.load(this.getUrl())
    }
    // 获取当前的hash值
    getUrl() {
      const { pathname = '/' } = window.location;
      return pathname;
    }
    // push事件
    push(path) {
      history.pushState({ time: +new Date() }, '', path)
      this.pathChange();
    }
    // 替换事件
    replace(path) {
      history.replaceState(null, null, path);
      this.pathChange();
    }
}