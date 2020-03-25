(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),c=t.n(a),i=t(3),s=t(1),l=t(9),u=o.a.memo((function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("h1",null,"RoboFriends"),o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))})),d=o.a.memo((function(e){var n=e.robots.map((function(e,n){return o.a.createElement(u,{key:n,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,n)})),h=o.a.memo((function(e){return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{onChange:e.searchChange,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))})),f=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},m=t(10),b=t(11),E=t(12),g=t(14),p=function(e){Object(g.a)(t,e);var n=Object(E.a)(t);function t(e){var r;return Object(m.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(b.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(r.Component),v=t(13),w=o.a.memo((function(e){var n=Object(r.useState)(0),t=Object(v.a)(n,2),a=t[0],c=t[1];return o.a.createElement("button",{color:e.color,onClick:function(){c((function(e){return e+1}))}},"Count: ",a)})),O=o.a.memo((function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(w,{color:"red"}))})),R=(t(26),Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChangeHandler:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobotsHandler:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}(e)}}}))((function(e){var n=e.robots,t=e.searchField,a=e.isPending,c=e.onRequestRobotsHandler,i=e.onSearchChangeHandler;Object(r.useEffect)((function(){return c()}),[c]);var s=n.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement(O,null),o.a.createElement(h,{searchChange:function(e){return i(e)}}),o.a.createElement(f,null,o.a.createElement(p,null,o.a.createElement(d,{robots:s}))))}))),S=(t(27),t(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C={searchField:""},j={robots:[],isPending:!1,error:""},k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),_=Object(s.d)(k,Object(s.a)(l.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:_},o.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robotFriends","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.8dfae1ab.chunk.js.map