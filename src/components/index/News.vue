<template>
    <div>
        <div class="oh pos"><svg width="710" height="510" viewBox="0 0 710 510" class="news__figure" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2658 220.57L229.999 78.3287L375 252.5L590.43 131.785L768.472 262.066" stroke="#D84727" stroke-opacity="0.61"/><path d="M24.4604 267.016L223.818 129.883L366.784 308.098L587.742 179.762L780.245 325.006" stroke="#D84727" stroke-opacity="0.4"/><path d="M31.9611 315.439L214.436 173.837L361 361L581.408 230.327L791.266 396.157" stroke="#D84727" stroke-opacity="0.2"/></svg>
      <div class="container"> 
        <section class="news">
          <div class="btitle">Resent News </div>
          <div class="news__row"> 
            <div class="news__info">
              <div class="news__stitle">Where To Travel</div>
              <p>
                <router-link class="news__title" :to="'blog/'+blog.slug">{{blog.name}}</router-link>
              </p>
              <router-link class="news__link" :to="'blog/'+blog.slug">Discover</router-link>
            </div>
            <div class="news__img" :style="'background-image:url()'"></div>
          </div>
        </section>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props:['blog']
}
</script>

<style>

</style>