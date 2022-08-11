import { createStore } from "vuex";

import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";
import { getMemberInfo } from "@/api/member";

export default createStore({
  state: {
    //로그인 관련
    userid: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",

    //유저 정보
    // memberNo:-1
    // loginId:""
    // loginPassword:""
    // phoneNumber:""
    // nickname:""
    // email:""
    // introduce:null
    // profileName:null
    // profileUrl:null
    // exp:0
    // debateNumber:0
    // recordWin:0
    // recordDraw:0
    // recordLose:0
    // debateTime:0
    memberinfo: {}, // 로그인된 user의 정보

    // openvidu
    OV: undefined,
    ovToken: "",
    session: undefined,
    mainStreamManager: undefined,
    publisher: undefined,
    subscribers: [],
    myNickName: "",
  },
  getters: {
    // 로그인 게터
    isLogin(state) {
      return state.userid !== "";
    },
    // 멤버 게터
    isMemberInfo(state) {
      return state.memberinfo;
    },
  },
  mutations: {
    //로그인
    SET_USER_ID(state, userid) {
      state.userid = userid;
    },
    CLEAR_USER_ID(state) {
      state.userid = "";
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    CLEAR_TOKEN(state) {
      state.token = "";
    },
    // 멤버
    SET_MEMBER_INFO(state, member) {
      state.memberinfo = member;
    },
    CLEAR_MEMBER_INFO(state) {
      state.memberinfo = {};
    },
  },
  actions: {
    async loginMember({ commit }, member) {
      const memberId = member.loginId;
      const response = await loginUser(member);
      // console.log(response);
      commit("SET_TOKEN", response.data["access-token"]);
      commit("SET_USER_ID", memberId);
      const memberInfo = await getMemberInfo();
      // console.log(memberInfo);
      commit("SET_MEMBER_INFO", memberInfo.data);
      saveAuthToCookie(response.data["access-token"]);
      saveUserToCookie(memberId);
      return response;
    },
  },
});
