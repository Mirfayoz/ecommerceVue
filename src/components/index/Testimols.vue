<template>
    <div class="oh pos">
        <div class="container testbox"> 
          <splide :options="options">
            <splide-slide class="testimols" v-for="(test,index) of testimols" :key="index">
        <svg width="710" height="510" viewBox="0 0 710 510" class="testimols__figure" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2658 220.57L229.999 78.3287L375 252.5L590.43 131.785L768.472 262.066" stroke="#D84727" stroke-opacity="0.61"/><path d="M24.4604 267.016L223.818 129.883L366.784 308.098L587.742 179.762L780.245 325.006" stroke="#D84727" stroke-opacity="0.4"/><path d="M31.9611 315.439L214.436 173.837L361 361L581.408 230.327L791.266 396.157" stroke="#D84727" stroke-opacity="0.2"/></svg>
        <div class="testimols__img" :style="'background-image:url('+require(`@/assets/img/${test.img}`)"></div>
        <div class="testimols__info"> 
          <div class="btitle">Testimonials</div>
          <div class="testimols__text">{{test.text}}</div>
          <div class="testimols__who">{{test.user}}</div>
          <div class="testimols__lvl">{{test.job}}</div>
        </div>
        <div class="testimols__btns"> </div>
          </splide-slide>
      </splide>
    </div>
</div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  props: ['testimols'],
  
  components: { 
    Splide, SplideSlide 
    },
    data(){
      return{
        options:{
          arrow: false,
          type: 'loop',
          perPage: 1,
          perMove: 1,
          pagination: false,
          autoplay: true,
          interval: 4000
        },
      }
    }
}
</script>

<style>

</style>