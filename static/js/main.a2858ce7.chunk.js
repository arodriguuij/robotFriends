(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(7),s=n(5),l=n(13),u=n(1),d=n(2),h=n(3),f=n(4),p=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}},b=o.a.memo((function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("h1",null,"RoboFriends"),o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))})),m=o.a.memo((function(e){var t=e.robots.map((function(e,t){return o.a.createElement(b,{key:t,id:e.id,name:e.name,email:e.email})}));return o.a.createElement("div",null,t)})),v=o.a.memo((function(e){return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",onChange:e.searchChange,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))})),E=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},g=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),n}(r.Component),O=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={count:0},r}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"updateCount",value:function(){this.setState((function(e){return{count:e.count+1}}))}},{key:"render",value:function(){var e=this;return o.a.createElement("button",{id:"counter",color:this.props.color,onClick:function(){return e.updateCount()}},"Count: ",this.state.count)}}]),n}(r.Component),y=o.a.memo((function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(O,{color:"red"}))})),w=(n(25),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).filteredRobots=function(){return e.props.robots.filter((function(t){return t.name.toLocaleLowerCase().includes(e.props.searchField.toLocaleLowerCase())}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobotsHandler()}},{key:"render",value:function(){return o.a.createElement("div",{className:"tc"},o.a.createElement(y,null),o.a.createElement(v,{searchChange:this.props.onSearchChangeHandler}),o.a.createElement(E,null,this.props.isPending?o.a.createElement("h1",null,"Loading"):o.a.createElement(g,null,o.a.createElement(m,{robots:this.filteredRobots()}))))}}]),n}(r.Component)),R=(n(26),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement(w,this.props)}}]),n}(r.Component)),S=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChangeHandler:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobotsHandler:function(){return e(p())}}}))(R),j=(n(27),n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k={searchField:""},_={robots:[],isPending:!1,error:""},T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(s.d)(T,Object(s.a)(l.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:F},o.a.createElement(S,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robotFriends","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.a2858ce7.chunk.js.map