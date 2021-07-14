exports.ids = [14,9];
exports.modules = {

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/maxBeauty/doctorsColumn/_id.vue?vue&type=template&id=663556de&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-container"},[_c('el-breadcrumb',[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("首頁")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("關於美仕媞")]),_vm._v(" "),_c('el-breadcrumb-item',{attrs:{"to":{ path: '/maxBeauty/news/page' }}},[_vm._v("醫師專欄")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("標題")])],1),_vm._ssrNode(" <div class=\"article-container\"><h1>"+_vm._ssrEscape(_vm._s(_vm.id)+"【張東美醫師】想瘦哪就瘦哪")+"</h1> <p><img src=\"https://www.max-beauty.com.tw/wp-content/uploads/2018/03/shutterstock_149111510_OK.jpg\"></p><p class=\"ql-align-justify\">維持曼妙身材，是女人一生課題。愛美是女人的天性，肥胖是女人的天敵。減肥(瘦身)是採用人為手段故意降低體重，特別是減少體內的脂肪。每個人減肥的原因各自不同。除了積極抗制飲食和運動減肥外，市面上還有各種幫助減肥的方式，包括侵入性的手術抽脂和非侵入性的各種物理性化學性溶脂方式。</p><h2 class=\"ql-align-justify\">打造完美S曲線</h2><p class=\"ql-align-justify\">速塑S美人療程是利用藥物特性，將藥物注射進皮下脂肪層，直接破壞脂肪細胞，並使之乳糜化(變得像液體一樣)，於是更容易被體內巨噬細胞帶走吸收，再藉由淋巴管輸送至肝臟，分解為二氧化碳雨水，再排出體外。如此一來，便能達到消脂效果。無論是全身性的脂肪堆積與修飾身型，都是一種方便安全的治療選擇。這類藥物最初的用途是治療肝炎、脂肪肝，由於具備破壞脂肪細胞的效果，運用在醫美領域，確實可以達到局部消脂、雕塑身體線條的功效。</p></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/maxBeauty/doctorsColumn/_id.vue?vue&type=template&id=663556de&

// EXTERNAL MODULE: ./components/Title.vue + 4 modules
var Title = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/maxBeauty/doctorsColumn/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    Title: Title["default"]
  },

  asyncData(context) {
    // axious api get data
    // test data 
    const id = context.params.id;
    return {
      id
    };
  }

});
// CONCATENATED MODULE: ./pages/maxBeauty/doctorsColumn/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var doctorsColumn_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/maxBeauty/doctorsColumn/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  doctorsColumn_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "547d1110"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("19b81704", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=template&id=175512c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index-title"},[_vm._ssrNode("<h1 class=\"zh\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <h2 class=\"en\""+(_vm._ssrStyle(null,null, { display: (_vm.titleEn) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.titleEn))+"</h2>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Title.vue?vue&type=template&id=175512c9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Titlevue_type_script_lang_js_ = ({
  props: {
    title: String,
    titleEn: String
  }
});
// CONCATENATED MODULE: ./components/Title.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Titlevue_type_script_lang_js_ = (Titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Title.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7415903a"
  
)

/* harmony default export */ var Title = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:\"Noto Sans TC\",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.disabled{pointer-events:none;opacity:.7}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}.index-container .index-title,.page-container .index-title{text-align:center;margin-bottom:2.5%}@media screen and (max-width:992px){.index-container .index-title,.page-container .index-title{margin-bottom:5%}}.index-container .index-title .en,.index-container .index-title .zh,.page-container .index-title .en,.page-container .index-title .zh{display:inline-block;letter-spacing:1px;font-size:150%}.index-container .index-title .zh,.page-container .index-title .zh{font-weight:500;color:#665c60;margin-right:15px;line-height:80%}@media(max-width:767px){.index-container .index-title .zh,.page-container .index-title .zh{padding-right:10px;margin-right:10px}}.index-container .index-title .en,.page-container .index-title .en{font-weight:200;color:#832a57;border-left:1px solid #832a57;padding-left:15px;padding-bottom:2.5px;line-height:90%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_id.js.map