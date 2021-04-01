![Archived](https://img.shields.io/badge/Current_Status-archived-blue?style=flat)

# vue-openpaas-components

This module is a collection of Vue components to be used by OpenPaaS Vue projects.

## Howto

### Packaging

Since we rely on webpack on OpenPaaS Vue projects, it will be up to these projects to bundle what is needed on their side.
It means that there is no build to do in the current project. Adding a dependency to it and using it will be enough.

### Use components

Load the components before to use them like:

``` js
import OpenPaaS from "vue-openpaas-components";
Vue.use(OpenPaaS);
```

Use the components, for example the Avatar component:

```html
 <op-avatar size="48"/>
```

### Develop new components

In order to develop new components, you have to follow some rules, like for example a new component `opXyz`:

0. Always use the `op` prefix
1. Create a folder named `opXyz` under `src/components`
2. Create your Vue component in a `src/components/opXyz/opXyz.vue` file
3. In `src/components/opXyz/index.js` file, import your Vue component, then export it like

  ```js
  import opXyz from './opXyz.vue';

  export { opXyz };
  export default opXyz;
  ```

4. In `src/components/index.js`, export your component

  ```js
  export * from './opXyz';
  ```

5. The component will be automatically registered as a global component and you will be able to use it like `<op-xyz/>`

### Use in development mode

While you are developing new components, you will need to link the current project in your Vue project with `npm link`:

1. In this project run `npm link`
2. In your project run `npm link vue-openpaas-components`
