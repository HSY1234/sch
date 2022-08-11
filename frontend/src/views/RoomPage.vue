<template>
  <user-video :stream-manager="this.store.state.publisher" />
  <user-video
    v-for="sub in this.store.state.subscribers"
    :key="sub.stream.connection.connectionId"
    :stream-manager="sub"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { OpenVidu } from "openvidu-browser";
import { mapState } from "vuex";
import { OPENVIDU_SERVER_URL, OPENVIDU_SERVER_SECRET } from "@/config/index";
import UserVideo from "@/components/Video/UserVideo.vue";

export default defineComponent({
  setup() {
    const store = useStore();

    return { store };
  },
  computed: {},
  components: {
    UserVideo,
  },
});
</script>
<style scoped></style>
