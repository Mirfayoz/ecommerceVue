<template>
    <div class="container">
            <BreadCrumb :bread="bread"/>
            <div class="product__btitle">{{slug}}</div>
            <Products :products="products"/> 
    </div>
</template>

<script>
import axios from 'axios'
import BreadCrumb from '../components/BreadCrumb.vue'
import Products from '../components/index/Products.vue'
export default {
    components:{
        BreadCrumb,Products
    },
    data(){
        return{
            slug: this.$route.params.slug,
            bread: [
                {title: this.$route.params.slug, link:'/category/watches'},
            ],
            products:[]
        }
    },
    watch:{
        $route(to){
            this.slug = to.params.slug,
            axios.get('http://localhost:3000/category/'+this.slug).then(response=> this.products = response.data)
            this.bread[0].title = to.params.slug
        }
    },
    created(){
        axios.get('http://localhost:3000/category/'+this.slug).then(response=> this.products = response.data)
    }
}
</script>

<style>

</style>