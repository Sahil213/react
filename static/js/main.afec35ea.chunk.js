(this.webpackJsonpreduxbasics=this.webpackJsonpreduxbasics||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=(a(32),a(4)),o=a(5),s=a(7),m=a(6),u=a(9),d=a(11),h=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(u.b,{to:"/create"},"New Project")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/signout"},"Log Out")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/",className:"btn btn-floating pink lighten-1"},"NN")))},p=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(u.b,{to:"/signup"},"Sign Up")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/login"},"Log In")))},E=function(){return l.a.createElement("nav",{className:"nav-wrapper grey darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement(h,null),l.a.createElement(p,null)))},v=a(13),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,[t.target.value]))},e.onSubmit=function(e){console.log("sahil"),e.preventDefault()},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.onSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign In"))))}}]),a}(n.Component),g=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Notifaction"))},b=function(e){var t=e.project;return l.a.createElement("div",{className:"card z-depth-0 project-summary"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("span",{className:"card-title"},t.title),l.a.createElement("p",null,"Posted By sahil desai"),l.a.createElement("p",{className:"grey-text"},"12th June 2020")))},N=function(e){var t=e.projects;return l.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return l.a.createElement(b,{project:e,key:e.id})})))},j=a(18),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.projects;return l.a.createElement("div",{className:"dashboard container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6"},l.a.createElement(N,{projects:e}),l.a.createElement("div",null,l.a.createElement("div",{className:"col s12 m5 offset-m1"},l.a.createElement(g,null))))))}}]),a}(n.Component),O=Object(j.b)((function(e){return{projects:e.project.projects}}))(y),C=function(e){var t=e.match.params.id;return l.a.createElement("div",{className:"container section project-details"},l.a.createElement("div",{className:"card z-depth-0"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Project Title :- ",t),l.a.createElement("p",null,"Sahil Desai")),l.a.createElement("div",{className:"card-action gret lighten-4 grey-text"},l.a.createElement("div",null,"Posted by sahil desai"),l.a.createElement("p",null,"30 sep 2020"))))},w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,[t.target.value]))},e.onSubmit=function(e){console.log("sahil"),e.preventDefault()},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.onSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"fName"},"First Name"),l.a.createElement("input",{type:"text",id:"fName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"lName"},"Last Name"),l.a.createElement("input",{type:"text",id:"lName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"))))}}]),a}(n.Component),x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.id,[t.target.value]))},e.onSubmit=function(e){console.log("sahil"),e.preventDefault()},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.onSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"content"},"Project Content"),l.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(d.a,{path:"/login",exact:!0,component:f}),l.a.createElement(d.a,{path:"/dashboard",exact:!0,component:O}),l.a.createElement(d.a,{path:"/projects/:id",exact:!0,component:C}),l.a.createElement(d.a,{path:"/signup",exact:!0,component:w}),l.a.createElement(d.a,{path:"/create",exact:!0,component:x}))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(k,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(14),F={},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;arguments.length>1&&arguments[1];return e},B={projects:[{id:1,title:"Java     Project",content:"Basics Of Java"},{id:2,title:"React    Project",content:"Basics Of React"},{id:3,title:"Angular  Project",content:"Basics Of Angular"}]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;arguments.length>1&&arguments[1];return e},J=Object(P.b)({auth:z,project:A}),D=Object(P.c)(J);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j.a,{store:D},l.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.afec35ea.chunk.js.map