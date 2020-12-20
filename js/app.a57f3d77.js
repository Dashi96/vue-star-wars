(function(e){function t(t){for(var r,a,c=t[0],o=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-4738308a":"a5e7418d","chunk-48dc1094":"ce5747a2"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-4738308a":1,"chunk-48dc1094":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4738308a":"4ac0815c","chunk-48dc1094":"566b441a"}[e]+".css",s=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}s[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-star-wars/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"23b6":function(e,t,n){},5528:function(e,t,n){"use strict";n("c047")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("2f62"),s=(n("d3b7"),n("96cf"),n("1da1")),i={actions:{fetchPlanets:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/planets/");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updatePlanets",r);case 7:case"end":return t.stop()}}),t)})))()}},mutations:{updatePlanets:function(e,t){e.planets=t}},state:{planets:{}},getters:{planetsCount:function(e){return e.planets.count}}},c={actions:{fetchFilms:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/films/");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updateFilms",r);case 7:case"end":return t.stop()}}),t)})))()}},mutations:{updateFilms:function(e,t){e.films=t}},state:{films:{}},getters:{filmsCount:function(e){return e.films.count}}},o={actions:{fetchPeople:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/people/");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updatePeople",r);case 7:case"end":return t.stop()}}),t)})))()}},mutations:{updatePeople:function(e,t){e.people=t}},state:{people:{}},getters:{peopleCount:function(e){return e.people.count}}},u={actions:{fetchSpecies:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/species/");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updateSpecies",r);case 7:case"end":return t.stop()}}),t)})))()}},mutations:{updateSpecies:function(e,t){e.species=t}},state:{species:{}},getters:{speciesCount:function(e){return e.species.count}}},l={actions:{fetchVehicles:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/vehicles/");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updateVehicles",r);case 7:case"end":return t.stop()}}),t)})))()}},mutations:{updateVehicles:function(e,t){e.vehicles=t}},state:{vehicles:{}},getters:{vehiclesCount:function(e){return e.vehicles.count}}},p={actions:{fetchStarships:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/starships/");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updateStarships",r);case 7:case"end":return t.stop()}}),t)})))()}},mutations:{updateStarships:function(e,t){e.starships=t}},state:{starships:{}},getters:{starshipsCount:function(e){return e.starships.count}}};r["a"].use(a["a"]);var f=new a["a"].Store({modules:{planets:i,films:c,people:o,species:u,vehicles:l,starships:p}}),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view",{attrs:{planets:e.planets,loading:e.loading,baseURL:e.baseURL,pageNumber:e.pageNumber,totalPages:e.totalPages}})],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"black"},[n("div",{staticClass:"nav-wrapper"},[n("router-link",{staticClass:"brand-logo yellow-text",attrs:{to:"/"}},[e._v("The Star Wars App")]),n("ul",{staticClass:"right hide-on-med-and-down"},[n("router-link",{attrs:{tag:"li",to:"/",exact:"","active-class":"active"}},[n("a",{staticClass:"yellow-text",attrs:{href:"#"}},[e._v("Planets")])]),n("router-link",{attrs:{tag:"li",to:"/statistics","active-class":"active"}},[n("a",{staticClass:"yellow-text",attrs:{href:"#"}},[e._v("Statistics")])])],1)],1)])},v=[],g={},b=g,w=(n("7e59"),n("2877")),x=Object(w["a"])(b,m,v,!1,null,"e2eb628c",null),y=x.exports,_={name:"app",data:function(){return{planets:{},loading:!0,baseURL:"https://swapi.dev/api/planets/?page=",pageNumber:1,totalPages:1}},mounted:function(){var e=this;fetch(this.baseURL+this.pageNumber).then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.planets=t.results,e.loading=!1,e.totalPages=t.count}),1e3)}))},components:{Navbar:y}},k=_,P=(n("5c0b"),Object(w["a"])(k,h,d,!1,null,null,null)),j=P.exports,C=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bgimage"},[n("div",{staticClass:"container pt-5"},[e.loading?n("Loader"):e.planets.length?n("div",[n("table",{staticClass:"highlight centered"},[n("thead",[n("tr",[n("th",[e._v("#")]),n("th",[e._v("Planet Name")]),n("th",[e._v("Action")])])]),e._l(e.planets,(function(t,r){return n("tbody",{key:t.index},[n("tr",[n("td",[e._v(e._s(r+1+10*e.pageNumber-10))]),n("td",[e._v(e._s(t.name))]),n("td",[n("router-link",{staticClass:"waves-effect black yellow-text btn",attrs:{to:"/planet/"+(r+1+10*e.pageNumber-10)}},[e._v("Open ")])],1)])])}))],2),n("div",{staticClass:"pagination center"},[n("button",{staticClass:"waves-effect yellow black-text btn",attrs:{disabled:1==e.pageNumber},on:{click:e.prevPage}},[e._v(" Previous ")]),n("span",{staticClass:"pageNumber"},[e._v(e._s(e.pageNumber))]),n("button",{staticClass:"waves-effect yellow black-text btn",attrs:{disabled:e.pageNumber>=e.totalPages/10},on:{click:e.nextPage}},[e._v(" Next ")])])]):e._e()],1)])},O=[],R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")])}],E=(n("5528"),{}),L=Object(w["a"])(E,R,S,!1,null,"52fa0dee",null),T=L.exports,A={props:["planets","loading","baseURL","pageNumber","totalPages"],methods:{nextPage:function(){var e=this;this.pageNumber=this.pageNumber+1,fetch(this.baseURL+this.pageNumber).then((function(e){return e.json()})).then((function(t){e.planets=t.results}))},prevPage:function(){var e=this;this.pageNumber=this.pageNumber-1,fetch(this.baseURL+this.pageNumber).then((function(e){return e.json()})).then((function(t){e.planets=t.results}))}},components:{Loader:T}},U=A,$=(n("fe3d"),Object(w["a"])(U,N,O,!1,null,"3fb2a24c",null)),F=$.exports;r["a"].use(C["a"]);var M=new C["a"]({mode:"history",base:"/vue-star-wars/",routes:[{path:"/",name:"Planets",component:F},{path:"/statistics",name:"Statistics",component:function(){return n.e("chunk-4738308a").then(n.bind(null,"fcd1"))}},{path:"/planet/:id",name:"Planet",props:{id:""},component:function(){return n.e("chunk-48dc1094").then(n.bind(null,"7a7f"))}}]});n("6885");r["a"].config.productionTip=!1,new r["a"]({store:f,router:M,render:function(e){return e(j)}}).$mount("#app")},"583b":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"7e59":function(e,t,n){"use strict";n("23b6")},"9c0c":function(e,t,n){},c047:function(e,t,n){},fe3d:function(e,t,n){"use strict";n("583b")}});
//# sourceMappingURL=app.a57f3d77.js.map