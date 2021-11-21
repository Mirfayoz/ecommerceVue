<template>
    <div>
        <div class="container"> 
      <div class="instagram"> 
        <div class="btitle">Instagram </div>
        <div class="ins__row"> 
          <a class="ins__img" href="#" :style="'background-image:url('+require('@/assets/img/instagram.jpg')+')'" v-for="(i,index) of 5" :key="index">
          </a>
          </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>