(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},r={app:0},n=[];function i(t){return s.p+"js/"+({notfound:"notfound"}[t]||t)+"."+{notfound:"2d8c00ec"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=r[t]=[e,o]}));e.push(a[2]=o);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/2020/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},n=[],i={name:"App",data:function(){return{}}},s=i,c=(a("5c0b"),a("2877")),l=a("6544"),u=a.n(l),p=a("7496"),d=a("f6c4"),f=Object(c["a"])(s,r,n,!1,null,null,null),g=f.exports;u()(f,{VApp:p["a"],VMain:d["a"]});var h=a("9483");Object(h["a"])("".concat("/2020/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var m=a("8c4f"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[t.showStatisticsBtn?o("v-btn",{staticClass:"mt-3",attrs:{fixed:"",left:"",fab:"",small:""},on:{click:function(e){t.showStatisticsDialog=!0}}},[o("v-icon",[t._v("mdi-chart-bar")])],1):t._e(),o("v-dialog",{attrs:{persistent:"","max-width":"700"},model:{value:t.showStatisticsDialog,callback:function(e){t.showStatisticsDialog=e},expression:"showStatisticsDialog"}},[o("v-card",[o("v-btn",{staticStyle:{right:"0","z-index":"999"},attrs:{absolute:"",right:"",text:"",small:""},on:{click:function(e){t.showStatisticsDialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1),o("v-card-title",{staticClass:"dialog-title justify-center"},[t._v("Лелеки 2020 - конкурс з обліку гнізд білого лелеки в Україні ")]),o("v-card-text",[t._v("Статистика зібраних фотографій в період проведення конкурсу з 25.05.2020 по 21.06.2020 "),o("v-data-table",{attrs:{items:t.statistics,headers:t.headers,options:t.optionsStatistics,"hide-default-footer":"","disable-pagination":"","disable-filtering":"","fixed-header":"",height:"300"},scopedSlots:t._u([{key:"item.name",fn:function(e){var a=e.item;return[o("span",{domProps:{innerHTML:t._s("<a class='links' target='_blank' href='http://osm.org/user/"+a.user+"'>"+a.user+"</a>")}})]}}])}),o("p",[o("b",[t._v("Загальна кількість:")]),t._v(" "+t._s(t.totalCount))]),o("p",[t._v(" Cторінка на сайті OpenStreetMap Wiki - "),o("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Uk:%D0%9B%D0%B5%D0%BB%D0%B5%D0%BA%D0%B8_2020"}},[t._v("link")]),t._v(", на форумі OpenStreetMap - "),o("a",{attrs:{href:"https://forum.openstreetmap.org/viewtopic.php?pid=788808"}},[t._v("link")])]),o("p",[t._v(" Telegram-чат - "),o("a",{attrs:{href:"https://t.me/leleky2020"}},[t._v("https://t.me/leleky2020")])]),o("div",{staticStyle:{display:"flex","justify-content":"center"}},[o("a",{attrs:{href:"https://www.mapillary.com/",target:"_blank"}},[o("img",{attrs:{src:a("84ca"),alt:"Mapillary"}})]),o("a",{attrs:{href:"https://openstreetmap.org.ua/",target:"_blank"}},[o("img",{attrs:{src:a("b52c"),alt:"OpenStreetMap"}})]),t._v(" "),o("a",{attrs:{href:"https://scgis.org.ua/",target:"_blank"}},[o("img",{attrs:{src:a("67ff"),alt:"Conservation GIS"}})])])],1)],1)],1),o("div",{attrs:{id:"map"}}),o("v-overlay",{attrs:{value:t.layerLoader}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"75"}})],1)],1)},b=[],w=(a("99af"),a("4160"),a("caad"),a("c975"),a("fb6a"),a("ac1f"),a("2532"),a("5319"),a("159b"),a("96cf"),a("1da1")),y=a("bc3a"),k=a.n(y),_=a("e192"),S=a.n(_),C={name:"MainMap",metaInfo:{title:"Лелеки 2020"},data:function(){return{mly:{},storkMarkersData:{type:"FeatureCollection",features:[]},showStatisticsDialog:!1,showStatisticsBtn:!1,headers:[{text:"Учасник",value:"name",sortable:!1},{text:"Кількість гнізд",value:"count"}],optionsStatistics:{sortBy:["count"],sortDesc:["count"]},statistics:[],totalCount:0,layerLoader:!1}},mounted:function(){var t=this;this.$gtag.pageview({page_path:"/"}),S.a.accessToken="pk.eyJ1Ijoic3BhdGlhbGhhc3QiLCJhIjoiY2s5dGlhNGFlMWVlNDNlcWM5d2txc2s1MSJ9.FwBbVciSi33lzU2Gg545pw";var e=new S.a.Map({container:"map",style:"mapbox://styles/spatialhast/ckarttc4o9z3g1io18wt2k4y8",center:[31.198,48.642],zoom:6,hash:!0});e.addControl(new S.a.ScaleControl,"bottom-left"),e.addControl(new S.a.NavigationControl,"bottom-right"),e.addControl(new S.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showAccuracyCircle:!1}),"bottom-right"),e.on("load",(function(){e.getStyle().layers.forEach((function(t){t.id.indexOf("-label")>0&&e.setLayoutProperty(t.id,"text-field",["get","name_ru"])})),t.layerLoader=!0,t.getStorkMapData().then((function(){t.layerLoader=!1,e.loadImage("favicon.png",(function(a,o){if(a)throw a;e.addImage("stork-image",o),e.addSource("stork_point",{type:"geojson",data:t.storkMarkersData}),e.addLayer({id:"stork_point",type:"symbol",source:"stork_point",layout:{"icon-image":"stork-image","icon-size":1,"icon-allow-overlap":!0}}),t.showStatisticsDialog=!0,t.showStatisticsBtn=!0}));var a=new S.a.Popup({closeButton:!0,closeOnClick:!0});e.on("click","stork_point",(function(t){var o=t.features[0].geometry.coordinates.slice();while(Math.abs(t.lngLat.lng-o[0])>180)o[0]+=t.lngLat.lng>o[0]?360:-360;var r=t.features[0].properties,n='<b>Додав </b><a target="_blank" href="http://www.openstreetmap.org/user/'.concat(r.user,'">').concat(r.user,"</a>"),i='<a target="_blank" href="http://www.openstreetmap.org/edit?editor=id&node='.concat(r.id,'">Редагувати в iD</a>'),s="<b>Оновлено: </b>".concat(r.timestamp.replace("T"," ").replace("Z","")),c="";for(var l in r)if(!["id","user","uid","timestamp"].includes(l)){var u=r[l];if("mapillary"===l){var p="https://www.mapillary.com/map/im/".concat(u.slice(0,25));u.includes("mapillary.com")&&(p=u),u='<a target="_blank" href="'.concat(p,'">').concat(u.slice(0,25),"</a>")}"image"===l&&(u='<a target="_blank" href="'.concat(u,'">').concat(u.slice(0,25),"</a>"));var d="<tr><td><b>".concat(l,"</b></td><td>").concat(u,"</td></tr>");c+=d}var f="".concat(n,"<br>").concat(s,"<hr><table>").concat(c,"</table><hr>").concat(i);a.setLngLat(o).setHTML(f).addTo(e)})),e.on("mouseenter","stork_point",(function(t){e.getCanvas().style.cursor="pointer";var a=t.features[0].geometry.coordinates.slice();while(Math.abs(t.lngLat.lng-a[0])>180)a[0]+=t.lngLat.lng>a[0]?360:-360})),e.on("mouseleave","stork_point",(function(){e.getCanvas().style.cursor=""}))}))}))},methods:{getStorkMapData:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="http://overpass-api.de/api/interpreter?data=[out:json];"+encodeURIComponent('area["boundary"="administrative"]["name:uk"="Україна"]->.a;node(area.a)[birds_nest=stork](newer:"2020-01-01T00:00:00Z");out meta;'),e.next=3,k()({method:"get",url:a}).then((function(e){var a=e.data.elements,o={};for(var r in a){var n=a[r],i=n.id,s=n.uid,c=n.tags,l=n.user,u=n.timestamp;o[l]=(o[l]||0)+1,t.totalCount=(t.totalCount||0)+1;var p={id:i,uid:s,user:l,timestamp:u};for(var d in c)p[d]=c[d];t.storkMarkersData.features.push({type:"Feature",properties:p,geometry:{type:"Point",coordinates:[n.lon,n.lat]}})}for(var f in o){var g=o[f];t.statistics.push({user:f,count:g})}}),(function(t){throw console.log("error",t),t})).catch((function(t){throw console.log("cerror",t),t}));case 3:case"end":return e.stop()}}),e)})))()}}},x=C,M=a("8336"),D=a("b0af"),j=a("99d9"),O=a("a523"),L=a("8fea"),B=a("169a"),T=a("132d"),P=a("a797"),V=a("490a"),A=Object(c["a"])(x,v,b,!1,null,null,null),I=A.exports;u()(A,{VBtn:M["a"],VCard:D["a"],VCardText:j["a"],VCardTitle:j["b"],VContainer:O["a"],VDataTable:L["a"],VDialog:B["a"],VIcon:T["a"],VOverlay:P["a"],VProgressCircular:V["a"]}),o["a"].use(m["a"]);var E=[{path:"/",name:"map",component:I},{path:"*",name:"notfound",component:function(){return a.e("notfound").then(a.bind(null,"9703"))}}],G=new m["a"]({mode:"history",base:"/2020/",routes:E}),N=G,z=a("2f62");o["a"].use(z["a"]);var F=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=a("f309");o["a"].use(J["a"]);var U=new J["a"]({}),$=a("58ca"),H=a("a584");o["a"].use($["a"]),o["a"].use(H["a"],{config:{id:""}}),o["a"].config.productionTip=!1,new o["a"]({router:N,store:F,vuetify:U,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("7694"),r=a.n(o);r.a},"67ff":function(t,e,a){t.exports=a.p+"img/scgis_logo.020d7e85.png"},7694:function(t,e,a){},"84ca":function(t,e,a){t.exports=a.p+"img/mapillary_logo.7bb67099.png"},b52c:function(t,e,a){t.exports=a.p+"img/osm_logo.de294499.png"}});
//# sourceMappingURL=app.7146a57e.js.map