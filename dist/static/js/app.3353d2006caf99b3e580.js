webpackJsonp([1],{"7i1F":function(e,t){},COWs:function(e,t){e.exports={default_instance_name:"default",pubnub_prefix:"pubnub",attributes_to_delegate:["channelGroups","push"],methods_to_delegate:["addListener","removeListener","removeAllListeners","hereNow","whereNow","getState","setState","grant","audit","publish","fire","history","deleteMessages","fetchMessages","time","reconnect","stop","unsubscribeAll","getSubscribedChannels","getSubscribedChannelGroups","encrypt","decrypt","getAuthKey","setAuthKey","setCipherKey","getUUID","setUUID","getFilterExpression","setFilterExpression"],common_callbacks_to_wrap:["callback","error"],subscribe_listener_events_to_broadcast:["message","presence","status"],history_sort_attribute:"timetoken"}},ENzn:function(e,t){},MSP8:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("Dd8w"),i=s.n(a),r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-bubble",class:e.me},[s("span",{staticClass:"from",class:e.me},[e._v(e._s(e.uuid))]),e._v(" "),s("br",{class:e.me}),e._v(" "),s("span",{staticClass:"message-text"},[e._v(e._s(e.text))])])},staticRenderFns:[]};var u=s("VU/8")({name:"message-bubble",props:["uuid","text"],computed:{me:function(){var e=!1;return this.$store.getters.getMyUuid===this.uuid&&(e=!0),e?"me":""}},data:function(){return{}}},r,!1,function(e){s("7i1F")},"data-v-831f8ca2",null).exports,c=s("NYxO");function o(){this.$el.scrollTo(0,this.$el.scrollHeight)}var l={name:"chat-log",components:{MessageBubble:u},data:function(){return{vueChatMsg:this.$pnGetMessage("vueChat")}},watch:{vueChatMsg:function(){this.$nextTick(o)}},computed:i()({},Object(c.b)({history:"getHistoryMsgs"}))},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"chatLogContainer",staticClass:"chat-log"},[this._l(this.history,function(e){return t("message-bubble",{key:e.id,attrs:{uuid:e.uuid,text:e.text}})}),this._v(" "),this._l(this.vueChatMsg,function(e){return t("message-bubble",{key:e.id,attrs:{uuid:e.message.uuid,text:e.message.text}})})],2)},staticRenderFns:[]};var d=s("VU/8")(l,h,!1,function(e){s("MSP8")},"data-v-db683bca",null).exports,f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-input"},[s("textarea",{ref:"messageInput",attrs:{placeholder:"message...",maxlength:"20000"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitMessage(t)}}})])},staticRenderFns:[]};var m=s("VU/8")({name:"message-input",data:function(){return{}},methods:{submitMessage:function(e){if(!e.shiftKey&&(e.preventDefault(),0!==e.target.value.length)){var t=this.$store.getters.getMyUuid;this.$pnPublish({channel:"vueChat",message:{text:e.target.value,uuid:t}}),e.target.value=""}}}},f,!1,function(e){s("ENzn")},"data-v-5e45a7d5",null).exports,g=s("DLcu");var p={name:"chat-container",components:{ChatLog:d,MessageInput:m},data:function(){return{title:"PubNub & Vue Global Chat "}},mounted:function(){var e;this.$pnSubscribe({channels:["vueChat"]}),this.$nextTick((e=this.$store,void g.a.getInstance().history({channel:"vueChat",count:6,stringifiedTimeToken:!0},function(t,s){s.messages.forEach(function(t){e.commit("addHistory",{history:[t]})})})))},computed:i()({},Object(c.b)({uuid:"getMyUuid"}))},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat-container"},[t("div",{staticClass:"heading"},[t("h1",[this._v(this._s(this.title+"- User: "+this.uuid))])]),this._v(" "),t("div",{staticClass:"body"},[t("div",{staticClass:"table"},[t("chat-log"),this._v(" "),t("message-input")],1)])])},staticRenderFns:[]};var v={name:"App",components:{ChatContainer:s("VU/8")(p,b,!1,function(e){s("RqD/")},"data-v-0f3c9c24",null).exports}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("chat-container")],1)},staticRenderFns:[]};var y=s("VU/8")(v,_,!1,function(e){s("mlWA")},null,null).exports;n.a.use(c.a);var C=new c.a.Store({state:{me:{},history:[]},getters:{getMyUuid:function(e){return e.me.uuid},getHistoryMsgs:function(e){return e.history}},mutations:{setMe:function(e,t){var s=t.me;e.me=s},addHistory:function(e,t){t.history.forEach(function(t){e.history.push(t.entry)})}}});n.a.config.productionTip=!1;var x="pub-c-d654dbd4-5d01-456c-b535-0786258382a2",M="sub-c-67d4e790-6c35-11e9-89f1-56e8a30b5f0e",$={uuid:function(){for(var e="",t=0;t<4;t++)e+="abcdef0123456789".charAt(Math.floor(Math.random()*"abcdef0123456789".length));return e}()};try{0}catch(e){console.log(e)}n.a.use(g.a,{subscribeKey:M,publishKey:x,ssl:!0},C),new n.a({el:"#app",store:C,components:{App:y},template:"<App/>",created:function(){this.$store.commit("setMe",{me:$})}})},"RqD/":function(e,t){},mlWA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3353d2006caf99b3e580.js.map