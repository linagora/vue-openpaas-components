import OpenPaaSComponent from './components/openpaas';
import * as components from './components';

const OpenPaaS = {
  install(Vue, args) {
    Vue.use(OpenPaaSComponent, {
      components,
      ...args
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(OpenPaaS);
}

export default OpenPaaS;
