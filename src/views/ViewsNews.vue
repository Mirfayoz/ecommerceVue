<template>
    <div class="container">
        <h1>{{blog.name}}</h1>
        <h2 v-html="blog.text"></h2>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            slug:this.$route.params.slug,
            blog:{}
        }
    },
    created(){
        axios.get('http://localhost:3000/blog/view/'+this.slug).then(response=>{
            this.blog = response.data
        })
    }
}
</script>

<style>

</style>