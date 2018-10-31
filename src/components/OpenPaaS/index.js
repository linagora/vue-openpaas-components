const OpenPaaS = {
  install(Vue, opts = {}) {
    if (opts.directives) {
      for (const name in opts.directives) {
        Vue.directive(name, opts.directives[name]);
      }
    }

    (function registerComponents(components) {
      if (components) {
        for (const key in components) {
          const component = components[key];
          if (component) {
            Vue.component(key, component);
          }
        }
        return true;
      }
      return false;
    })(opts.components);
  }
};

export default OpenPaaS;
