(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{440:function(t,e,n){"use strict";n.r(e);var o={props:{beautyData:{type:Array,required:!0}},methods:{scrollToPageTop:function(){window.scrollTo({top:0,behavior:"smooth"})},goToNewsContent:function(t){this.$router.push("/beautyShare/".concat(t)),this.scrollToPageTop()},openNewTab:function(t){var e=this.$router.resolve({path:"/beautyShare/".concat(t)});window.open(e.href,"_blank")}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"beauty-items"},t._l(t.beautyData,(function(e){return n("div",{key:e.id,staticClass:"beauty-item"},[n("div",{staticClass:"beauty-img"},[n("img",{attrs:{src:e.imgsrc}})]),t._v(" "),n("div",{staticClass:"beauty-text"},[n("h3",{staticClass:"beauty-title"},[t._v(t._s(e.id)+" "+t._s(e.title))]),t._v(" "),n("div",{staticClass:"beauty-detail",domProps:{innerHTML:t._s(e.detail)}}),t._v(" "),n("button",{staticClass:"beauty-btn btn",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&0!==n.button?null:t.goToNewsContent(e.id)},mouseup:function(n){return"button"in n&&1!==n.button?null:t.openNewTab(e.id)}}},[t._v("\n                more\n            ")])])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);