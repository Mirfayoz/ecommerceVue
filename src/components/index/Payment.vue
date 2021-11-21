<template>
    <div>
        <div class="payment"> 
      <div class="container"> 
        <div class="payment__row">
          <div class="payment__item" v-for="(payment,index) of 10" :key="index">
            <img src="@/assets/img/part1.png" alt="" >
            </div>
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