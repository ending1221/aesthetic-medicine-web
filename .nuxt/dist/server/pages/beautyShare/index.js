exports.ids = [11,1,9];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/beautyShare/Beauty-Item.vue?vue&type=template&id=eb3b3930&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"beauty-items"},[_vm._ssrNode((_vm._ssrList((_vm.beautyData),function(item){return ("<div class=\"beauty-item\"><div class=\"beauty-img\"><img"+(_vm._ssrAttr("src",item.imgsrc))+"></div> <div class=\"beauty-text\"><h3 class=\"beauty-title\">"+_vm._ssrEscape(_vm._s(item.id)+" "+_vm._s(item.title))+"</h3> <div class=\"beauty-detail\">"+(_vm._s(item.detail))+"</div> <button class=\"beauty-btn btn\">\n                more\n            </button></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/beautyShare/Beauty-Item.vue?vue&type=template&id=eb3b3930&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/beautyShare/Beauty-Item.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Beauty_Itemvue_type_script_lang_js_ = ({
  props: {
    beautyData: {
      type: Array,
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
      this.$router.push(`/beautyShare/${id}`);
      this.scrollToPageTop();
    },

    openNewTab(id) {
      const routerData = this.$router.resolve({
        path: `/beautyShare/${id}`
      });
      window.open(routerData.href, '_blank');
    }

  }
});
// CONCATENATED MODULE: ./components/beautyShare/Beauty-Item.vue?vue&type=script&lang=js&
 /* harmony default export */ var beautyShare_Beauty_Itemvue_type_script_lang_js_ = (Beauty_Itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/beautyShare/Beauty-Item.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  beautyShare_Beauty_Itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "583b19fa"
  
)

/* harmony default export */ var Beauty_Item = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7c1cf676", content, true, context)
};

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 199:
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
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:\"Noto Sans TC\",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}.beauty-items{display:flex;flex-wrap:wrap;margin-top:5%}.beauty-items .beauty-item{flex:48%;margin-right:2%;margin-bottom:2%;background:#fff;box-shadow:0 0 15px rgba(51,51,51,.3);display:flex;min-height:330px;max-height:450px;max-width:48%}.beauty-items .beauty-item:nth-child(2n){margin-right:0}@media screen and (max-width:992px){.beauty-items .beauty-item{flex:48%;margin-right:0}}@media(max-width:767px){.beauty-items .beauty-item{flex:100%;flex-direction:column;max-width:100%;margin-bottom:5%;margin-right:0}}.beauty-items .beauty-item .beauty-img{flex:50%;overflow:hidden}@media(max-width:767px){.beauty-items .beauty-item .beauty-img{flex:60%}}.beauty-items .beauty-item .beauty-img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}@media(max-width:767px){.beauty-items .beauty-item .beauty-img img{height:auto}}.beauty-items .beauty-item .beauty-text{flex:50%;color:#665c60;padding:7.5%;position:relative;letter-spacing:1px}@media(max-width:767px){.beauty-items .beauty-item .beauty-text{flex:40%;padding:7.5% 10% 25%}}.beauty-items .beauty-item .beauty-text .beauty-title{font-size:22px;font-weight:500;margin-bottom:5%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:26px;max-height:52px}@media(max-width:767px){.beauty-items .beauty-item .beauty-text .beauty-title{font-size:16px;line-height:16px;max-height:32px}}.beauty-items .beauty-item .beauty-text .beauty-detail{font-size:14px;font-weight:300;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:8;-webkit-box-orient:vertical;line-height:18px;max-height:180px}@media screen and (max-width:1279px){.beauty-items .beauty-item .beauty-text .beauty-detail{-webkit-line-clamp:8;line-height:18px;max-height:144px}}@media(max-width:767px){.beauty-items .beauty-item .beauty-text .beauty-detail{-webkit-line-clamp:4;font-size:12px;line-height:14px;max-height:56px}}.beauty-items .beauty-item .beauty-text .beauty-btn{background-color:#832a57;color:#fff;font-size:15px;line-height:100%;border:none;padding:7.5px 25px 9px;position:absolute;border-radius:2px;right:18%;bottom:10%;cursor:pointer}.beauty-items .beauty-item .beauty-text .beauty-btn:hover{background-color:#602d4b}@media(max-width:767px){.beauty-items .beauty-item .beauty-text .beauty-btn{right:10%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/beautyShare/index.vue?vue&type=template&id=6eb835d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-container"},[_c('el-breadcrumb',[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("首頁")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("美麗分享")])],1),_vm._ssrNode(" "),_c('Title',{attrs:{"title":"美麗分享","titleEn":"BEAUTY SHARE"}}),_vm._ssrNode(" "),_c('BeautyItem',{attrs:{"beautyData":_vm.beautyData}}),_vm._ssrNode(" "),_c('el-pagination',{attrs:{"pager-count":11,"layout":"prev, pager, next","total":_vm.pageCount * 10,"hide-on-single-page":true,"current-page":Number(_vm.pageId)},on:{"current-change":_vm.currentChange}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/beautyShare/index.vue?vue&type=template&id=6eb835d3&

// EXTERNAL MODULE: ./components/Title.vue + 4 modules
var Title = __webpack_require__(74);

// EXTERNAL MODULE: ./components/beautyShare/Beauty-Item.vue + 4 modules
var Beauty_Item = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/beautyShare/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var beautySharevue_type_script_lang_js_ = ({
  components: {
    Title: Title["default"],
    BeautyItem: Beauty_Item["default"]
  },
  watchQuery: ['page'],

  asyncData(context) {
    // axious api get data
    // test data 
    // context.query.page 可抓到 ?page=1 的參數
    const currentPage = context.query.page || 1;
    const parPage = 10;
    let testData = [];
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    arr.forEach(item => {
      testData.push({
        id: item,
        imgsrc: __webpack_require__(31),
        title: '終於擁有夢寐以求的迷人電眼與挺翹鼻',
        detail: '<p>想要擁有一對迷人的電眼、深邃的雙眼皮線條及立體翹鼻一直是我的夢想。</p><p>單眼皮加上塌鼻的我，平時需要花大量的時間於化妝上，時常修飾過頭一不小心妝就太濃，常被誤以為是「某大姐」。</p> <p>不化妝、素顏的時候，讓我沒有安全感，整個人看起來也沒有精神；就算頂著全妝拍照後還是非常依賴美肌軟體(⋟﹏⋞) 於是在姊妹們的鼓勵下，我終於鼓起勇氣踏出一步。</p>'
      });
    });

    const getItems = () => {
      let current = currentPage * parPage;
      let start = current - parPage;
      return testData.slice(start, current);
    };

    const getPageCount = () => {
      return Math.ceil(testData.length / parPage);
    };

    return {
      pageId: currentPage,
      beautyData: getItems(),
      pageCount: getPageCount()
    };
  },

  data() {
    return {
      pagination: {
        totalPages: 0,
        currentPage: 1,
        perPage: 9
      }
    };
  },

  methods: {
    currentChange(pageId) {
      this.$router.push({
        path: '/beautyShare',
        query: {
          page: pageId
        }
      });
      console.log(pageId);
    },

    scrollToPageTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/beautyShare/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_beautySharevue_type_script_lang_js_ = (beautySharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/beautyShare/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_beautySharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "51eab390"
  
)

/* harmony default export */ var beautyShare = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Title: __webpack_require__(74).default,BeautyItem: __webpack_require__(110).default})


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
//# sourceMappingURL=index.js.map