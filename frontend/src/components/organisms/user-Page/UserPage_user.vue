<template>
  <div class="userpage-user">
    <div class="userpage-user-image">
      <img style="width: 130px; height: 130px" :src="memberinfo.profileUrl" />
    </div>
    <!-- <div class="userpage-user-badge">{{ member.badge }}</div> -->
    <!-- badge는 db에 없다 -->
    <div class="userpage-user-nickname">토론킹 {{ memberinfo.nickname }}</div>
    <div class="userpage-user-level">level. {{ level() }}</div>
    <div class="userpage-user-exp">exp {{ memberinfo.exp }}</div>
    <div class="userpage-user-bar">
      <div class="userpage-user-bar-exp"></div>
      <div class="userpage-user-bar-bar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { BASE_FILE_DIR } from "@/config/index";
export default defineComponent({
  data() {
    return {
      baseUrl: BASE_FILE_DIR,
      // exp: 100 - memberinfo.exp,
      // exp1: 100 - this.memberinfo.exp,
    };
  },
  computed: {
    ...mapState(["memberinfo"]),
  },
  created() {
    this.memberProfile();
    // this.memberExp();
  },
  mounted() {
    this.profileName();
  },
  methods: {
    ...mapActions(["MEMBERPROFILE"]),
    memberProfile() {
      this.MEMBERPROFILE();
    },
    // memberExp() {
    //   this.MEMBEREXP();
    // },
    profileName() {
      return this.memberinfo.profileUrl;
    },
    // expStyle() {
    //   return {
    //     right: this.memberinfo["exp"] + "px",
    //   };
    // },
    level() {
      return this.memberinfo.exp / 100 + 1;
      // return Math.floor(lv);
    },
    exp() {
      return this.memberinfo.exp % 98;
    },
    // expBar() {
    //   return 100 - (this.memberinfo.exp % 87);
    // },
  },
});
</script>

<style scoped>
* {
  font-family: "locus_sangsang";
}
.userpage-user {
  position: absolute;
  width: 800px;
  height: 160px;
  left: 50%;
  transform: translate(-50%);
  top: 200px;
}
.userpage-user-image {
  left: 80px;
  top: -120px;
  width: 130px;
  height: 130px;
  /* background-color: #1b2431; */
  border-radius: 10px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  color: white;
  /* font-family: roboto; */
  font-weight: bold;
  position: relative;
}
.userpage-user-image::before,
.userpage-user-image::after {
  position: absolute;
  content: "";
  top: -5%;
  left: -5%;
  height: 110%;
  width: 110%;
  border-radius: 50%;
  opacity: 0.5;
  filter: blur(60px);
}
.userpage-user-image::after {
  background-color: #00ffff;
  z-index: -1;
  animation: backglow2 15s ease infinite;
}
.userpage-user-image::before {
  background-color: #ff0072;
  z-index: -2;
  animation: backglow1 15s ease infinite;
}
@keyframes backglow1 {
  0% {
    transform: translate(10%, 10%) scale(1);
    opacity: 0.5;
  }
  25% {
    transform: translate(-10%, 10%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(-10%, -10%) scale(1.2);
    opacity: 0.8;
  }
  75% {
    transform: translate(10%, -10%) scale(1.1);
    opacity: 0.2;
  }
  100% {
    transform: translate(10%, 10%) scale(1);
    opacity: 0.5;
  }
}
@keyframes backglow2 {
  0% {
    transform: translate(-10%, -10%) scale(1);
    opacity: 0.5;
  }
  25% {
    transform: translate(10%, -10%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(10%, 10%) scale(1.2);
    opacity: 0.8;
  }
  75% {
    transform: translate(-10%, 10%) scale(1.1);
    opacity: 0.2;
  }
  100% {
    transform: translate(-10%, -10%) scale(1);
    opacity: 0.5;
  }
}
.userpage-user-nickname {
  position: absolute;
  left: 18.5%;
  transform: translate(-50%);
  bottom: 50%;
  /* font-family: "Inter"; */
  font-style: normal;
  /* font-weight: 900; */
  font-size: 30px;
  line-height: 77px;
  text-align: center;
  color: #ffffff;
}
.userpage-user-level {
  position: absolute;
  left: 34%;
  bottom: 58%;
  /* font-family: "Inter"; */
  font-style: normal;
  /* font-weight: 900; */
  font-size: 25px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
}
.userpage-user-badge {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 24%;
  bottom: 53%;
  background: rgb(87, 139, 61);
  border-radius: 25px;
}
.userpage-user-exp {
  position: absolute;
  right: 20px;
  top: 24%;
  /* font-family: "Inter"; */
  font-style: normal;
  /* font-weight: 600; */
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
}
.userpage-user-bar {
  position: absolute;
  width: 800px;
  height: 23px;
  left: 0px;
  top: 70px;
}
.userpage-user-bar-exp {
  box-sizing: border-box;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #a5a5a5;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 10px;
}
.userpage-user-bar-bar {
  position: absolute;
  left: 0%;
  right: 38%;
  top: 0%;
  bottom: 0%;
  background-image: linear-gradient(
    0deg,
    #ffe53b 0%,
    #ff2525 18%,
    #702a2a 49%,
    #ae2626 75%,
    #282424 100%
  );
  border-radius: 0px 25px 25px 0px;
}
</style>
