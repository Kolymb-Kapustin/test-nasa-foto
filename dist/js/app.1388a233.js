(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],n[r]&&d.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("SearchField"),s("List")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component-list"}},t._l(t.nasaResponseUpgrade,function(e,a){return s("div",{key:a+"_container",staticClass:"list-item"},[s("div",{staticClass:"row center-h"},[t.nasaResponseUpgrade.length>0?[s("div",{staticClass:"cols s_24 m_6"},[s("div",{staticClass:"block-preview"},[s("div",{staticClass:"block-preview__image"},[s("img",{attrs:{src:e.img,alt:e.title}})]),s("div",{staticClass:"block-preview__date"},[t._v(t._s(e.date_created))])])]),s("div",{staticClass:"cols s_24 m_16"},[s("div",{staticClass:"block-info"},[s("h2",{staticClass:"block-info__title"},[t._v(t._s(e.title))]),e.title!==e.description?s("div",{staticClass:"block-info__description",domProps:{innerHTML:t._s(e.description)}}):t._e()])])]:t._e()],2)])}))},i=[],c=(s("55dd"),s("ac6a"),s("be94")),l=s("2f62"),p={name:"List",computed:Object(c["a"])({},Object(l["b"])(["nasaResponse","sortType"])),data:function(){return{nasaResponseUpgrade:[]}},watch:{nasaResponse:function(){this.reloadResponse()},sortType:function(){this.reloadResponse()}},methods:{reloadResponse:function(){var t=this;this.nasaResponseUpgrade=[],this.nasaResponse.forEach(function(e){t.nasaResponseUpgrade.push(e)}),""!==this.sortType?this.nasaResponseUpgrade=this.nasaResponseUpgrade.sort(function(e,s){return e[t.sortType]<s[t.sortType]?1:e[t.sortType]>s[t.sortType]?-1:0}):this.nasaResponseUpgrade=this.nasaResponse}}},u=p,d=(s("59bd"),s("2877")),h=Object(d["a"])(u,r,i,!1,null,null,null);h.options.__file="List.vue";var f=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"component-search-field"}},[s("div",{staticClass:"row center-h center-v"},[t._m(0),s("div",{staticClass:"cols s_24 m_14 l_12"},[s("div",{staticClass:"search-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"search-container__input",attrs:{placeholder:"Enter the text",type:"text"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),this.status.length>0?s("div",{staticClass:"search-container__status"},[t._v(t._s(this.status))]):t._e()])]),s("div",{staticClass:"cols s__10 s___6 m_4 l_4 s__offset-14 s___offset-18 m_offset-0"},[s("div",{staticClass:"sort-container"},[s("div",{staticClass:"sort-button",on:{click:function(e){t.sortToggle(e)}}},[s("span",{staticClass:"sort-button__text"},[t._v("sort")]),s("svg",{staticClass:"sort-button__icon",class:t.toggleSort?"active":"",staticStyle:{"enable-background":"new 0 0 284.929 284.929"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"284.929px",height:"284.929px",viewBox:"0 0 284.929 284.929","xml:space":"preserve"}},[s("g",[s("path",{attrs:{d:"M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"}})]),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g")])]),s("div",{staticClass:"sort-choose",class:t.toggleSort?"active":""},[s("div",{staticClass:"sort-choose__button"},[s("span",{staticClass:"sort-choose__text",class:""===t.sortType?"active":"",on:{click:function(e){t.changeSort("")}}},[t._v("default")])]),s("div",{staticClass:"sort-choose__button"},[s("span",{staticClass:"sort-choose__text",class:"title"===t.sortType?"active":"",on:{click:function(e){t.changeSort("title")}}},[t._v("sort by title")])]),s("div",{staticClass:"sort-choose__button"},[s("span",{staticClass:"sort-choose__text",class:"date_created"===t.sortType?"active":"",on:{click:function(e){t.changeSort("date_created")}}},[t._v("sort by date")])])])])]),t.preloader?s("img",{attrs:{src:"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/4/24/16/anigif_enhanced-buzz-10731-1335299292-14.gif?downsize=700:*&output-format=auto&output-quality=auto",alt:"loading"}}):t._e()])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cols s_24 m__4 l_4"},[a("img",{staticClass:"logo",attrs:{src:s("cf05"),alt:""}})])}],v={name:"SearchField",data:function(){return{status:"",searchString:"",preloader:!1,toggleSort:!1,lazyLoad:null}},computed:Object(c["a"])({},Object(l["b"])(["nasaResponse","sortType"])),watch:{nasaResponse:function(){this.nasaResponse.length<1&&(this.searchString.length>0?this.status="Nothing found":this.status="")},searchString:function(){var t=this;clearTimeout(this.lazyLoad),this.searchString.length>0?this.lazyLoad=setTimeout(function(){t.preloader=!0,fetch("https://images-api.nasa.gov/search?q=".concat(t.searchString.toLowerCase())).then(function(e){if(t.preloader=!1,200===e.status)return t.status="",e.json();t.status="An error occurred"}).then(function(e){var s=e.collection;s.items.length>0?t.$store.dispatch("setNasaResponse",s):t.$store.dispatch("setNasaResponse",{})})},1500):(this.$store.dispatch("setNasaResponse",{}),this.preloader=!1)}},methods:{changeSort:function(t){this.$store.dispatch("setSortType",t)},sortToggle:function(){this.toggleSort?this.toggleSort=!1:this.toggleSort=!0}},mounted:function(){var t=this;document.addEventListener("click",function(e){e.target.classList.contains("sort-button")||e.target.parentElement.classList.contains("sort-button")||(t.toggleSort=!1)})}},m=v,b=(s("ae2d"),Object(d["a"])(m,g,_,!1,null,null,null));b.options.__file="SearchField.vue";var y=b.exports,S={name:"App",components:{List:f,SearchField:y}},w=S,C=Object(d["a"])(w,n,o,!1,null,null,null);C.options.__file="App.vue";var R=C.exports;s("a481"),s("456d");a["a"].use(l["a"]);var x=new l["a"].Store({state:{nasaResponse:{},sortType:""},getters:{nasaResponse:function(t){var e=[];return Object.keys(t.nasaResponse).length>0&&t.nasaResponse.items.length>0&&t.nasaResponse.items.forEach(function(t){t.links&&"image"===t.links[0].render&&t.data[0].description.replace(/^\s+|\s+$/g,"")!==t.data[0].title.replace(/^\s+|\s+$/g,"")&&e.push({img:t.links[0].href,description:t.data[0].description.replace(/^\s+|\s+$/g,""),date_created:t.data[0].date_created,title:t.data[0].title.replace(/^\s+|\s+$/g,"")})}),e},sortType:function(t){return t.sortType}},mutations:{setNasaResponse:function(t,e){t.nasaResponse=e},setSortType:function(t,e){t.sortType=e}},actions:{setNasaResponse:function(t,e){void 0!==e?t.commit("setNasaResponse",e):t.commit("setNasaResponse",{})},setSortType:function(t,e){t.commit("setSortType",e)}}}),T=s("b0f2"),k=s.n(T);k.a,a["a"].config.productionTip=!1,new a["a"]({store:x,render:function(t){return t(R)}}).$mount("#app")},"59bd":function(t,e,s){"use strict";var a=s("a090"),n=s.n(a);n.a},a090:function(t,e,s){},ae2d:function(t,e,s){"use strict";var a=s("dc9e"),n=s.n(a);n.a},b0f2:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.e6c655c0.png"},dc9e:function(t,e,s){}});
//# sourceMappingURL=app.1388a233.js.map