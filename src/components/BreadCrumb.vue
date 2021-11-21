<template>
        <ul class="breadcrumbs"> 
            <li><router-link to="/">Home</router-link></li>
            <li v-for="(menu,index) of bread" :key="index">
                <router-link :to="menu.link">{{menu.title}}</router-link>
            </li>
        </ul>
</template>

<script>
export default {
    props: ['bread']
}
</script>

<style>

</style>