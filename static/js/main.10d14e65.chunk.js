(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"levelChange",(function(){return de})),a.d(n,"sizeChange",(function(){return me})),a.d(n,"timerChange",(function(){return fe}));var c={};a.r(c),a.d(c,"gameStatusChange",(function(){return he}));var i={};a.r(i),a.d(i,"gameStepCountInc",(function(){return pe})),a.d(i,"gameStepCountStart",(function(){return xe})),a.d(i,"gameBombCountInc",(function(){return ge})),a.d(i,"gameBombCountDec",(function(){return Oe})),a.d(i,"gameBombStartCount",(function(){return ve})),a.d(i,"gameStopWatchStart",(function(){return ye})),a.d(i,"gameStopWatchMinInc",(function(){return ke})),a.d(i,"gameStopWatchSecInc",(function(){return Ne})),a.d(i,"gameTimerStart",(function(){return Se})),a.d(i,"gameTimerMinDec",(function(){return Ce})),a.d(i,"gameTimerSecDec",(function(){return we}));var r={};a.r(r),a.d(r,"gameStart",(function(){return Me})),a.d(r,"gameChange",(function(){return _e}));var s={};a.r(s),a.d(s,"gameStatisticAdd",(function(){return Fe}));var o={};a.r(o),a.d(o,"soundMute",(function(){return bt})),a.d(o,"musicMute",(function(){return dt})),a.d(o,"musicUnMute",(function(){return mt})),a.d(o,"soundUnMute",(function(){return jt})),a.d(o,"musicAudio",(function(){return ut})),a.d(o,"musicVolumeChange",(function(){return ft})),a.d(o,"soundVolumeChange",(function(){return ht}));var l=a(0),u=a.n(l),b=a(13),j=a.n(b),d=a(54),m=a(18),f=a(4),h="MUSIC_MUTE",p="MUSIC_VOLUME_CHANGE",x="SOUND_MUTE",g="MUSIC_UNMUTE",O="SOUND_UNMUTE",v="SOUND_VOLUME_CHANGE",y="LEVEL_CHANGE",k="SIZE_CHANGE",N="TIMER_CHANGE",S="GAME_START",C="GAME_STATUS_CHANGE",w="GAME_TOKEN_CLICK",M="GAME_TOKEN_CLICK_START",_="GAME_BOMB_INC",A="GAME_BOMB_DEC",E="GAME_BOMB_START_COUNT",T="GAME_TIMER_START",z="GAME_TIMER_SEC_DEC",I="GAME_TIMER_MIN_DEC",B="GAME_STOPWATCH_START",F="GAME_STOPWATCH_SEC_INC",G="GAME_STOPWATCH_MIN_INC",U="GAME_STATISTIC_ADD",D={stepCount:0,bombCount:0,stopWatch:{min:0,sec:0},timerCounter:{min:0,sec:0}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{stepCount:e.stepCount?e.stepCount+1:1});case M:return Object(f.a)(Object(f.a)({},e),{},{stepCount:0});case E:return Object(f.a)(Object(f.a)({},e),{},{bombCount:t.payload});case _:return Object(f.a)(Object(f.a)({},e),{},{bombCount:e.bombCount+1});case A:return Object(f.a)(Object(f.a)({},e),{},{bombCount:e.bombCount-1});case B:return Object(f.a)(Object(f.a)({},e),{},{stopWatch:{min:0,sec:0}});case G:return Object(f.a)(Object(f.a)({},e),{},{stopWatch:{min:e.stopWatch.min+1,sec:0}});case F:return Object(f.a)(Object(f.a)({},e),{},{stopWatch:{min:e.stopWatch.min,sec:e.stopWatch.sec+1}});case T:return Object(f.a)(Object(f.a)({},e),{},{timerCounter:{min:t.payload,sec:0}});case I:return Object(f.a)(Object(f.a)({},e),{},{timerCounter:{min:e.timerCounter.min-1,sec:59}});case z:return Object(f.a)(Object(f.a)({},e),{},{timerCounter:{min:e.timerCounter.min,sec:e.timerCounter.sec-1}});default:return e}},W={level:"1",size:"10",timer:"none"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(f.a)(Object(f.a)({},e),{},{level:t.payload});case k:return Object(f.a)(Object(f.a)({},e),{},{size:t.payload});case N:return Object(f.a)(Object(f.a)({},e),{},{timer:t.payload});default:return e}},R={statistics:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(f.a)(Object(f.a)({},e),{},{statistics:t.payload});default:return e}},q={gameStatus:"start"},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(f.a)(Object(f.a)({},e),{},{gameStatus:t.payload});default:return e}},P={gameStartArr:[[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}],[{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1},{x:0,y:0,back:0,flag:!1,open:!1}]]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(f.a)(Object(f.a)({},e),{},{gameStartArr:t.payload});default:return e}},Y={sounds:{mute:!1,volume:1},music:{mute:!0,volume:.5}},Z=Object(d.b)({sounds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{sounds:Object(f.a)(Object(f.a)({},e.sounds),{},{mute:!0}),music:Object(f.a)({},e.music)};case O:return{sounds:Object(f.a)(Object(f.a)({},e.sounds),{},{mute:!1}),music:Object(f.a)({},e.music)};case h:return{sounds:Object(f.a)({},e.sounds),music:Object(f.a)(Object(f.a)({},e.music),{},{mute:!0})};case g:return{sounds:Object(f.a)({},e.sounds),music:Object(f.a)(Object(f.a)({},e.music),{},{mute:!1})};case p:return{sounds:Object(f.a)({},e.sounds),music:Object(f.a)(Object(f.a)({},e.music),{},{volume:t.payload})};case v:return{sounds:Object(f.a)(Object(f.a)({},e.sounds),{},{volume:t.payload}),music:Object(f.a)({},e.music)};default:return e}},gameSet:L,gameTable:J,gameStatus:K,gameCount:H,gameStat:V}),Q=(a(137),a(26)),X=a(20),$=(a(138),a(2)),ee=function(e){var t=e.refTo,a=e.buttonName;return Object($.jsx)(Q.b,{to:t,children:Object($.jsx)("button",{type:"button",className:"play-button",children:a})})},te=(a(141),function(){return Object($.jsx)("div",{className:"main-footer",children:Object($.jsx)(ee,{refTo:"/start",buttonName:"play"})})}),ae=(a(142),function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)("div",{className:"game-name-container",children:Object($.jsx)("div",{className:"game-name",children:"Mine hunter"})}),Object($.jsx)(te,{})]})}),ne=(a(143),function(){return Object($.jsxs)("div",{className:"footer",children:[Object($.jsx)("span",{children:"Created by: "}),Object($.jsxs)("a",{className:"margin",href:"https://github.com/Gaziz666/",target:"_blanc",children:[" ","Gaziz Tuleukulov"]}),Object($.jsx)("a",{href:"https://rs.school/react/",target:"_blanc",children:Object($.jsx)("div",{className:"rs-logo"})}),Object($.jsx)("span",{children:" 2021"})]})}),ce="lose",ie="win",re="play",se="start",oe="pause",le=(a(144),Object(m.b)((function(e){return Object(f.a)({},e.gameStatus)}),null)((function(e){var t=e.gameStatus;return Object($.jsxs)("header",{className:"header",children:[Object($.jsx)(Q.b,{className:"header-button",to:"/about",children:"About"}),t===re?Object($.jsx)("div",{className:"flag"}):null,t===oe?Object($.jsx)("div",{className:"flag"}):null,t===se?Object($.jsx)("div",{className:"flag"}):null,t===ce?Object($.jsx)("div",{className:"lose",children:"lose"}):null,t===ie?Object($.jsx)("div",{className:"win",children:"win"}):null,Object($.jsx)(Q.b,{className:"header-button",to:"/menu",children:"Menu"})]})}))),ue=(a(145),a(146),a(91)),be=a(65),je=a(90),de=function(e){return{type:y,payload:e}},me=function(e){return{type:k,payload:e}},fe=function(e){return{type:N,payload:e}},he=function(e){return{type:C,payload:e}},pe=function(){return{type:w}},xe=function(){return{type:M}},ge=function(){return{type:_}},Oe=function(){return{type:A}},ve=function(e){return{type:E,payload:e}},ye=function(){return{type:B}},ke=function(){return{type:G}},Ne=function(){return{type:F}},Se=function(e){return{type:T,payload:e}},Ce=function(){return{type:I}},we=function(){return{type:z}},Me=function(e){return{type:S,payload:e}},_e=function(e){return{type:S,payload:e}},Ae=a(17),Ee=[],Te=[],ze=function(e){var t=e.level,a=e.size;Te=[];for(var n=[],c=[],i=Number(a)*Number(t),r=0;r<Number(a);r+=1)c[r]=0;for(var s=0;s<Number(a);s+=1)n.push([].concat(c));for(var o=0;o<i;o+=1){var l=Math.floor(Math.random()*Number(a)),u=Math.floor(Math.random()*Number(a));0===n[l][u]?n[l][u]=10:o-=1}for(var b=0;b<Number(a);b+=1)for(var j=0;j<Number(a);j+=1)if(10!==n[b][j]){var d=0;j!==Number(a)-1&&(10===n[b][j+1]&&(d+=1),b>0&&10===n[b-1][j+1]&&(d+=1)),j>0&&(10===n[b][j-1]&&(d+=1),b!==Number(a)-1&&10===n[b+1][j-1]&&(d+=1)),b!==Number(a)-1&&(10===n[b+1][j]&&(d+=1),j!==Number(a)-1&&10===n[b+1][j+1]&&(d+=1)),b>0&&(10===n[b-1][j]&&(d+=1),j>0&&10===n[b-1][j-1]&&(d+=1)),n[b][j]=d}for(var m=0;m<Number(a);m+=1){for(var f=0;f<Number(a);f+=1)n&&Ee.push({x:m,y:f,back:n[m][f],flag:!1,open:!1});Te.push(Object(Ae.a)(Ee)),Ee=[]}return{gameArr:Te}},Ie=Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},c),n),i),r),Be=Object(m.b)((function(e){return Object(f.a)({},e.gameSet)}),Ie)((function(e){var t=e.level,a=e.size,n=e.timer,c=e.levelChange,i=e.sizeChange,r=e.timerChange,s=e.gameBombStartCount,o=e.gameStepCountStart,l=e.gameStopWatchStart,u=e.gameTimerStart,b=e.gameStart,j=e.gameStatusChange;return Object($.jsxs)("div",{className:"start-page-wrapper",children:[Object($.jsxs)("div",{className:"select-game",children:[Object($.jsx)("h3",{children:"Select game settings"}),Object($.jsx)("div",{className:"select-wrapper",children:Object($.jsxs)(be.a,{variant:"filled",className:"select",children:[Object($.jsx)(ue.a,{htmlFor:"filled-age-native-simple",children:"Level"}),Object($.jsxs)(je.a,{native:!0,value:t,onChange:function(e){return c(e.target.value)},children:[Object($.jsx)("option",{value:"1",children:"easy"}),Object($.jsx)("option",{value:"2",children:"normal"}),Object($.jsx)("option",{value:"3",children:"hard"})]})]})}),Object($.jsx)("div",{className:"select-wrapper",children:Object($.jsxs)(be.a,{variant:"filled",className:"select",children:[Object($.jsx)(ue.a,{htmlFor:"filled-age-native-simple",children:"Size"}),Object($.jsxs)(je.a,{native:!0,value:a,onChange:function(e){return i(e.target.value)},children:[Object($.jsx)("option",{value:"10",children:"small"}),Object($.jsx)("option",{value:"15",children:"medium"}),Object($.jsx)("option",{value:"20",children:"big"})]})]})}),Object($.jsx)("div",{className:"select-wrapper",children:Object($.jsxs)(be.a,{variant:"filled",className:"select",children:[Object($.jsx)(ue.a,{htmlFor:"filled-age-native-simple",children:"Timer"}),Object($.jsxs)(je.a,{native:!0,value:n,onChange:function(e){return r(e.target.value)},children:[Object($.jsx)("option",{value:"none",children:"none"}),Object($.jsx)("option",{value:"1",children:"1 min"}),Object($.jsx)("option",{value:"3",children:"3 min"}),Object($.jsx)("option",{value:"5",children:"5 min"})]})]})})]}),Object($.jsx)("div",{onClick:function(){return function(){s(Number(t)*Number(a)),o(),l(),u(Number(n));var e=ze({level:t,size:a,timer:n}).gameArr;b(e),j(re)}()},"aria-hidden":"true",children:Object($.jsx)(ee,{refTo:"/game",buttonName:"start"})})]})})),Fe=function(e){return{type:U,payload:e}},Ge=(a(147),function(e,t){return e===t-1}),Ue=function(e){return 0===e},De=function e(t,a,n,c,i){var r=Object(Ae.a)(t);Ge(a,c)||(0!==r[a+1][n].back||r[a+1][n].open||(r[a+1][n].open=!0,e(t,a+1,n,c,i)),r[a+1][n].open=!0,r[a+1][n].flag&&(r[a+1][n].flag=!1,i())),Ue(a)||(0!==r[a-1][n].back||r[a-1][n].open||(r[a-1][n].open=!0,e(t,a-1,n,c,i)),r[a-1][n].open=!0,r[a-1][n].flag&&(r[a-1][n].flag=!1,i())),Ge(n,c)||(0!==r[a][n+1].back||r[a][n+1].open||(r[a][n+1].open=!0,e(t,a,n+1,c,i)),r[a][n+1].open=!0,r[a][n+1].flag&&(r[a][n+1].flag=!1,i())),Ue(n)||(0!==r[a][n-1].back||r[a][n-1].open||(r[a][n-1].open=!0,e(t,a,n-1,c,i)),r[a][n-1].open=!0,r[a][n-1].flag&&(r[a][n-1].flag=!1,i())),Ue(a)||Ge(n,c)||(0!==r[a-1][n+1].back||r[a-1][n+1].open||(r[a-1][n+1].open=!0,e(t,a-1,n+1,c,i)),r[a-1][n+1].open=!0,r[a-1][n+1].flag&&(r[a-1][n+1].flag=!1,i())),Ge(a,c)||Ge(n,c)||(0!==r[a+1][n+1].back||r[a+1][n+1].open||(r[a+1][n+1].open=!0,e(t,a+1,n+1,c,i)),r[a+1][n+1].open=!0,r[a+1][n+1].flag&&(r[a+1][n+1].flag=!1,i())),Ue(a)||Ue(n)||(0!==r[a-1][n-1].back||r[a-1][n-1].open||(r[a-1][n-1].open=!0,e(t,a-1,n-1,c,i)),r[a-1][n-1].open=!0,r[a-1][n-1].flag&&(r[a-1][n-1].flag=!1,i())),Ge(a,c)||Ue(n)||(0!==r[a+1][n-1].back||r[a+1][n-1].open||(r[a+1][n-1].open=!0,e(t,a+1,n-1,c,i)),r[a+1][n-1].open=!0,r[a+1][n-1].flag&&(r[a+1][n-1].flag=!1,i()))},He=a.p+"static/media/bomb.be7d8658.mp3",We=a.p+"static/media/win.36e5e8aa.mp3",Le=a.p+"static/media/click.400e8b56.mp3",Re=new Audio(Le),Ve=new Audio(We),qe=new Audio(He),Ke=Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},r),c),i),s),Pe=Object(m.b)((function(e){return Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},e.gameTable),e.gameStatus),e.gameSet),e.gameCount),e.sounds),e.gameStat)}),Ke)((function(e){var t=e.gameStartArr,a=e.gameStatus,n=e.sounds,c=e.size,i=e.level,r=e.gameStatusChange,s=e.gameStart,o=e.gameStepCountInc,u=e.gameBombCountInc,b=e.gameBombCountDec,j=e.gameBombStartCount,d=e.x,m=e.y;return Object(l.useEffect)((function(){Re.volume=n.volume,Ve.volume=n.volume,qe.volume=n.volume}),[n]),Object($.jsxs)("div",{className:t[d][m].open?"open-button token-".concat(c):"button token-".concat(c),"aria-hidden":"true",onClick:function(){return function(){if(a!==ce&&a!==ie&&a!==se&&!t[d][m].flag&&!t[d][m].open){(null===n||void 0===n?void 0:n.mute)||Re.play(),10===t[d][m].back&&(r(ce),(null===n||void 0===n?void 0:n.mute)||qe.play());var e=Object(Ae.a)(t),l=0;e[d][m].open=!0,0===t[d][m].back&&De(e,d,m,Number(c),u),o(),s(e),e.forEach((function(e){e.forEach((function(e){e.open&&(l+=1)}))})),Number(c)*Number(c)-Number(c)*Number(i)===l&&((null===n||void 0===n?void 0:n.mute)||Ve.play(),r(ie),j(0),s(e.map((function(e){return e.map((function(e){return e.open?e:Object(f.a)(Object(f.a)({},e),{},{flag:!0})}))}))))}}()},onContextMenu:function(e){return function(e){if(e.preventDefault(),!t[d][m].open&&a!==ce&&a!==ie&&a!==se){var n=Object(Ae.a)(t);n[d][m].flag=!n[d][m].flag,n[d][m].flag?b():u(),s(n)}}(e)},children:[t[d][m].open?10===t[d][m].back?Object($.jsx)("div",{className:"bomb"}):0!==t[d][m].back?Object($.jsx)("span",{className:"open".concat(t[d][m].back),children:t[d][m].back}):null:null,t[d][m].flag?Object($.jsx)("div",{className:"flag-click"}):null]})})),Je=(a(148),function(e){var t=e.width,a=e.height;return Object($.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:a,viewBox:"0 0 24 24",width:t,children:[Object($.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object($.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})}),Ye=function(e){var t=e.width,a=e.height;return Object($.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:a,width:t,children:[Object($.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object($.jsx)("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.47 4.47 0 0016.5 12zM14 3.23v2.06a7 7 0 010 13.42v2.06a9 9 0 000-17.54z"})]})},Ze=function(e){var t=e.width,a=e.height;return Object($.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:a,width:t,children:[Object($.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object($.jsx)("path",{d:"M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A9 9 0 0014 3.23v2.06A7 7 0 0119 12zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"})]})},Qe=function(e){var t=e.width,a=e.height;return Object($.jsxs)("svg",{width:t,height:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object($.jsxs)("g",{clipPath:"url(#clip0)",filter:"url(#filter0_d)",fill:"#2F0F0F",children:[Object($.jsx)("path",{d:"M44.6 14.7l-.88-.98a1.25 1.25 0 00-1.9 0c-.52.57-.52 1.5 0 2.07l.9.98c.26.29.6.43.94.43.34 0 .69-.14.95-.43.52-.57.52-1.5 0-2.07zM39.26 13.72a1.25 1.25 0 00-1.89 0l-.9.98c-.51.57-.51 1.5 0 2.07.27.29.61.43.95.43.35 0 .69-.14.95-.43l.89-.98c.52-.57.52-1.5 0-2.07zM44.6 7.85c-.25-.29-.6-.43-.94-.43-.34 0-.68.14-.94.43l-.9.98c-.52.57-.52 1.5 0 2.07.53.58 1.38.58 1.9 0l.89-.97c.52-.58.52-1.5 0-2.08z"}),Object($.jsx)("path",{d:"M39.37 9.19l-1.9-2.08a3.77 3.77 0 00-5.67 0l-.63.7-1.89-2.08a1.25 1.25 0 00-1.89 0l-3.57 3.91a13.17 13.17 0 00-5.57-1.23c-3.81 0-7.4 1.63-10.08 4.58-5.56 6.1-5.56 16.03 0 22.14a13.56 13.56 0 0010.08 4.57c3.82 0 7.4-1.62 10.09-4.57a16.35 16.35 0 004.17-11.07c0-2.14-.39-4.2-1.12-6.11l3.57-3.92c.52-.57.52-1.5 0-2.08l-1.9-2.07.63-.7a1.26 1.26 0 011.9 0l1.89 2.08c.26.29.6.43.94.43.34 0 .69-.14.95-.43.52-.57.52-1.5 0-2.07zm-14.8 21.78a8.47 8.47 0 01-6.3 2.86 8.47 8.47 0 01-6.3-2.86 1.57 1.57 0 010-2.08 1.25 1.25 0 011.88 0c1.18 1.3 2.75 2 4.41 2 1.66 0 3.23-.7 4.41-2a1.25 1.25 0 011.9 0c.51.57.51 1.5 0 2.08z"})]}),Object($.jsxs)("defs",{children:[Object($.jsx)("clipPath",{id:"clip0",children:Object($.jsx)("path",{fill:"#fff",transform:"translate(4)",d:"M0 0h41v45H0z"})}),Object($.jsxs)("filter",{id:"filter0_d",x:"0",y:"-2",width:"49",height:"53",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object($.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object($.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object($.jsx)("feOffset",{dy:"2"}),Object($.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object($.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object($.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object($.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})]})]})},Xe=function(e){var t=e.width,a=e.height;return Object($.jsxs)("svg",{width:t,height:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object($.jsx)("g",{clipPath:"url(#clip0)",filter:"url(#filter0_d)",fill:"#2F0F0F",children:Object($.jsx)("path",{d:"M10.08 28.47c0-.16 0-.33.02-.49H8.54a3.88 3.88 0 00-3.88 3.88v5.09c0 .58.47 1.05 1.05 1.05h4.55a3.15 3.15 0 01-.18-1.05v-8.48zM17.61 25.08l.02-.49h-1.56a3.88 3.88 0 00-3.88 3.88v8.48c0 .58.47 1.05 1.05 1.05h4.55a3.15 3.15 0 01-.18-1.05V25.08zM33.01 18.34h-1.88a3.88 3.88 0 00-3.88 3.88v14.73c0 .58.47 1.05 1.06 1.05h7.53c.58 0 1.05-.47 1.05-1.05V22.22a3.88 3.88 0 00-3.88-3.88zM25.14 22.22a6 6 0 01.09-1.02H23.6a3.88 3.88 0 00-3.88 3.88v11.87c0 .58.47 1.05 1.06 1.05h4.54a3.15 3.15 0 01-.18-1.05V22.22zM39.29 7.24a1.05 1.05 0 00-.85-.71l-3.75-.55-1.67-3.4a1.05 1.05 0 00-1.9 0l-1.67 3.4-3.74.55a1.05 1.05 0 00-.59 1.8l2.71 2.64-.64 3.72a1.05 1.05 0 001.53 1.12l3.35-1.76 3.35 1.76a1.05 1.05 0 001.52-1.17l-.63-3.67 2.71-2.65c.29-.28.4-.7.27-1.08z"})}),Object($.jsxs)("defs",{children:[Object($.jsx)("clipPath",{id:"clip0",children:Object($.jsx)("path",{fill:"#fff",transform:"translate(4 2)",d:"M0 0h36v36H0z"})}),Object($.jsxs)("filter",{id:"filter0_d",x:"0",y:"0",width:"44",height:"44",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object($.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object($.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object($.jsx)("feOffset",{dy:"2"}),Object($.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object($.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object($.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object($.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})]})]})},$e=function(e){var t=e.width,a=e.height;return Object($.jsxs)("svg",{width:t,height:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object($.jsxs)("g",{filter:"url(#filter0_d)",fill:"#2F0F0F",children:[Object($.jsx)("path",{d:"M32.44 10.34a16.04 16.04 0 00-10.39-4.71V4.1h1.55a1.05 1.05 0 000-2.11h-5.2a1.05 1.05 0 000 2.1h1.55v1.53a16 16 0 00-7.5 2.41l-1-1a2.56 2.56 0 00-3.66 0L6.26 8.56c-1 1.01-1 2.65 0 3.65l1.01 1.01a16.12 16.12 0 00-2.44 8.58c0 4.32 1.68 8.4 4.73 11.45A16.05 16.05 0 0021 38c4.32 0 8.38-1.69 11.44-4.75a16.11 16.11 0 004.73-11.45c0-4.33-1.68-8.4-4.73-11.46zm-2.72 12.51h2.2a11 11 0 01-9.87 9.88v-2.21a1.05 1.05 0 10-2.1 0v2.21a11 11 0 01-9.86-9.88h2.2a1.05 1.05 0 000-2.1h-2.2a11 11 0 019.86-9.9v2.23a1.05 1.05 0 102.1 0v-2.22a11 11 0 019.86 9.88h-2.2a1.05 1.05 0 000 2.11z"}),Object($.jsx)("path",{d:"M23.6 21.19h-1.49v-4.27a1.05 1.05 0 00-2.1 0v5.32c0 .59.47 1.06 1.05 1.06h2.54a1.05 1.05 0 000-2.11z"})]}),Object($.jsx)("defs",{children:Object($.jsxs)("filter",{id:"filter0_d",x:"-1",y:"0",width:"44",height:"44",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object($.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object($.jsx)("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),Object($.jsx)("feOffset",{dy:"2"}),Object($.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object($.jsx)("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object($.jsx)("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object($.jsx)("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})})]})},et=Object(m.b)((function(e){return Object(f.a)({},e.gameCount)}),null)((function(e){var t=e.stepCount;return Object($.jsx)("span",{children:t})})),tt=Object(m.b)((function(e){return Object(f.a)({},e.gameCount)}),null)((function(e){var t=e.bombCount;return Object($.jsx)("span",{children:t})})),at=(a(149),Object(f.a)(Object(f.a)({},i),c)),nt=Object(m.b)((function(e){return Object(f.a)(Object(f.a)(Object(f.a)({},e.gameCount),e.gameStatus),e.gameSet)}),at)((function(e){var t=e.stopWatch,a=e.gameStatus,n=e.timer,c=e.timerCounter,i=e.gameStopWatchMinInc,r=e.gameStopWatchSecInc,s=e.gameTimerMinDec,o=e.gameTimerSecDec,u=e.gameStatusChange,b=function(){t.sec<59?r():i()},j=function(){"none"!==n&&a===re&&(c.sec>0?o():s(),1===c.sec&&0===c.min&&u(ce))};return Object(l.useEffect)((function(){var e=0,t=0;return a===re&&(e=window.setTimeout(b,1e3),t=window.setTimeout(j,1e3)),function(){clearTimeout(e),clearTimeout(t)}}),[a,t,c]),Object($.jsxs)($.Fragment,{children:["none"===n?Object($.jsx)("span",{children:t.min<10?"0".concat(null===t||void 0===t?void 0:t.min):null===t||void 0===t?void 0:t.min}):Object($.jsx)("span",{children:c.min<10?"0".concat(null===c||void 0===c?void 0:c.min):null===c||void 0===c?void 0:c.min}),Object($.jsx)("span",{className:"timer-margin",children:":"}),"none"===n?Object($.jsx)("span",{children:t.sec<10?"0".concat(null===t||void 0===t?void 0:t.sec):null===t||void 0===t?void 0:t.sec}):Object($.jsx)("span",{children:c.sec<10?"0".concat(null===c||void 0===c?void 0:c.sec):null===c||void 0===c?void 0:c.sec})]})})),ct=Object(f.a)(Object(f.a)(Object(f.a)({},c),r),s),it=Object(m.b)((function(e){return Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},e.gameSet),e.gameTable),e.gameCount),e.gameStat),e.gameStatus)}),ct)((function(e){var t=e.level,a=e.size,n=e.timer,c=e.gameStartArr,i=e.gameStatus,r=e.statistics,s=e.stopWatch,o=e.stepCount,u=e.gameStatisticAdd,b={gridTemplateColumns:"repeat(".concat(a,", 1fr)"),gridTemplateRows:"repeat(".concat(a,", 1fr)")};Object(l.useEffect)((function(){if(i===ce||i===ie){var e="easy";"2"===t?e="normal":"3"===t&&(e="hard");var c="00",l="00";c=s.min<10?"0".concat(s.min):s.min.toString(),l=s.sec<10?"0".concat(null===s||void 0===s?void 0:s.sec):s.sec.toString(),null===r||void 0===r||r.push({id:r.length+1,level:e,size:"".concat(a," * ").concat(a),timer:"none"===n?"none":"".concat(n," min"),gameStatus:i,time:"".concat(c,":").concat(l),stepCount:o}),u(r)}}),[i]);return Object($.jsx)($.Fragment,{children:Object($.jsxs)("div",{className:"game-container",onContextMenu:function(e){return e.preventDefault()},children:[Object($.jsx)("div",{className:"game",style:b,children:Object(Ae.a)(c).flat().map((function(e,t){var a=t+1;return Object($.jsx)(Pe,{x:e.x,y:e.y},a)}))}),Object($.jsxs)("div",{className:"game-footer",children:[Object($.jsxs)("div",{className:"status-container",children:[Object($.jsx)("div",{className:"status-info",children:Object($.jsx)(et,{})}),Object($.jsx)("div",{className:"status-icon",children:Object($.jsx)(Xe,{width:"44px",height:"44px"})})]}),Object($.jsxs)("div",{className:"status-container",children:[Object($.jsx)("div",{className:"status-info",children:Object($.jsx)(tt,{})}),Object($.jsx)("div",{className:"status-icon",children:Object($.jsx)(Qe,{width:"44px",height:"44px"})})]}),Object($.jsxs)("div",{className:"status-container",children:[Object($.jsx)("div",{className:"status-info",children:Object($.jsx)(nt,{})}),Object($.jsx)("div",{className:"status-icon",children:Object($.jsx)($e,{width:"42px",height:"44px"})})]})]})]})})})),rt=a(104),st=(a(151),[{field:"id",headerName:"ID",width:70},{field:"size",headerName:"size",width:80},{field:"level",headerName:"level",width:70},{field:"timer",headerName:"timer",width:80},{field:"gameStatus",headerName:"status",width:80},{field:"time",headerName:"time",width:80},{field:"stepCount",headerName:"steps",width:70}]),ot=Object(m.b)((function(e){return Object(f.a)({},e.gameStat)}),null)((function(e){var t=e.statistics;return Object($.jsx)("div",{className:"table-container",children:Object($.jsx)("div",{className:"table",children:Object($.jsx)(rt.a,{rows:t,rowHeight:25,columns:st,pageSize:10,disableColumnMenu:!0,checkboxSelection:!1})})})})),lt=(a(152),Object(m.b)((function(e){return Object(f.a)({},e.gameStatus)}),c)((function(e){var t=e.gameStatus,a=e.gameStatusChange,n=Object(X.e)();Object(l.useEffect)((function(){t===re&&a(oe)}),[]);return Object($.jsxs)("div",{className:"about-container",children:[Object($.jsx)("h3",{children:"About"}),Object($.jsx)("h5",{children:"Mine hunter 2021.02.001"}),Object($.jsxs)("h5",{children:["Created by: ",Object($.jsx)("a",{href:"https://github.com/Gaziz666",children:"#Gaziz666"})]}),Object($.jsx)("p",{className:"text-center",children:"Mine Hunter is a single - player puzzle game and has square blocks with hidden bombs or mines in it."}),Object($.jsx)("p",{className:"text-center",children:"You have to find the square, which has hidden bomb(mine) and \u2018flag\u2019 on that square by using \u2018clues\u2019 around each square."}),Object($.jsx)("p",{className:"text-center",children:"Here clues are numbers that tells you how many bombs(mine) are in the adjacent blocks in all directions (8)."}),Object($.jsx)("p",{className:"text-center",children:"For example, if the clue numbers is 1, that means it has only one in it\u2019s 8 adjacent squares and the remaining 7 squares are free to dig."}),Object($.jsx)("p",{className:"text-center",children:"If there is no clue means there is no bomb around the adjacent square blocks, you can dig the square."}),Object($.jsx)("p",{className:"text-center",children:"So use your calculation based on clues and flag on correct squares having bomb(mine) and dig the square."}),Object($.jsx)("div",{className:"close-icon-wrapper",onClick:function(){a(t===oe?re:se),n.goBack()},"aria-hidden":"true",children:Object($.jsx)(Je,{width:"30px",height:"30px"})})]})}))),ut=function(){return{type:"MUSIC_AUDIO"}},bt=function(){return{type:x}},jt=function(){return{type:O}},dt=function(){return{type:h}},mt=function(){return{type:g}},ft=function(e){return{type:p,payload:e}},ht=function(e){return{type:v,payload:e}},pt=(a(153),a.p+"static/media/music.719db157.mp3"),xt=Object(f.a)(Object(f.a)({},c),o),gt=new Audio(pt);gt.loop=!0;var Ot=Object(X.f)(Object(m.b)((function(e){return Object(f.a)(Object(f.a)({},e.sounds),e.gameStatus)}),xt)((function(e){var t=e.soundMute,a=e.musicMute,n=e.soundUnMute,c=e.musicUnMute,i=e.gameStatusChange,r=e.soundVolumeChange,s=e.musicVolumeChange,o=e.gameStatus,u=e.sounds,b=e.music,j=e.history,d=Object(X.e)(),m=function(){var e=document.querySelector(".app-wrapper");null===e||void 0===e||e.requestFullscreen(),document.fullscreenEnabled&&document.exitFullscreen().then((function(){return console.log("Document Exited from Full screen mode")})).catch((function(e){return console.error(e)}))},f=function(){i(o===oe?re:se)};return Object(l.useEffect)((function(){(null===b||void 0===b?void 0:b.mute)?gt.pause():gt.play(),gt.volume=b.volume}),[b]),Object(l.useEffect)((function(){o===re&&i(oe);var e=function(e){"KeyM"===e.code?j.push("/react-game"):"KeyS"===e.code?j.push("/statistic"):"KeyF"===e.code?m():"KeyN"===e.code?j.push("/start"):"KeyR"===e.code&&j.push("/game")};return document.addEventListener("keypress",e),function(){return document.removeEventListener("keypress",e)}}),[]),Object($.jsxs)("div",{className:"menu-container",children:[Object($.jsx)("h3",{className:"menu-text",children:"menu"}),Object($.jsxs)("div",{className:"list-container",children:[Object($.jsx)("div",{className:"list-wrapper",children:Object($.jsxs)("ul",{className:"list",children:[Object($.jsx)("li",{className:"list-item menu-text",children:Object($.jsx)(Q.b,{to:"/react-game",children:"main"})}),Object($.jsx)("li",{className:"list-item menu-text",children:Object($.jsx)(Q.b,{to:"/statistic",children:"statistics"})}),Object($.jsx)("li",{className:"list-item menu-text",onClick:f,"aria-hidden":"true",children:Object($.jsx)(Q.b,{to:"/game",children:"resume"})}),Object($.jsx)("li",{className:"list-item menu-text",onClick:m,"aria-hidden":"true",children:"full screen"}),Object($.jsx)("li",{className:"list-item menu-text",children:Object($.jsx)(Q.b,{to:"/start",children:"new game"})})]})}),Object($.jsx)("div",{className:"list-wrapper",children:Object($.jsxs)("ul",{className:"list",children:[Object($.jsx)("li",{className:"key-item menu-text",children:"key M"}),Object($.jsx)("li",{className:"key-item menu-text",children:"key S"}),Object($.jsx)("li",{className:"key-item menu-text",children:"key R"}),Object($.jsx)("li",{className:"key-item menu-text",children:"key F"}),Object($.jsx)("li",{className:"key-item menu-text",children:"key N"})]})})]}),Object($.jsxs)("div",{className:"audio-wrapper",children:[Object($.jsxs)("div",{className:"audio-button-container",children:[Object($.jsx)("div",{className:"menu-text margin-bottom",children:"sound"}),Object($.jsx)("input",{type:"range",min:"0",max:"1",step:"0.1",value:u.volume,onChange:function(e){return r(Number(e.target.value))}}),Object($.jsx)("div",{onClick:function(){return t()},"aria-hidden":"true",children:u.mute?null:Object($.jsx)(Ye,{width:"24px",height:"24px"})}),Object($.jsx)("div",{onClick:n,"aria-hidden":"true",children:u.mute?Object($.jsx)(Ze,{width:"24px",height:"24px"}):null})]}),Object($.jsxs)("div",{className:"audio-button-container",children:[Object($.jsx)("div",{className:"menu-text margin-bottom",children:"music"}),Object($.jsx)("input",{type:"range",min:"0",max:"1",step:"0.1",value:b.volume,onChange:function(e){return s(Number(e.target.value))}}),Object($.jsx)("div",{onClick:a,"aria-hidden":"true",children:b.mute?null:Object($.jsx)(Ye,{width:"24px",height:"24px"})}),Object($.jsx)("div",{onClick:c,"aria-hidden":"true",children:b.mute?Object($.jsx)(Ze,{width:"24px",height:"24px"}):null})]})]}),Object($.jsx)("div",{className:"close-icon-wrapper",onClick:function(){f(),d.goBack()},"aria-hidden":"true",children:Object($.jsx)(Je,{width:"30px",height:"30px"})})]})}))),vt=function(){return Object($.jsxs)("div",{className:"main-container",children:[Object($.jsxs)(Q.a,{children:[Object($.jsx)(le,{gameStatus:"play"}),Object($.jsxs)("div",{className:"page-wrapper",children:[Object($.jsx)(X.a,{path:"/react-game",component:ae,exact:!0}),Object($.jsx)(X.a,{path:"/start",component:Be}),Object($.jsx)(X.a,{path:"/game",component:it}),Object($.jsx)(X.a,{path:"/statistic",component:ot}),Object($.jsx)(X.a,{path:"/about",component:lt}),Object($.jsx)(X.a,{path:"/menu",component:Ot})]})]}),Object($.jsx)(ne,{})]})},yt=(a(154),function(){return Object($.jsx)("div",{className:"app-wrapper",children:Object($.jsx)(vt,{})})}),kt=Object(d.c)(Z,localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):void 0);kt.subscribe((function(){localStorage["redux-store"]=JSON.stringify(kt.getState())})),j.a.render(Object($.jsx)(u.a.StrictMode,{children:Object($.jsx)(m.a,{store:kt,children:Object($.jsx)(yt,{})})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.10d14e65.chunk.js.map