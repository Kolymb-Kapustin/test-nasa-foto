(function(t){function s(s){for(var a,c,r=s[0],i=s[1],l=s[2],p=0,f=[];p<r.length;p++)c=r[p],n[c]&&f.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(s);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,r=1;r<e.length;r++){var i=e[r];0!==n[i]&&(a=!1)}a&&(o.splice(s--,1),t=c(c.s=e[0]))}return t}var a={},n={app:0},o=[];function c(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)c.d(e,a,function(s){return t[s]}.bind(null,a));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/test-nasa-foto/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var d=i;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var s=o(t);return e(s)}function o(t){var s=a[t];if(!(s+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("SearchField"),e("List")],1)},o=[],c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"component-list"}},t._l(t.nasaResponseUpgrade,function(s,a){return e("div",{key:a+"_container",staticClass:"list-item"},[e("div",{staticClass:"row center-h"},[t.nasaResponseUpgrade.length>0?[e("div",{staticClass:"cols s_24 m_6"},[e("div",{staticClass:"block-preview"},[e("div",{staticClass:"block-preview__image"},[e("img",{attrs:{src:s.img,alt:s.title}})]),e("div",{staticClass:"block-preview__date"},[t._v(t._s(s.data_formated))])])]),e("div",{staticClass:"cols s_24 m_16"},[e("div",{staticClass:"block-info"},[e("h2",{staticClass:"block-info__title"},[t._v(t._s(s.title))]),s.title!==s.description?e("div",{staticClass:"block-info__description",domProps:{innerHTML:t._s(s.description)}}):t._e()])])]:t._e()],2)])}))},r=[],i=(e("7f7f"),e("55dd"),e("ac6a"),e("be94")),l=e("2f62"),d={name:"List",computed:Object(i["a"])({},Object(l["b"])(["nasaResponse","sortType"])),data:function(){return{nasaResponseUpgrade:[]}},watch:{nasaResponse:function(){this.reloadResponse()},sortType:function(){this.reloadResponse()}},methods:{reloadResponse:function(){var t=this;this.nasaResponseUpgrade=[],this.nasaResponse.forEach(function(s){t.nasaResponseUpgrade.push(s)}),""!==this.sortType?this.nasaResponseUpgrade=this.nasaResponseUpgrade.sort(function(s,e){return s[t.sortType.name]<e[t.sortType.name]?"down"===t.sortType.type?-1:1:s[t.sortType.name]>e[t.sortType.name]?"down"===t.sortType.type?1:-1:0}):this.nasaResponseUpgrade=this.nasaResponse}}},p=d,f=(e("59bd"),e("2877")),u=Object(f["a"])(p,c,r,!1,null,null,null);u.options.__file="List.vue";var h=u.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"component-search-field"}},[e("div",{staticClass:"row center-h center-v"},[t._m(0),e("div",{staticClass:"cols s_24 m_14 l_12"},[e("div",{staticClass:"search-container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"search-container__input",attrs:{placeholder:"Enter the text",type:"text"},domProps:{value:t.searchString},on:{input:function(s){s.target.composing||(t.searchString=s.target.value)}}}),this.status.length>0?e("div",{staticClass:"search-container__status"},[t._v(t._s(this.status))]):t._e()])]),e("div",{staticClass:"cols s__10 s___6 m_4 l_4 s__offset-14 s___offset-18 m_offset-0"},[e("div",{staticClass:"sort-container"},[e("div",{staticClass:"sort-button",on:{click:function(s){t.sortToggle(s)}}},[e("span",{staticClass:"sort-button__text"},[t._v("sort")]),e("svg",{staticClass:"sort-button__icon",class:t.toggleSort?"active":"",staticStyle:{"enable-background":"new 0 0 284.929 284.929"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"284.929px",height:"284.929px",viewBox:"0 0 284.929 284.929","xml:space":"preserve"}},[e("g",[e("path",{attrs:{d:"M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"}})]),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g"),e("g")])]),e("div",{staticClass:"sort-choose",class:t.toggleSort?"active":""},[e("div",{staticClass:"sort-choose__button"},[e("span",{staticClass:"sort-choose__text",class:""===t.sortType?"active":"",on:{click:function(s){t.changeSort("")}}},[t._v("default")])]),e("div",{staticClass:"sort-choose__button"},[e("span",{staticClass:"sort-choose__text",class:"title"===t.sortType.name?"active":""},[t._v("\n\t\t\t\t\t\t\tTitle\n\t\t\t\t\t\t")]),e("span",{staticClass:"sort-choose__text",class:"title"===t.sortType.name&&"up"===t.sortType.type?"active":"",on:{click:function(s){t.changeSort({name:"title",type:"up"})}}},[t._v("⬆")]),e("span",{staticClass:"sort-choose__text",class:"title"===t.sortType.name&&"down"===t.sortType.type?"active":"",on:{click:function(s){t.changeSort({name:"title",type:"down"})}}},[t._v("⬇")])]),e("div",{staticClass:"sort-choose__button"},[e("span",{staticClass:"sort-choose__text",class:"date_created"===t.sortType.name?"active":""},[t._v("Date")]),e("span",{staticClass:"sort-choose__text",class:"date_created"===t.sortType.name&&"up"===t.sortType.type?"active":"",on:{click:function(s){t.changeSort({name:"date_created",type:"up"})}}},[t._v("⬆")]),e("span",{staticClass:"sort-choose__text",class:"date_created"===t.sortType.name&&"down"===t.sortType.type?"active":"",on:{click:function(s){t.changeSort({name:"date_created",type:"down"})}}},[t._v("⬇")])])])])]),t.preloader?e("img",{attrs:{src:"https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/4/24/16/anigif_enhanced-buzz-10731-1335299292-14.gif?downsize=700:*&output-format=auto&output-quality=auto",alt:"loading"}}):t._e()])])},j=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cols s_24 m__4 l_4"},[a("img",{staticClass:"logo",attrs:{src:e("cf05"),alt:""}})])}],g={name:"SearchField",data:function(){return{status:"",searchString:"",preloader:!1,toggleSort:!1,lazyLoad:null}},computed:Object(i["a"])({},Object(l["b"])(["nasaResponse","sortType"])),watch:{nasaResponse:function(){this.nasaResponse.length<1&&(this.searchString.length>0?this.status="Nothing found":this.status="")},searchString:function(){var t=this;clearTimeout(this.lazyLoad),this.searchString.length>0?this.lazyLoad=setTimeout(function(){t.preloader=!0,fetch("https://images-api.nasa.gov/search?q=".concat(t.searchString.toLowerCase())).then(function(s){if(t.preloader=!1,200===s.status)return t.status="",s.json();t.status="An error occurred"}).then(function(s){var e=s.collection;e.items.length>0?t.$store.dispatch("setNasaResponse",e):t.$store.dispatch("setNasaResponse",{})})},1500):(this.$store.dispatch("setNasaResponse",{}),this.preloader=!1)}},methods:{changeSort:function(t){this.$store.dispatch("setSortType",t)},sortToggle:function(){this.toggleSort?this.toggleSort=!1:this.toggleSort=!0}},mounted:function(){var t=this;document.addEventListener("click",function(s){s.target.classList.contains("sort-button")||s.target.parentElement.classList.contains("sort-button")||(t.toggleSort=!1)})}},m=g,_=(e("ae2d"),Object(f["a"])(m,b,j,!1,null,null,null));_.options.__file="SearchField.vue";var v=_.exports,y={name:"App",components:{List:h,SearchField:v}},w=y,k=Object(f["a"])(w,n,o,!1,null,null,null);k.options.__file="App.vue";var T=k.exports;e("a481"),e("456d");a["a"].use(l["a"]);var C=new l["a"].Store({state:{nasaResponse:{},sortType:""},getters:{nasaResponse:function(t){var s=[];return Object.keys(t.nasaResponse).length>0&&t.nasaResponse.items.length>0&&t.nasaResponse.items.forEach(function(t){t.links&&"image"===t.links[0].render&&t.data[0].description.replace(/^\s+|\s+$/g,"")!==t.data[0].title.replace(/^\s+|\s+$/g,"")&&s.push({img:t.links[0].href,description:t.data[0].description.replace(/^\s+|\s+$/g,""),date_created:t.data[0].date_created,data_formated:window.moment(t.data[0].date_created).format("MMMM Do YYYY, h:mm:ss a"),title:t.data[0].title.replace(/^\s+|\s+$/g,"")})}),s},sortType:function(t){return t.sortType}},mutations:{setNasaResponse:function(t,s){t.nasaResponse=s},setSortType:function(t,s){t.sortType=s}},actions:{setNasaResponse:function(t,s){void 0!==s?t.commit("setNasaResponse",s):t.commit("setNasaResponse",{})},setSortType:function(t,s){t.commit("setSortType",s)}}}),S=e("c1df"),x=e.n(S),z=e("b0f2"),R=e.n(z);window.moment=x.a,R.a,a["a"].config.productionTip=!1,new a["a"]({store:C,render:function(t){return t(T)}}).$mount("#app")},"59bd":function(t,s,e){"use strict";var a=e("a090"),n=e.n(a);n.a},a090:function(t,s,e){},ae2d:function(t,s,e){"use strict";var a=e("dc9e"),n=e.n(a);n.a},b0f2:function(t,s,e){},cf05:function(t,s,e){t.exports=e.p+"img/logo.e6c655c0.png"},dc9e:function(t,s,e){}});
//# sourceMappingURL=app.bb3a445a.js.map