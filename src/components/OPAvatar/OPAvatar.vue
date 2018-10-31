<template>
  <v-avatar :size="size">
    <img v-if="getAvatarUrl" :src="getAvatarUrl">
    <v-icon v-else>account_circle</v-icon>
  </v-avatar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'op-avatar',
  computed: {
    ...mapGetters({
      getAvatarUrl: 'user/getAvatarUrl',
    })
  },
  props: {
    size: {
      type: [Number, String],
      default: 32
    }
  }
}
</script>
