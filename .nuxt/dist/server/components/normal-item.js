exports.ids = [6];
exports.modules = {

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0cbb1138", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Normal-Item.vue?vue&type=template&id=7c5e3a7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"normal-items"},[_vm._ssrNode((_vm._ssrList((_vm.data),function(item){return ("<div class=\"item\"><div class=\"img\"><img"+(_vm._ssrAttr("src",item.imgsrc))+"></div> <div class=\"text\"><p class=\"time\">"+_vm._ssrEscape(_vm._s(item.time))+"</p> <h3 class=\"title\">"+_vm._ssrEscape(_vm._s(item.title))+"</h3> <p class=\"detail\">"+_vm._ssrEscape(_vm._s(item.detail))+"</p> <button class=\"btn\">\n                more\n            </button></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Normal-Item.vue?vue&type=template&id=7c5e3a7c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Normal-Item.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Normal_Itemvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  methods: {
    scrollToPageTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },

    goToNewsContent(id) {
      this.$router.push(`/maxBeauty/${this.pageName}/${id}`);
      this.scrollToPageTop();
    },

    openNewTab(id) {
      const routerData = this.$router.resolve({
        path: `/maxBeauty/${this.pageName}/${id}`
      });
      window.open(routerData.href, '_blank');
    }

  }
});
// CONCATENATED MODULE: ./components/Normal-Item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Normal_Itemvue_type_script_lang_js_ = (Normal_Itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Normal-Item.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Normal_Itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "af0c9b8a"
  
)

/* harmony default export */ var Normal_Item = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_Item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_Item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_Item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_Item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Normal_Item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:\"Noto Sans TC\",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}.normal-items{display:flex;flex-wrap:wrap;margin-top:5%}.normal-items .item{flex:30%;margin-right:2%;margin-bottom:2%;background:#fff;box-shadow:0 0 15px rgba(51,51,51,.3);display:flex;flex-direction:column;max-height:450px;max-width:48%}.normal-items .item:nth-child(3n+3){margin-right:0}@media(max-width:768px){.normal-items .item{flex:48%}.normal-items .item:nth-child(3n+3){margin-right:2%}.normal-items .item:nth-child(2n){margin-right:0}}@media(max-width:767px){.normal-items .item{flex:100%;margin-bottom:5%;margin-right:0;max-width:100%}.normal-items .item:nth-child(2n),.normal-items .item:nth-child(3n+3){margin-right:0}}.normal-items .item .img{flex:1;overflow:hidden;min-height:200px}.normal-items .item .img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.normal-items .item .text{flex:1;color:#665c60;padding:5% 7.5%;position:relative;letter-spacing:1px;min-height:220px}.normal-items .item .text .time{font-size:70%;margin-bottom:2.5%}.normal-items .item .text .title{font-size:20px;font-weight:500;line-height:100%;margin-bottom:5%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:20px;max-height:40px}@media(max-width:767px){.normal-items .item .text .title{font-size:16px;line-height:16px;max-height:32px}}.normal-items .item .text .detail{font-size:14px;font-weight:300;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:4;-webkit-box-orient:vertical;line-height:14px;max-height:56px}@media(max-width:767px){.normal-items .item .text .detail{font-size:12px;line-height:12px;max-height:48px}}.normal-items .item .text .btn{font-size:15px;line-height:100%;padding:7.5px 25px 9px;position:absolute;right:7.5%;bottom:10%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=normal-item.js.map