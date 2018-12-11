import OpenPaaSComponent from "./components/OpenPaaS";
import * as components from "./components";

const OpenPaaS = {
  install(Vue, args) {
    Vue.use(OpenPaaSComponent, {
      components,
      ...args
    });
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(OpenPaaS);
}

export default OpenPaaS;
export * from "./components";
