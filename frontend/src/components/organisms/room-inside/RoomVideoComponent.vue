<template>
  <!-- <Background></Background> -->
  <div class="user__grid__container">
    <user-video-component-vue
      :class="roomAndUserData?.userSideOrder"
      :xx="roomAndUserData?.userSideOrder"
      :streamManager="store.state.publisher"
    ></user-video-component-vue>
    <user-video-component-vue
      v-for="sub in subscribers"
      v-bind:key="sub.stream.connection.connectionId"
      :streamManager="sub"
      :class="
        userSideOrderMap?.get(
          JSON.parse(sub.stream.connection.data.split('%/%')[1])['userId']
        )
      "
      :xx="
        userSideOrderMap?.get(
          JSON.parse(sub.stream.connection.data.split('%/%')[1])['userId']
        )
      "
    ></user-video-component-vue>
    <user-video-component-vue
      v-for="empty in emptyVideoClasses"
      v-bind:key="empty"
      :class="empty"
    >
    </user-video-component-vue>
    <div class="c">
      <img :src="imgSrc" id="shareImg" style="width: 100%; height: 90%" />
    </div>
  </div>
  <div style="margin-left: 26%">
    <button
      v-for="(item, index) in store.state.uploadImageArr"
      v-bind:key="item"
      class="room__inside__fileUploadButton"
      @click="updateImg(item, index)"
    >
      {{ index + 1 }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import http from "@/http";
import * as openVidu from "openvidu-browser";
import { RoomUpdateUserSideOrderRequestInfo } from "@type/types";
import UserVideoComponentVue from "@/components/atoms/room-inside/UserVideoComponent.vue";
import { member2 } from "@/api/index";

import { useStore } from "vuex";

export default defineComponent({
  props: {
    // publisher: openVidu.Publisher,
    subscribers: Array(Object),
    roomAndUserData: Object,
    userSideOrderMap: Map,
    emptyVideoClasses: Array(Object),
  },
  setup() {
    const store = ref(useStore());
    return { store };
  },
  data() {
    return {
      imgSrc: require("@/assets/logo.png"),
    };
  },
  components: {
    UserVideoComponentVue,
    // Background,
  },
  methods: {
    updateImg(src: string, idx: number): void {
      this.imgSrc = src;
      this.store.state.selectedFileIndex = idx;
      console.log("selectedFileIndex : ", idx);
    },
  },
});
</script>

<style scoped>
.user__grid__container {
  /* background: radial-gradient(circle, #141834 0%, #13162f 100%); */
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  /* gap: 1.5em; */
  grid-template-areas:
    "a1 c b1"
    "a2 c b2"
    "a3 c b3";
}
.video {
  padding: 20px;
  width: 100%;
}
.a1 {
  grid-area: a1;
  background: #ffe2e2;
}
.a2 {
  grid-area: a2;
  background: #ffe2e2;
}
.a3 {
  grid-area: a3;
  background: #ffe2e2;
}
.b1 {
  grid-area: b1;
  background: #e1eeff;
}
.b2 {
  grid-area: b2;
  background: #e1eeff;
}
.b3 {
  grid-area: b3;
  background: #e1eeff;
}
.c {
  width: 100%;
  grid-area: c;
  padding: 20px;
  box-sizing: border-box;
  background-clip: content-box;
}
.room__inside__fileUploadButton {
  width: 40px;
  height: 40px;
  background: rgb(9, 9, 83);
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  margin-bottom: 20px;
}
</style>
