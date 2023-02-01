
import shareRouter from "./share";

/**
 * hash方式路由
 * 参考MDN文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash
 * */
export default class HashRouter extends shareRouter {
    constructor(router) {
      super(router);
      this.hashChange();
      // 监听hash改变事件
      window.addEventListener('hashchange', e => {
        this.hashChange();
      })
    }
    // hash改变事件
    hashChange() {
      this.load(this.getHash())
    }
    // 获取当前的hash值
    getHash() {
      const hash = window.location.hash;
      return  hash ? hash.slice(1) : '/';
    }
    // push事件
    push(path) {
      window.location.hash = path;
    }
    // 获取默认页的url
    getUrl(path) {
      const { href } = window.location;
      const index = href.indexOf('#');
      const base = index >= 0 ? href.slice(0, index) : href;
      return `${base}#${path}`;
    }
    // 替换事件
    replace(path) {
      window.location.replace(this.getUrl(path))
    }
}