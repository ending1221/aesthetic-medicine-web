<template>
    <ul class="nav-mainMenu-item-subMenu">
        <li 
            class="nav-mainMenu-item-subMenu-item" 
            v-for="item in items" 
            :key="item.name">
            <NuxtLink 
                class="inside-a" 
                :to="item.path">
                {{item.name}}{{suffix}}
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['items', 'suffix']
}
</script>

<style lang="scss">

</style>