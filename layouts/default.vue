<template>
<div>
    <Header />
    <Nuxt />
    <Icons />
    <ScrollTop />
    <Footer />
</div>
</template>

<style lang="scss">
:root {
    --FontSize: 18px;
    --swiper-theme-color: #832A57;
    --swiper-navigation-color: var(--swiper-theme-color);
}

@media (min-width: 1500px) {
    :root {
        --FontSize: 18px;
    }
}
@media (max-width: 996px) {
    :root {
        --FontSize: 18px;
    }
}
@media (max-width: 500px) {
    :root {
        --FontSize: 12px;
    }
}

</style>
