<template>
        <div class="container mobpad">
            <BreadCrumb :bread='bread'/>
            <div class="product__btitle">Resent news</div>
            <div class="row">
                <div class="col-lg-3 col md-6 col-sm-6" v-for='(blog,index) of blogs' :key='index'>
                    <div class="product__box">
                        <router-link class="product__img" :to="`/blog/${blog.slug}`"
                            :style="'background-image:url('+require(`@/assets/img/news1.jpg`)+')'"></router-link>
                        <div class="product__sale">{{new Date(blog.createdAt).getDate() +'-'+ (new Date(blog.createdAt).getMonth()+1)+'-'+new Date(blog.createdAt).getFullYear()}}</div>
                        <router-link class="product__title" :to="`/blog/${blog.slug}`">{{blog.name}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import BreadCrumb from '../components/BreadCrumb.vue'
export default {
    components:{
        BreadCrumb
    },
    data(){
        return{
            blogs:[],
            bread:[
                { title: 'News',link:'/news'}
            ],
        }
    },
    created(){
        axios.get('http://localhost:3000/blog/all')
        .then(response =>{
            this.blogs = response.data
        })
    }
    
}
</script>

<style>

</style>