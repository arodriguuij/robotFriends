(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),l=n(3),s=n(1),i=n(9),u=a.a.memo((function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("h1",null,"RoboFriends"),a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))})),d=a.a.memo((function(e){var t=e.robots.map((function(e,t){return a.a.createElement(u,{key:t,id:e.id,name:e.name,email:e.email})}));return a.a.createElement("div",null,t)})),h=a.a.memo((function(e){return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{onChange:e.searchChange,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))})),m=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},E=n(10),b=n(11),f=n(12),g=n(14),p=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(E.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),n}(r.Component),v=n(13),O=a.a.memo((function(e){var t=Object(r.useState)(0),n=Object(v.a)(t,2),o=n[0],c=n[1];return a.a.createElement("button",{color:e.color,onClick:function(){c((function(e){return e+1}))}},"Count: ",o)})),R=a.a.memo((function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"f2"},"RoboFriends"),a.a.createElement(O,{color:"red"}))})),S=(n(26),Object(l.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChangeHandler:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobotsHandler:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}(e)}}}))((function(e){var t=e.robots,n=e.searchField,o=e.isPending,c=e.onRequestRobotsHandler,l=e.onSearchChangeHandler;Object(r.useEffect)((function(){return c()}),[c]);var s=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return console.log("app"),o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(R,null),a.a.createElement(h,{searchChange:function(e){return l(e)}}),a.a.createElement(m,null,a.a.createElement(p,null,a.a.createElement(d,{robots:s}))))})));n(27),n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},C={robots:[],isPending:!1,error:""},j=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),w=Object(s.d)(j,Object(s.a)(i.a));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:w},a.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f00b4c5a.chunk.js.map