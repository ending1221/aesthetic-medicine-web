exports.ids = [21,9];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("05f31960", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
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
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:\"Noto Sans TC\",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}@media(max-width:767px){#reservation-page iframe{width:100vw;position:relative;left:-12%}}.el-date-picker__header-label.active,.el-date-picker__header-label:hover,.el-date-table td.available:hover,.el-month-table td .cell:hover,.el-picker-panel__icon-btn:hover,.el-year-table td .cell:hover,.el-year-table td.current:not(.disabled) .cell{color:#8e2e63}.el-date-table td.current:not(.disabled) span{color:#fff;background-color:#8e2e63}.el-date-table td.today span{color:#8e2e63}.form-star{color:#f33;display:inline-block;font-weight:200}.map{display:block;max-width:600px;margin:5% auto 0;width:100%}.reservation-text{text-align:center;margin-bottom:5%;font-weight:200}.reservation-form{margin:0 auto;max-width:600px;color:#333;font-weight:200}.reservation-form input{font-weight:\"Arial\"}.reservation-form .btn{margin-top:5%}@media(max-width:767px){.reservation-form .btn{width:100%}}.reservation-form .form-title{display:inline-block;margin-top:5%}.reservation-form .form-checkbox{flex:33.3333%;margin-bottom:1.5%}.reservation-form .form-checkbox input{margin-right:2%}@media(max-width:767px){.reservation-form .form-checkbox{flex:50%}}.reservation-form .form-checkboxs{margin-top:2.5%}.reservation-form .form-checkboxs,.reservation-form .form-items{display:flex;flex-wrap:wrap;width:100%}.reservation-form .form-item{flex:48%;margin-right:2%}.reservation-form .form-item:nth-child(2n){margin-right:0}@media(max-width:767px){.reservation-form .form-item{flex:100%;margin-right:0}}.reservation-form .form-item-title{font-weight:200;font-size:100%;margin:2% 0}.reservation-form .el-date-editor{width:100%;max-height:50px}.reservation-form .el-date-editor input{padding:.75rem 30px;height:100%;font-size:120%;border-radius:2px;color:#333}.reservation-form .form-item-input{color:#333;font-weight:200;font-size:90%;border:1px solid rgba(51,51,51,.2);padding:.75rem;width:100%;max-height:50px;box-sizing:border-box}@media(max-width:767px){.reservation-form .form-item-input{font-size:130%}}.reservation-form #advisory{width:100%;height:200px;resize:none;border:1px solid rgba(51,51,51,.2);margin-top:1.5%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reservation.vue?vue&type=template&id=0cbd6e0d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-container",attrs:{"id":"reservation-page"}},[_c('el-breadcrumb',[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("首頁")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("預約諮詢")])],1),_vm._ssrNode(" "),_c('Title',{attrs:{"title":"預約諮詢","titleEn":"CONTACT US"}}),_vm._ssrNode(" <p class=\"reservation-text\">歡迎預約美仕媞時尚醫美診所，本預約開放7日後至兩個月內的時段預約。</p> "),_vm._ssrNode("<form class=\"reservation-form\">","</form>",[_vm._ssrNode("<div class=\"form-items\">","</div>",[_vm._ssrNode("<label class=\"form-item\"><div class=\"form-item-title\">姓名\n                    <span class=\"form-star\">*</span></div> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"form-item-input\"></label> "),_vm._ssrNode("<div class=\"form-item\">","</div>",[_vm._ssrNode("<div class=\"form-item-title\">生日\n                    <span class=\"form-star\">*</span></div> "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"選擇日期"},model:{value:(_vm.birthday),callback:function ($$v) {_vm.birthday=$$v},expression:"birthday"}})],2),_vm._ssrNode(" <label class=\"form-item\"><div class=\"form-item-title\">聯絡電話\n                    <span class=\"form-star\">*</span></div> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.phone)))+" class=\"form-item-input\"></label> <label class=\"form-item\"><div class=\"form-item-title\">E-mail\n                    <span class=\"form-star\">*</span></div> <input type=\"mail\""+(_vm._ssrAttr("value",(_vm.mail)))+" class=\"form-item-input\"></label>")],2),_vm._ssrNode(" <p class=\"form-title\">諮詢項目 (可複選)\n            <span class=\"form-star\">*</span></p> <div class=\"form-checkboxs\"><label for=\"cbox1\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox1\" value=\"肌膚斑點\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"肌膚斑點")>-1:(_vm.checkedArr)))+"> <span>肌膚斑點</span></label> <label for=\"cbox2\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox2\" value=\"臉頰凹陷\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"臉頰凹陷")>-1:(_vm.checkedArr)))+"> <span>臉頰凹陷</span></label> <label for=\"cbox3\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox3\" value=\"無痛除毛\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"無痛除毛")>-1:(_vm.checkedArr)))+"> <span>無痛除毛</span></label> <label for=\"cbox4\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox4\" value=\"毛孔粗大\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"毛孔粗大")>-1:(_vm.checkedArr)))+"> <span>毛孔粗大</span></label> <label for=\"cbox5\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox5\" value=\"臉部拉提\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"臉部拉提")>-1:(_vm.checkedArr)))+"> <span>臉部拉提</span></label> <label for=\"cbox6\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox6\" value=\"煥白保濕\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"煥白保濕")>-1:(_vm.checkedArr)))+"> <span>煥白保濕</span></label> <label for=\"cbox7\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox7\" value=\"痘痘凹疤\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"痘痘凹疤")>-1:(_vm.checkedArr)))+"> <span>痘痘凹疤</span></label> <label for=\"cbox8\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox8\" value=\"輪廓線條\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"輪廓線條")>-1:(_vm.checkedArr)))+"> <span>輪廓線條</span></label> <label for=\"cbox9\" class=\"form-checkbox\"><input type=\"checkbox\" id=\"cbox9\" value=\"私密保養\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkedArr)?_vm._i(_vm.checkedArr,"私密保養")>-1:(_vm.checkedArr)))+"> <span>私密保養</span></label></div> <p class=\"form-title\">諮詢內容\n            <span class=\"form-star\">*</span></p> <textarea name=\"advisory\" id=\"advisory\"></textarea> <button class=\"btn\">送出</button>")],2),_vm._ssrNode(" <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.78059784499!2d121.5494527!3d25.061374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a6a0dfb1740c3c!2z576O5LuV5aqe5pmC5bCa6Yar576O6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1620288484663!5m2!1szh-TW!2stw\" width=\"600\" height=\"450\" allowfullscreen=\"allowfullscreen\" loading=\"lazy\" class=\"map\" style=\"border:0;\"></iframe>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reservation.vue?vue&type=template&id=0cbd6e0d&

// EXTERNAL MODULE: ./components/Title.vue + 4 modules
var Title = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/reservation.vue?vue&type=script&lang=js&
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

/* harmony default export */ var reservationvue_type_script_lang_js_ = ({
  components: {
    Title: Title["default"]
  },

  data() {
    return {
      name: null,
      birthday: null,
      phone: null,
      mail: null,
      checkedArr: []
    };
  }

});
// CONCATENATED MODULE: ./pages/reservation.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_reservationvue_type_script_lang_js_ = (reservationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/reservation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_reservationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "055f9556"
  
)

/* harmony default export */ var reservation = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(74).default})


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("19b81704", content, true, context)
};

/***/ }),

/***/ 74:
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
  
  var style0 = __webpack_require__(75)
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
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
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:\"Noto Sans TC\",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}.index-container .index-title,.page-container .index-title{text-align:center;margin-bottom:2.5%}@media screen and (max-width:992px){.index-container .index-title,.page-container .index-title{margin-bottom:5%}}.index-container .index-title .en,.index-container .index-title .zh,.page-container .index-title .en,.page-container .index-title .zh{display:inline-block;letter-spacing:1px;font-size:150%}.index-container .index-title .zh,.page-container .index-title .zh{font-weight:500;color:#665c60;margin-right:15px;line-height:80%}@media(max-width:767px){.index-container .index-title .zh,.page-container .index-title .zh{padding-right:10px;margin-right:10px}}.index-container .index-title .en,.page-container .index-title .en{font-weight:200;color:#832a57;border-left:1px solid #832a57;padding-left:15px;padding-bottom:2.5px;line-height:90%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=reservation.js.map