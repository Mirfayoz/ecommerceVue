<template>
  <div>
    <div class="container pos">
      <div class="row">
        <Box title="Maple Series" :products="products"/>
        <Box title="Ebony Series" :products="products"/>
        <Box title="Featured" :products="products"/>
      </div>
      <div class="more"><a class="pro__more" href="#">See More </a></div>
    </div>
  </div>
</template>

<script>
import Box from '../product/Box.vue'
  export default {
    components:{
      Box
    },
    data() {
      return {
        products: [
          {
            id: 1,
            img: require('@/assets/img/watches.png'),
            url: '/product/1',
            title: 'Singo Maple',
            sale: '20% Off',
            oldprice: 'Rp 1.500.000',
            newprice: 'Rp 1.264.000',
          },
          {
            id: 2,
            img: require('@/assets/img/watches.png'),
            url: '/product/2',
            title: 'Singo Maple',
            sale: '20% Off',
            oldprice: 'Rp 1.500.000',
            newprice: 'Rp 1.264.000',
          },
          {
            id: 3,
            img: require('@/assets/img/watches.png'),
            url: '/product/3',
            title: 'Singo Maple',
            sale: '20% Off',
            oldprice: 'Rp 1.500.000',
            newprice: 'Rp 1.264.000',
          }
        ]
      }
    }
  }
</script>

<style>

</style>