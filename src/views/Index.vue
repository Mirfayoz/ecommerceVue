<template>
  <div class="home">
    <Slider/>
    <Cat :category="category"/>
    <Products 
    title="Monthly Deal"
    :products="products"
    />
    <News :blog="blog"/>
    <Pro/>
    <Testimols :testimols="testimols"/>
    <Instagram/>
    <Payment/>
  </div>
</template>

<script>
import Slider from '../components/index/Slider.vue'
import Cat from '../components/index/Cat.vue'
import Products from '../components/index/Products.vue'
import News from '../components/index/News.vue'
import Pro from '../components/index/Pro.vue'
import Testimols from '../components/index/Testimols.vue'
import Instagram from '../components/index/Instagram.vue'
import Payment from '../components/index/Payment.vue'
import axios from 'axios'

export default {
  name: 'Index',
  components: {
    Slider,Cat,Products,News,Pro,Testimols,Instagram,Payment
  },
  data(){
    return{
      blog:[],
      testimols:[
        {
          text: 'Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.',
          user: 'Gita Savitri',
          job: 'Content Creator/Influencer',
          img: 'girl.jpg'
        },
        {
          text: 'Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.',
          user: 'Sarah Savitri',
          job: 'Content Creator/Influencer',
          img: 'girl.jpg'
        },
      ],
      category:[
        {
          title: 'Eyewear',
          link: 'eyewear',
          text: 'See the beauty of exotic world with the luxurious glasses',
          img: 'glass.png'
        },
        {
          title: 'Eyewear',
          link: 'watches',
          text: 'See the beauty of exotic world with the luxurious glasses',
          img: 'watch.png'
        },
      ],
      products:[
        {
          id: 1,
          img: 'assets/img/pro1.jpg',
          url: '/product/1',
          title: 'Singo Maple',
          sale: '20% Off',
          oldprice: 'Rp 1.500.000',
          newprice: 'Rp 1.264.000',
        },
        {
          id: 2,
          img: 'assets/img/pro1.jpg',
          url: '/product/2',
          title: 'Singo Maple',
          sale: '20% Off',
          oldprice: 'Rp 1.500.000',
          newprice: 'Rp 1.264.000',
        },
        {
          id: 3,
          img: 'assets/img/pro1.jpg',
          url: '/product/3',
          title: 'Singo Maple',
          sale: '20% Off',
          oldprice: 'Rp 1.500.000',
          newprice: 'Rp 1.264.000',
        }
      ]
    }
  },
  created(){
    axios.get('http://localhost:3000/blog/items').then(response=>{
      this.blog = response.data
    })
  }
}
</script>


