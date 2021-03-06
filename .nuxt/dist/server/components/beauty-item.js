exports.ids = [1];
exports.modules = {

/***/ 190:
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

/***/ })

};;
//# sourceMappingURL=beauty-item.js.map