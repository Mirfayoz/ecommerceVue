<template>
    <div>
    <header class="header">
      <div class="container">
        <router-link class="header__logo" to="/"><img src="@/assets/img/logo.png" alt="">
        </router-link>
        <ul class="header__menu"> 
          {{categories}}
          <!-- <li v-for="(m,index) of categories" :key="index">
            <router-link class="link" :to="m.slug">{{m.name}}</router-link> -->
          <!-- </li> -->
            <router-link class="link" to="/blog">News</router-link>
          
        </ul>
        <div class="mobile__menu"> 
          <button class="btn__menu">
            <img src="require(@/assets/img/home.svg)" alt=""></button>
    <div class="searchbox" :class="{'active':toggleSearch}">
      <input type="text">
      <!-- <button @click="toggleSearch = !toggleSearch">Search</button> -->
    </div> 
    <button class="header__search" @click="toggleSearch = !toggleSearch">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5236 17.7717L26.2906 25.5388C26.4921 25.7475 26.4892 26.0792 26.2841 26.2843C26.0789 26.4895 25.7473 26.4923 25.5386 26.2908L17.7716 18.5236C13.6848 22.2028 7.41061 21.956 3.62549 17.967C-0.159627 13.978 -0.0773117 7.69964 3.81109 3.81129C7.69948 -0.0770562 13.978 -0.15937 17.967 3.6257C21.956 7.41078 22.2029 13.6849 18.5236 17.7717ZM1.98363 11.0244C1.98363 16.0174 6.0313 20.065 11.0244 20.065C16.015 20.0592 20.0592 16.015 20.0651 11.0244C20.0651 6.03141 16.0174 1.98379 11.0244 1.98379C6.0313 1.98379 1.98363 6.03141 1.98363 11.0244Z" fill="black"/></svg>
        </button>
            <a class="header__profile" @click="toggleProfile = !toggleProfile">
            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0937 5.42956C15.695 8.04536 14.4099 10.7298 11.9953 11.9018C15.6303 13.0124 18.115 16.365 18.1201 20.1659V21.6059C18.1201 21.871 17.9052 22.0859 17.6401 22.0859C17.375 22.0859 17.1601 21.871 17.1601 21.6059V20.1659C17.1601 15.9243 13.7216 12.4859 9.48009 12.4859C5.23854 12.4859 1.80009 15.9243 1.80009 20.1659V21.6059C1.80009 21.871 1.58518 22.0859 1.32009 22.0859C1.05499 22.0859 0.840088 21.871 0.840088 21.6059V20.1659C0.845159 16.365 3.32989 13.0124 6.96489 11.9018C4.55028 10.7298 3.2652 8.04536 3.86649 5.42956C4.46778 2.81376 6.79607 0.959961 9.48009 0.959961C12.1641 0.959961 14.4924 2.81376 15.0937 5.42956ZM9.48009 1.92586C6.82912 1.92586 4.68009 4.07489 4.68009 6.72586C4.68305 9.37559 6.83035 11.5229 9.48009 11.5259C12.1311 11.5259 14.2801 9.37682 14.2801 6.72586C14.2801 4.07489 12.1311 1.92586 9.48009 1.92586Z" fill="black"/></svg>Log In</a>
          <button class="header__cart" @click="modalToggle()">
             <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2909 3.84C16.8035 3.83988 17.2257 4.24237 17.2501 4.7543L18.1188 22.9943C18.1313 23.2566 18.0358 23.5125 17.8546 23.7025C17.6734 23.8925 17.4223 24 17.1597 24H1.79974C1.53726 23.9999 1.28627 23.8923 1.10518 23.7023C0.924084 23.5123 0.828683 23.2565 0.841177 22.9943L1.70979 4.7543C1.73418 4.24241 2.15635 3.83993 2.66883 3.84H5.68639C5.68639 1.71923 7.40562 0 9.52639 0C11.6472 0 13.3664 1.71923 13.3664 3.84H16.2909ZM12.4064 3.84C12.4046 2.25017 11.1162 0.961799 9.52639 0.96C7.93655 0.961799 6.64819 2.25017 6.64639 3.84H12.4064ZM2.66883 4.8H5.6864V8.16C5.6864 8.4251 5.90131 8.64 6.1664 8.64C6.4315 8.64 6.6464 8.4251 6.6464 8.16V4.8H12.4064V8.16C12.4064 8.4251 12.6213 8.64 12.8864 8.64C13.1515 8.64 13.3664 8.4251 13.3664 8.16V4.8H16.2799L16.9744 19.2H1.98311L2.66883 4.8ZM1.93693 20.16L1.79974 23.04H17.1597L17.0206 20.16H1.93693Z" fill="#333333"/></svg></button>
          <button class="btn__menu"><span> </span></button>
        </div>
      </div>
    </header>
    <Modal :toggleModal="toggleModal" @closeModal="changeModal($event)"/>
    <div class="profile" :class="{'active': toggleProfile}">
      <div class="profile__title">
        {{(regForm)?'Login':'Registration'}}
      </div>
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Parol">
      <button v-if="regForm">Login</button>
      <button v-else>Create account</button>
      <button @click="regForm = !regForm" class="profile__link">Redistration</button>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import Modal from './Modal.vue'
export default {
  components: { Modal },
  data(){
    return{
      regForm: true,
      toggleProfile: false,
      toggleModal: false,
      toggleSearch: false,
      categories:[],
    }
  },
  methods:{
    changeModal(val){
      this.toggleModal = val
    },
    modalToggle(){
      document.querySelector('body').classList.toggle('no-scroll')
      this.toggleModal = !this.toggleModal
    }
  },
  created(){
    axios.get('http://localhost:3000/category/allcats')
    .then(response=> this.categories = response.data)
  }
}
</script>

<style>

</style>