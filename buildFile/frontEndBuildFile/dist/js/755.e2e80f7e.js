"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[755],{4755:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var i=s(3396);function n(e,t,s,n,r,a){const o=(0,i.up)("debate-timer"),m=(0,i.up)("user-video"),u=(0,i.up)("debate-chat");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("button",{type:"button",onClick:t[0]||(t[0]=t=>(e.leaveSession(),e.moveMain()))}," Leave session "),(0,i._)("div",null,[(0,i.Wm)(o),(0,i.Wm)(m,{"stream-manager":this.store.state.publisher},null,8,["stream-manager"]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.store.state.subscribers,(e=>((0,i.wg)(),(0,i.j4)(m,{key:e.stream.connection.connectionId,"stream-manager":e},null,8,["stream-manager"])))),128)),(0,i.Wm)(u)])],64)}var r=s(65),a=s(7139);const o={key:0};function m(e,t,s,n,r,m){const u=(0,i.up)("ov-video");return s.streamManager?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(u,{"stream-manager":s.streamManager},null,8,["stream-manager"]),(0,i._)("div",null,[(0,i._)("p",null,(0,a.zw)(m.clientData+"이게 이름이구나"),1)])])):(0,i.kq)("",!0)}const u={autoplay:""};function l(e,t,s,n,r,a){return(0,i.wg)(),(0,i.iD)("video",u)}var h={name:"OvVideo",props:{streamManager:Object},watch:{streamManager:function(){this.streamManager.addVideoElement(this.$el)}},mounted(){this.streamManager.addVideoElement(this.$el)}},c=s(89);const d=(0,c.Z)(h,[["render",l]]);var g=d,p={name:"UserVideo",components:{OvVideo:g},props:{streamManager:Object},computed:{clientData(){const{clientData:e}=this.getConnectionData();return e}},methods:{getConnectionData(){const{connection:e}=this.streamManager.stream;return JSON.parse(e.data)}}};const v=(0,c.Z)(p,[["render",m]]);var f=v;const w={id:"session-timer",style:{"margin-left":"30%"}},b={id:"timerBtn"};function T(e,t,s,n,r,o){return(0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("div",null,[(0,i._)("h3",null,(0,a.zw)(e.turnUser)+" : "+(0,a.zw)(e.minutes)+" : "+(0,a.zw)(e.seconds),1)]),(0,i._)("div",b,[(0,i._)("button",{onClick:t[0]||(t[0]=(...t)=>e.sendStartTimer&&e.sendStartTimer(...t))},"시작"),(0,i._)("button",{onClick:t[1]||(t[1]=(...t)=>e.sendStopTimer&&e.sendStopTimer(...t))},"정지")])])}var k=(0,i.aZ)({setup(){const e=(0,r.oR)();return{store:e}},mounted(){this.store.state.session.on("signal:countdown-start",(e=>{this.startTimer()})),this.store.state.session.on("signal:countdown-stop",(e=>{this.stopTimer()}))},data(){return{rule:[["A","1","입론","5"],["B","3","교차조사","5"],["B","1","입론","5"],["A","3","교차조사","5"],["A","2","반론","5"],["B","1","교차조사","5"],["B","2","반론","5"],["A","1","교차조사","5"],["A","3","결론","5"],["B","3","결론","5"]],turn:0,turnUser:"현재 발표자 : A1 입론",isBreakTime:!1,timer:null,time:5,breakTime:3,resetButton:!1,edit:!1}},computed:{minutes(){const e=Math.floor(this.time/60);return this.padTime(e)},seconds(){const e=this.time-60*Number(this.minutes);return this.padTime(e)}},watch:{time:function(e,t){if(0==e&&this.turn<this.rule.length)if(this.isBreakTime)this.isBreakTime=!1,this.turnUser="현재 발표자 : "+this.rule[this.turn][0]+this.rule[this.turn][1]+this.rule[this.turn][2],this.resetTimer(),this.time=Number(this.rule[this.turn][3]),this.startTimer();else{if(this.isBreakTime=!0,this.turn++,this.turn==this.rule.length)return this.isBreakTime=!1,this.turnUser="토론이 종료되었습니다!! ",this.resetTimer(),void(this.time=0);this.turnUser="쉬는시간 다음 발표자 : "+this.rule[this.turn][0]+this.rule[this.turn][1]+this.rule[this.turn][2],this.resetTimer(),this.time=this.breakTime,this.startTimer()}}},methods:{sendStartTimer(){this.store.state.session.signal({data:"hello",to:[],type:"countdown-start"})},sendStopTimer(){this.store.state.session.signal({data:"hello",to:[],type:"countdown-stop"})},startTimer(){this.timer=setInterval((()=>this.countdown()),1e3),this.resetButton=!0,this.edit=!1},stopTimer:function(){clearInterval(this.timer),this.timer=null,this.resetButton=!0},resetTimer:function(){this.time=0,clearInterval(this.timer),this.timer=null,this.resetButton=!1},editTimer:function(){this.edit=!this.edit},padTime:function(e){return(e<10?"0":"")+e},countdown:function(){this.time>0?this.time--:this.resetTimer()}}});const _=(0,c.Z)(k,[["render",T]]);var S=_,D=s(9242);const M=e=>((0,i.dD)("data-v-428fe983"),e=e(),(0,i.Cn)(),e),B={class:"chat-panel"},y={class:"chat-box p-2 d-flex flex-column h-100"},C=M((()=>(0,i._)("div",{class:"header text-left"},[(0,i._)("span",{class:"title"}," 채팅 ")],-1))),x=["height"],O={class:"message-title"},U={class:"mr-2 message-header"},V={class:"message-header"},Z={class:"footer d-flex mt-auto"},z={class:"col-10 px-1 py-0"},A={class:"col-2 p-0"},H=M((()=>(0,i._)("i",{class:"fas fa-paper-plane"},"메세지 전송",-1))),I=[H];function N(e,t,s,n,r,o){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("div",y,[C,(0,i._)("div",{id:"chat-area",height:e.chatHeight},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.messages,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"mt-2 text-left message",key:t},[(0,i._)("div",O,[(0,i._)("span",U,(0,a.zw)(e.sender),1),(0,i._)("span",V,(0,a.zw)(e.time),1)]),(0,i._)("div",null,(0,a.zw)(e.content),1)])))),128))],8,x),(0,i._)("div",Z,[(0,i._)("div",z,[(0,i.wy)((0,i._)("input",{class:"text-box","onUpdate:modelValue":t[0]||(t[0]=t=>e.message=t),onKeyup:t[1]||(t[1]=(0,D.D2)(((...t)=>e.clickSendMessage&&e.clickSendMessage(...t)),["enter"]))},null,544),[[D.nr,e.message]])]),(0,i._)("div",A,[(0,i._)("button",{type:"button",class:"send-btn",onClick:t[2]||(t[2]=(...t)=>e.clickSendMessage&&e.clickSendMessage(...t))},I)])])])])}var W=(0,i.aZ)({name:"DebateChat",setup(){const e=(0,r.oR)();return{store:e}},mounted(){this.store.state.session.on("signal:send-massage",(e=>{console.log(e.data);let t=JSON.parse(e.data);this.messages.push(t)}))},data(){return{messages:[],message:"",chatHeight:"33vh"}},watch:{},computed:{},methods:{clickSendMessage(){if(this.message.trim()){let e={sender:"",content:"",time:""};e.content=this.message,e.sender=this.store.state.memberinfo.nickname;const t=new Date;let s=String("0"+t.getHours()).slice(-2),i=String("0"+t.getMinutes()).slice(-2),n=String("0"+t.getSeconds()).slice(-2),r=s+":"+i+":"+n;e.time=r,console.log(e),this.store.state.session.signal({data:JSON.stringify(e),to:[],type:"send-massage"}),this.message=""}}}});const j=(0,c.Z)(W,[["render",N],["__scopeId","data-v-428fe983"]]);var E=j,J=(0,i.aZ)({setup(){const e=(0,r.oR)();return{store:e}},computed:{},components:{UserVideo:f,DebateTimer:S,DebateChat:E},methods:{leaveSession(){this.store.state.session&&this.store.state.session.disconnect(),this.store.state.session=void 0,this.store.state.mainStreamManager=void 0,this.store.state.publisher=void 0,this.store.state.subscribers=[],this.store.state.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},moveMain(){this.$router.replace({name:"Main"})}}});const K=(0,c.Z)(J,[["render",n]]);var R=K}}]);
//# sourceMappingURL=755.e2e80f7e.js.map