// sumFunction 插件对应组件的名字
import AkiBackGround1 from './components/AkiBackGround1';

const components = [
  AkiBackGround1
]

// Vue.js 的插件应当有一个公开方法 install 。第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
// 此处注意，组件需要添加name属性，代表注册的组件名称，也可以修改成其他的
// 标签的方式引入
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

// 支持使用标签的方式引入 Vue是全局变量时，自动install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {install, AkiBackGround1};

// 按需引入
export {install, AkiBackGround1};
