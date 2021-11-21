<template>
    <div>
        <div class="container">
      <section class="cat">
        <div class="row"> 
          <div class="col-lg-6 col-md-6 col-sm-12" v-for="(cat,index) of category" :key="index"> 
            <div class="cat__box"> 
              <router-link class="cat__title" :to="`/category/${cat.link}`">
                {{cat.title}}
              </router-link>
              <div class="cat__text">
                {{cat.text}}
              </div>
                <router-link class="cat__link" :to="`/category/${cat.link}`">Discover Now
                </router-link>
                <img class="cat__img" :src="require(`@/assets/img/${cat.img}`)" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
</template>

<script>
export default {
  props: ['category']
}
</script>

<style>

</style>