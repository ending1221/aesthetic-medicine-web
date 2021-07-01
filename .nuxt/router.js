import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ad85c2f = () => interopDefault(import('../pages/beautyShare/index.vue' /* webpackChunkName: "pages/beautyShare/index" */))
const _ad383d96 = () => interopDefault(import('../pages/reservation.vue' /* webpackChunkName: "pages/reservation" */))
const _32f233a7 = () => interopDefault(import('../pages/maxBeauty/about.vue' /* webpackChunkName: "pages/maxBeauty/about" */))
const _d30e9272 = () => interopDefault(import('../pages/maxBeauty/doctorsColumn/index.vue' /* webpackChunkName: "pages/maxBeauty/doctorsColumn/index" */))
const _2f50e928 = () => interopDefault(import('../pages/maxBeauty/news/index.vue' /* webpackChunkName: "pages/maxBeauty/news/index" */))
const _04178363 = () => interopDefault(import('../pages/maxBeauty/price.vue' /* webpackChunkName: "pages/maxBeauty/price" */))
const _0ce9de76 = () => interopDefault(import('../pages/maxBeauty/team/index.vue' /* webpackChunkName: "pages/maxBeauty/team/index" */))
const _582c7fbf = () => interopDefault(import('../pages/service/beautyService/btx.vue' /* webpackChunkName: "pages/service/beautyService/btx" */))
const _ca460986 = () => interopDefault(import('../pages/service/beautyService/ellanse.vue' /* webpackChunkName: "pages/service/beautyService/ellanse" */))
const _a9d884c8 = () => interopDefault(import('../pages/service/beautyService/hyaluronan.vue' /* webpackChunkName: "pages/service/beautyService/hyaluronan" */))
const _037a7d11 = () => interopDefault(import('../pages/service/beautyService/sculptra.vue' /* webpackChunkName: "pages/service/beautyService/sculptra" */))
const _3d7ec281 = () => interopDefault(import('../pages/service/beautySlim/s-body.vue' /* webpackChunkName: "pages/service/beautySlim/s-body" */))
const _009d689e = () => interopDefault(import('../pages/service/beautySlim/venus-legacy.vue' /* webpackChunkName: "pages/service/beautySlim/venus-legacy" */))
const _8cc69df0 = () => interopDefault(import('../pages/service/preventiveMedicine/depiLight.vue' /* webpackChunkName: "pages/service/preventiveMedicine/depiLight" */))
const _2da4f346 = () => interopDefault(import('../pages/service/preventiveMedicine/doe.vue' /* webpackChunkName: "pages/service/preventiveMedicine/doe" */))
const _ff507ce6 = () => interopDefault(import('../pages/service/preventiveMedicine/fraxelLaser.vue' /* webpackChunkName: "pages/service/preventiveMedicine/fraxelLaser" */))
const _0d87cfc0 = () => interopDefault(import('../pages/service/preventiveMedicine/ilib.vue' /* webpackChunkName: "pages/service/preventiveMedicine/ilib" */))
const _383b98b1 = () => interopDefault(import('../pages/service/preventiveMedicine/ipl.vue' /* webpackChunkName: "pages/service/preventiveMedicine/ipl" */))
const _48d032b3 = () => interopDefault(import('../pages/service/preventiveMedicine/laserBeauty.vue' /* webpackChunkName: "pages/service/preventiveMedicine/laserBeauty" */))
const _fae0fc28 = () => interopDefault(import('../pages/service/preventiveMedicine/miraDry.vue' /* webpackChunkName: "pages/service/preventiveMedicine/miraDry" */))
const _35c4e792 = () => interopDefault(import('../pages/service/preventiveMedicine/thermage.vue' /* webpackChunkName: "pages/service/preventiveMedicine/thermage" */))
const _179640fe = () => interopDefault(import('../pages/service/preventiveMedicine/ultherapy.vue' /* webpackChunkName: "pages/service/preventiveMedicine/ultherapy" */))
const _78c37e26 = () => interopDefault(import('../pages/service/preventiveMedicine/ultracel-q.vue' /* webpackChunkName: "pages/service/preventiveMedicine/ultracel-q" */))
const _085847db = () => interopDefault(import('../pages/service/surgerySculpture/autologousFat.vue' /* webpackChunkName: "pages/service/surgerySculpture/autologousFat" */))
const _1b2903dd = () => interopDefault(import('../pages/service/surgerySculpture/breastEnlargement.vue' /* webpackChunkName: "pages/service/surgerySculpture/breastEnlargement" */))
const _33d3f312 = () => interopDefault(import('../pages/service/surgerySculpture/chinImplant.vue' /* webpackChunkName: "pages/service/surgerySculpture/chinImplant" */))
const _12320bcd = () => interopDefault(import('../pages/service/surgerySculpture/eyebag.vue' /* webpackChunkName: "pages/service/surgerySculpture/eyebag" */))
const _127765a1 = () => interopDefault(import('../pages/service/surgerySculpture/koreanDoubleEyelid.vue' /* webpackChunkName: "pages/service/surgerySculpture/koreanDoubleEyelid" */))
const _b9675d72 = () => interopDefault(import('../pages/service/surgerySculpture/pda.vue' /* webpackChunkName: "pages/service/surgerySculpture/pda" */))
const _1bb52681 = () => interopDefault(import('../pages/service/surgerySculpture/rhinoplasty.vue' /* webpackChunkName: "pages/service/surgerySculpture/rhinoplasty" */))
const _c38f4baa = () => interopDefault(import('../pages/service/surgerySculpture/ultrasoundLipolysis.vue' /* webpackChunkName: "pages/service/surgerySculpture/ultrasoundLipolysis" */))
const _332d9e44 = () => interopDefault(import('../pages/service/surgerySculpture/ultraZ.vue' /* webpackChunkName: "pages/service/surgerySculpture/ultraZ" */))
const _7883beef = () => interopDefault(import('../pages/maxBeauty/doctorsColumn/_id.vue' /* webpackChunkName: "pages/maxBeauty/doctorsColumn/_id" */))
const _4ce978d4 = () => interopDefault(import('../pages/maxBeauty/news/_id.vue' /* webpackChunkName: "pages/maxBeauty/news/_id" */))
const _0329065e = () => interopDefault(import('../pages/maxBeauty/team/_id.vue' /* webpackChunkName: "pages/maxBeauty/team/_id" */))
const _8844c352 = () => interopDefault(import('../pages/beautyShare/_id.vue' /* webpackChunkName: "pages/beautyShare/_id" */))
const _25adf80a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/aesthetic-medicine-web/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/beautyShare",
    component: _6ad85c2f,
    name: "beautyShare"
  }, {
    path: "/reservation",
    component: _ad383d96,
    name: "reservation"
  }, {
    path: "/maxBeauty/about",
    component: _32f233a7,
    name: "maxBeauty-about"
  }, {
    path: "/maxBeauty/doctorsColumn",
    component: _d30e9272,
    name: "maxBeauty-doctorsColumn"
  }, {
    path: "/maxBeauty/news",
    component: _2f50e928,
    name: "maxBeauty-news"
  }, {
    path: "/maxBeauty/price",
    component: _04178363,
    name: "maxBeauty-price"
  }, {
    path: "/maxBeauty/team",
    component: _0ce9de76,
    name: "maxBeauty-team"
  }, {
    path: "/service/beautyService/btx",
    component: _582c7fbf,
    name: "service-beautyService-btx"
  }, {
    path: "/service/beautyService/ellanse",
    component: _ca460986,
    name: "service-beautyService-ellanse"
  }, {
    path: "/service/beautyService/hyaluronan",
    component: _a9d884c8,
    name: "service-beautyService-hyaluronan"
  }, {
    path: "/service/beautyService/sculptra",
    component: _037a7d11,
    name: "service-beautyService-sculptra"
  }, {
    path: "/service/beautySlim/s-body",
    component: _3d7ec281,
    name: "service-beautySlim-s-body"
  }, {
    path: "/service/beautySlim/venus-legacy",
    component: _009d689e,
    name: "service-beautySlim-venus-legacy"
  }, {
    path: "/service/preventiveMedicine/depiLight",
    component: _8cc69df0,
    name: "service-preventiveMedicine-depiLight"
  }, {
    path: "/service/preventiveMedicine/doe",
    component: _2da4f346,
    name: "service-preventiveMedicine-doe"
  }, {
    path: "/service/preventiveMedicine/fraxelLaser",
    component: _ff507ce6,
    name: "service-preventiveMedicine-fraxelLaser"
  }, {
    path: "/service/preventiveMedicine/ilib",
    component: _0d87cfc0,
    name: "service-preventiveMedicine-ilib"
  }, {
    path: "/service/preventiveMedicine/ipl",
    component: _383b98b1,
    name: "service-preventiveMedicine-ipl"
  }, {
    path: "/service/preventiveMedicine/laserBeauty",
    component: _48d032b3,
    name: "service-preventiveMedicine-laserBeauty"
  }, {
    path: "/service/preventiveMedicine/miraDry",
    component: _fae0fc28,
    name: "service-preventiveMedicine-miraDry"
  }, {
    path: "/service/preventiveMedicine/thermage",
    component: _35c4e792,
    name: "service-preventiveMedicine-thermage"
  }, {
    path: "/service/preventiveMedicine/ultherapy",
    component: _179640fe,
    name: "service-preventiveMedicine-ultherapy"
  }, {
    path: "/service/preventiveMedicine/ultracel-q",
    component: _78c37e26,
    name: "service-preventiveMedicine-ultracel-q"
  }, {
    path: "/service/surgerySculpture/autologousFat",
    component: _085847db,
    name: "service-surgerySculpture-autologousFat"
  }, {
    path: "/service/surgerySculpture/breastEnlargement",
    component: _1b2903dd,
    name: "service-surgerySculpture-breastEnlargement"
  }, {
    path: "/service/surgerySculpture/chinImplant",
    component: _33d3f312,
    name: "service-surgerySculpture-chinImplant"
  }, {
    path: "/service/surgerySculpture/eyebag",
    component: _12320bcd,
    name: "service-surgerySculpture-eyebag"
  }, {
    path: "/service/surgerySculpture/koreanDoubleEyelid",
    component: _127765a1,
    name: "service-surgerySculpture-koreanDoubleEyelid"
  }, {
    path: "/service/surgerySculpture/pda",
    component: _b9675d72,
    name: "service-surgerySculpture-pda"
  }, {
    path: "/service/surgerySculpture/rhinoplasty",
    component: _1bb52681,
    name: "service-surgerySculpture-rhinoplasty"
  }, {
    path: "/service/surgerySculpture/ultrasoundLipolysis",
    component: _c38f4baa,
    name: "service-surgerySculpture-ultrasoundLipolysis"
  }, {
    path: "/service/surgerySculpture/ultraZ",
    component: _332d9e44,
    name: "service-surgerySculpture-ultraZ"
  }, {
    path: "/maxBeauty/doctorsColumn/:id",
    component: _7883beef,
    name: "maxBeauty-doctorsColumn-id"
  }, {
    path: "/maxBeauty/news/:id",
    component: _4ce978d4,
    name: "maxBeauty-news-id"
  }, {
    path: "/maxBeauty/team/:id",
    component: _0329065e,
    name: "maxBeauty-team-id"
  }, {
    path: "/beautyShare/:id",
    component: _8844c352,
    name: "beautyShare-id"
  }, {
    path: "/",
    component: _25adf80a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
