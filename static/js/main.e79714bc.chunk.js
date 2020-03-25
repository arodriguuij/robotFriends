(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(2),i=t.n(a),c=t(5),s=t(1),l=t(13),u=t(3),d=t(4),h=t(6),f=t(7),p=r.a.memo((function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))})),b=r.a.memo((function(e){var n=e.robots.map((function(e,n){return r.a.createElement(p,{key:n,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,n)})),m=r.a.memo((function(e){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:e.searchChange,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))})),g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},E=function(e){Object(f.a)(t,e);var n=Object(h.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(o.Component),v=t(14),w=r.a.memo((function(e){var n=Object(o.useState)(0),t=Object(v.a)(n,2),a=t[0],i=t[1];return r.a.createElement("button",{color:e.color,onClick:function(){i((function(e){return e+1}))}},"Count: ",a)})),O=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(w,{color:"red"}))})),R=(t(26),function(e){Object(f.a)(t,e);var n=Object(h.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobotsHandler()}},{key:"render",value:function(){var e=this;console.log("app");var n=this.props.robots.filter((function(n){return n.name.toLocaleLowerCase().includes(e.props.searchField.toLocaleLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(O,null),r.a.createElement(m,{searchChange:this.props.onSearchChange}),r.a.createElement(g,null,this.props.isPending?r.a.createElement("h1",null,"Loading"):r.a.createElement(E,null,r.a.createElement(b,{robots:n}))))}}]),t}(o.Component)),S=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChangeHandler:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobotsHandler:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}(e)}}}))(R),y=(t(27),t(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j={searchField:""},k={robots:[],isPending:!1,error:""},_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(l.a));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:T},r.a.createElement(S,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robotFriends","/service-worker.js");y?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(n,e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.e79714bc.chunk.js.map