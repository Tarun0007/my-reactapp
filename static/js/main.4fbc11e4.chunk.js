(this["webpackJsonpmy-reactapp"]=this["webpackJsonpmy-reactapp"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),r=a.n(s),c=(a(14),a(15),a(1)),i=a.n(c),o=a(2),m=a(3),u=a(4),h=a(6),p=a(5),d=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0,userData:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,"https://api.github.com/users/supreetsingh247",e.next=4,fetch("https://api.github.com/users/supreetsingh247");case 4:a=e.sent,a.json().then((function(e){console.log(e),t.setState({userData:e})}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"userSection"},l.a.createElement("div",null,l.a.createElement("img",{width:"260",height:"260",src:this.state.userData.avatar_url,alt:"UserProfile"}),l.a.createElement("h1",{className:"userNameSection"},l.a.createElement("span",{className:"userName"},this.state.userData.name),l.a.createElement("span",{className:"userId"},this.state.userData.login))),l.a.createElement("div",{className:"userProfileDetails"},l.a.createElement("button",{className:"followButton"},"Follow"),l.a.createElement("p",{className:"userExp"},this.state.userData.bio),l.a.createElement("ul",{className:"contactDetails"},l.a.createElement("li",null,l.a.createElement("svg",{className:"userDetails-icon",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"})),l.a.createElement("span",{className:"userDetails-text"},this.state.userData.company)),l.a.createElement("li",null,l.a.createElement("svg",{className:"userDetails-icon",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"})),l.a.createElement("span",{className:"userDetails-text"},this.state.userData.location)),l.a.createElement("li",null,l.a.createElement("svg",{className:"userDetails-icon",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"})),l.a.createElement("span",{className:"userDetails-text"},l.a.createElement("a",{href:"mailto:supreetsingh.247@gmail.com"},"supreetsingh.247@gmail.com")))),l.a.createElement("p",{className:"user-report"},"Block or report user")))}}]),a}(n.Component),E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={loading:!0,reposList:[],filter:"name",open:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,"https://api.github.com/users/supreetsingh247/repos",e.next=4,fetch("https://api.github.com/users/supreetsingh247/repos");case 4:a=e.sent,a.json().then((function(e){console.log(e),t.setState({reposList:e.sort((function(e,t){return e.updated_at>t.updated_at}))})}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onButtonClick",value:function(e){this.setState({filter:e}),document.querySelectorAll("details")[0].removeAttribute("open")}},{key:"render",value:function(){var e=this,t=this.state.reposList.map((function(t){var a=t.updated_at;return l.a.createElement("li",{className:"repo-card",key:t.name,style:{display:t[e.state.filter]?"flex":"none"}},l.a.createElement("div",{className:"projectSection"},l.a.createElement("h3",{className:"repos-heading"},l.a.createElement("a",{href:t.html_url,target:"_blank"},t.name)),l.a.createElement("div",{className:"projectDetails"},t.description&&l.a.createElement("p",null,t.description),t.language&&l.a.createElement("span",null," ",l.a.createElement("i",{className:t.language})," ",t.language),t.stargazers_count>0&&l.a.createElement("span",null,l.a.createElement("a",{href:t.stargazers_url},l.a.createElement("svg",{"aria-label":"star",className:"stargazer-count",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"},l.a.createElement("path",{d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),t.stargazers_count)),t.forks_count>0&&l.a.createElement("span",null,l.a.createElement("a",{href:t.forks_url},l.a.createElement("svg",{"aria-label":"fork",className:"stargazer-count",viewBox:"0 0 10 16",version:"1.1",width:"10",height:"16",role:"img"},l.a.createElement("path",{d:"M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"})),t.forks_count)),t.license&&l.a.createElement("span",null,l.a.createElement("a",{href:t.license.url},l.a.createElement("svg",{className:"stargazer-count",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"})),t.license.name)),l.a.createElement("span",null," Updated on ",a))),l.a.createElement("div",{className:"projectRating"},l.a.createElement("button",{className:"rating-btn"},l.a.createElement("svg",{className:"octicon octicon-star mr-1",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"})),"Star"),l.a.createElement("div",{className:"rating-btn-border"})))}));return l.a.createElement("div",{className:"userRepo-section"},l.a.createElement("div",{className:"tabsSection"},l.a.createElement("ul",{className:"viewTabs"},l.a.createElement("li",null,"Overview"),l.a.createElement("li",{className:"active"},"Repositories ",l.a.createElement("span",{className:"viewTab-badges"},this.state.reposList.length)),l.a.createElement("li",null,"Projects ",l.a.createElement("span",{className:"viewTab-badges"},"0")),l.a.createElement("li",null,"Stars ",l.a.createElement("span",{className:"viewTab-badges"},"7")),l.a.createElement("li",null,"Followers ",l.a.createElement("span",{className:"viewTab-badges"},"6")),l.a.createElement("li",null,"Following ",l.a.createElement("span",{className:"viewTab-badges"},"2")))),l.a.createElement("div",{className:"viewFilter"},l.a.createElement("input",{className:"searchRepo",type:"text",placeholder:"Find a repository\u2026"}),l.a.createElement("details",{className:"filterView"},l.a.createElement("summary",{className:"btn","aria-haspopup":"menu",role:"button"},l.a.createElement("i",null,"Type:"),l.a.createElement("span",{"data-menu-button":""}," ","name"===this.state.filter&&l.a.createElement("span",null,"All")," ","name"!=this.state.filter&&l.a.createElement("span",null,this.state.filter)," "),l.a.createElement("span",{className:"dropdown-caret"})),l.a.createElement("div",{className:"details-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,"Select type"),l.a.createElement("li",{onClick:this.onButtonClick.bind(this,"name")},"name"===this.state.filter&&l.a.createElement("svg",{className:"selectMenu-icon-check",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"})),"All"),l.a.createElement("li",{onClick:this.onButtonClick.bind(this,"sources")},"sources"===this.state.filter&&l.a.createElement("svg",{className:"selectMenu-icon-check",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"})),"Sources"),l.a.createElement("li",{onClick:this.onButtonClick.bind(this,"fork")},"fork"===this.state.filter&&l.a.createElement("svg",{className:"selectMenu-icon-check",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"})),"Forks"),l.a.createElement("li",{onClick:this.onButtonClick.bind(this,"archived")},"archived"===this.state.filter&&l.a.createElement("svg",{className:"selectMenu-icon-check",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"})),"Archived"),l.a.createElement("li",{onClick:this.onButtonClick.bind(this,"mirrors")},"mirrors"===this.state.filter&&l.a.createElement("svg",{className:"selectMenu-icon-check",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"})),"Mirrors")))),l.a.createElement("details",{className:"filterLanguage"},l.a.createElement("summary",{className:"btn","aria-haspopup":"menu",role:"button"},l.a.createElement("i",null,"Language:"),l.a.createElement("span",{"data-menu-button":""}," All "),l.a.createElement("span",{className:"dropdown-caret"})),l.a.createElement("div",{className:"details-dropdown"},l.a.createElement("ul",null,l.a.createElement("li",null,"Select Language"),l.a.createElement("li",null,l.a.createElement("svg",{className:"selectMenu-icon-check",viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"},l.a.createElement("path",{d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"})),"All"))))),"name"!=this.state.filter&&l.a.createElement("p",{className:"searched-repos"}," ",l.a.createElement("b",null,this.state.filter)," repositories"),l.a.createElement("ul",{className:"listofRepos-section"},t))}}]),a}(n.Component);var v=function(){return l.a.createElement("div",{className:"gitRepo"},l.a.createElement("div",{className:"left-panel"},l.a.createElement(d,null)),l.a.createElement("div",{className:"right-panel"},l.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4fbc11e4.chunk.js.map