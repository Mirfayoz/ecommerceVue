<template>
    <div class="col-lg-4 col-md-12 col-xs-12">
        <div class="btitle">{{title}}</div>
        <div class="scrollbox">
            <div class="pro__box" v-for="(product,index) of products" :key="index">
                <router-link class="pro__img" :to="'/product/'+product.id" :style="`background-image:url(${product.img})`"></router-link>
                <div class="pro__info"> 
                    <router-link class="pro__title" :to="'/product/'+product.id">
                        {{product.title}}
                    </router-link>
                    <div class="pro__old">Rp {{product.oldprice}}</div>
                    <div class="pro__news">Rp {{product.newprice}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title','products']
    }
</script>

<style>

</style>