import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  HeaderSubMenu: () => import('../../components/Header-SubMenu.vue' /* webpackChunkName: "components/header-sub-menu" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Icons: () => import('../../components/Icons.vue' /* webpackChunkName: "components/icons" */).then(c => wrapFunctional(c.default || c)),
  NormalItem: () => import('../../components/Normal-Item.vue' /* webpackChunkName: "components/normal-item" */).then(c => wrapFunctional(c.default || c)),
  NormalSwiper: () => import('../../components/Normal-Swiper.vue' /* webpackChunkName: "components/normal-swiper" */).then(c => wrapFunctional(c.default || c)),
  ScrollTop: () => import('../../components/ScrollTop.vue' /* webpackChunkName: "components/scroll-top" */).then(c => wrapFunctional(c.default || c)),
  Title: () => import('../../components/Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  IndexBeautyShare: () => import('../../components/index/Beauty-Share.vue' /* webpackChunkName: "components/index-beauty-share" */).then(c => wrapFunctional(c.default || c)),
  IndexNews: () => import('../../components/index/News.vue' /* webpackChunkName: "components/index-news" */).then(c => wrapFunctional(c.default || c)),
  IndexServiceDetail: () => import('../../components/index/Service-Detail.vue' /* webpackChunkName: "components/index-service-detail" */).then(c => wrapFunctional(c.default || c)),
  IndexService: () => import('../../components/index/Service.vue' /* webpackChunkName: "components/index-service" */).then(c => wrapFunctional(c.default || c)),
  BeautyItem: () => import('../../components/beautyShare/Beauty-Item.vue' /* webpackChunkName: "components/beauty-item" */).then(c => wrapFunctional(c.default || c)),
  Team: () => import('../../components/team/Team.vue' /* webpackChunkName: "components/team" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
