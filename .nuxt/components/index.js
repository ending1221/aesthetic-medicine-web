import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/Footer.vue'
export { default as HeaderSubMenu } from '../../components/Header-SubMenu.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Icons } from '../../components/Icons.vue'
export { default as NormalItem } from '../../components/Normal-Item.vue'
export { default as NormalSwiper } from '../../components/Normal-Swiper.vue'
export { default as ScrollTop } from '../../components/ScrollTop.vue'
export { default as Title } from '../../components/Title.vue'
export { default as Loading } from '../../components/loading.vue'
export { default as IndexBeautyShare } from '../../components/index/Beauty-Share.vue'
export { default as IndexNews } from '../../components/index/News.vue'
export { default as IndexServiceDetail } from '../../components/index/Service-Detail.vue'
export { default as IndexService } from '../../components/index/Service.vue'
export { default as BeautyItem } from '../../components/beautyShare/Beauty-Item.vue'
export { default as Team } from '../../components/team/Team.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeaderSubMenu = import('../../components/Header-SubMenu.vue' /* webpackChunkName: "components/header-sub-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyIcons = import('../../components/Icons.vue' /* webpackChunkName: "components/icons" */).then(c => wrapFunctional(c.default || c))
export const LazyNormalItem = import('../../components/Normal-Item.vue' /* webpackChunkName: "components/normal-item" */).then(c => wrapFunctional(c.default || c))
export const LazyNormalSwiper = import('../../components/Normal-Swiper.vue' /* webpackChunkName: "components/normal-swiper" */).then(c => wrapFunctional(c.default || c))
export const LazyScrollTop = import('../../components/ScrollTop.vue' /* webpackChunkName: "components/scroll-top" */).then(c => wrapFunctional(c.default || c))
export const LazyTitle = import('../../components/Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexBeautyShare = import('../../components/index/Beauty-Share.vue' /* webpackChunkName: "components/index-beauty-share" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexNews = import('../../components/index/News.vue' /* webpackChunkName: "components/index-news" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexServiceDetail = import('../../components/index/Service-Detail.vue' /* webpackChunkName: "components/index-service-detail" */).then(c => wrapFunctional(c.default || c))
export const LazyIndexService = import('../../components/index/Service.vue' /* webpackChunkName: "components/index-service" */).then(c => wrapFunctional(c.default || c))
export const LazyBeautyItem = import('../../components/beautyShare/Beauty-Item.vue' /* webpackChunkName: "components/beauty-item" */).then(c => wrapFunctional(c.default || c))
export const LazyTeam = import('../../components/team/Team.vue' /* webpackChunkName: "components/team" */).then(c => wrapFunctional(c.default || c))
