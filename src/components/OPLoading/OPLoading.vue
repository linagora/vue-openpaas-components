<template>
    <div class="text-xs-center">
        <v-progress-circular v-bind="componentProps"></v-progress-circular>
        <div class="title pa-3">
            {{$t(this.waitingText)}}
        </div>
    </div>
</template>

<script>
import { VProgressCircular } from "vuetify/lib";

export default VProgressCircular.extend({
  name: "op-loading",
  props: {
    waitingText: { type: String, required: true }
  },
  computed: {
    componentProps() {
      const defaults = {
        color: "amber",
        size: 50,
        indeterminate: true
      };
      const $props = Object.assign({}, this.$props, defaults);
      delete $props.waitingText;

      return $props;
    }
  }
});
</script>
