<template>
    <div class="modal" :class="{'active': toggleModal}">
        <button @click="closeModal()" class="modal__close">X</button>
        <div class="modal__box container">
            <div class="modal__product" v-for="(product,index) of products" :key="index">
                <div class="modal__left">
                    <div class="modal__img" :style="'background-image:url('+require(`@/assets/img/${product.img}`)"></div>
                    <div class="modal__info">
                        <div class="modal__product--title">{{product.title}}</div>
                        <div class="modal__product--oldprice" v-if="product.oldprice !== ''">{{product.oldprice}} so'm</div>
                        <div class="modal__product--newprice">{{product.newprice.toLocaleString('de-DE')}} so'm</div>
                        <div class="modal__product--custom" v-if="product.custom !== ''">{{product.custom}}</div>
                        <div class="modal__product--slogan" v-if="product.slogan !== ''">{{product.slogan}}</div>
                    </div>
                </div>
                <div class="modal__right">
                    <div class="modal__pack">
                        <div class="modal__pack--title">Select Packaging</div>
                        <select name="">
                            <option value="">Wooden Packaging (Rp 50.000)</option>
                        </select>
                    </div>
                    <div class="modal__btns">
                        <button class="product__count--minus" @click="(product.count<2)?false:product.count--"> </button>
                        <div class="product__count--value">{{product.count}}</div>
                        <button class="product__count--plus" @click="product.count++"></button>
                        <div class="modal__btns--summa">{{product.count*parseInt(product['newprice'])}} so'm</div>
                        <button class="product__trash" @click="remove(product.id)">
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.6972 2.29715H12.0601L11.7033 0.870009C11.5755 0.358703 11.1161 5.13325e-06 10.589 0H5.49104C4.964 5.13325e-06 4.50459 0.358703 4.37677 0.870009L4.02002 2.29715H0.382859C0.171412 2.29715 0 2.46857 0 2.68001C0 2.89146 0.171412 3.06287 0.382859 3.06287H1.56972L2.28069 17.2866C2.31157 17.8977 2.816 18.3772 3.42781 18.3772H12.6912C13.3032 18.3772 13.8077 17.8972 13.8382 17.2859L14.5493 3.06287H15.6972C15.9087 3.06287 16.0801 2.89146 16.0801 2.68001C16.0801 2.46857 15.9087 2.29715 15.6972 2.29715ZM6.12553 13.4001C6.12553 13.6115 5.95411 13.7829 5.74267 13.7829C5.53122 13.7829 5.35981 13.6115 5.35981 13.4001V7.27433C5.35981 7.06289 5.53122 6.89147 5.74267 6.89147C5.95411 6.89147 6.12553 7.06289 6.12553 7.27433V13.4001ZM8.03973 14.5486C8.25117 14.5486 8.42259 14.3772 8.42259 14.1658V6.5086C8.42259 6.29715 8.25117 6.12574 8.03973 6.12574C7.82828 6.12574 7.65687 6.29715 7.65687 6.5086V14.1658C7.65687 14.3772 7.82828 14.5486 8.03973 14.5486ZM10.7204 13.4001C10.7204 13.6115 10.549 13.7829 10.3376 13.7829C10.1261 13.7829 9.95471 13.6115 9.95471 13.4001V7.27433C9.95471 7.06289 10.1261 6.89147 10.3376 6.89147C10.549 6.89147 10.7204 7.06289 10.7204 7.27433V13.4001ZM5.11937 1.05584L4.80911 2.29715H11.2705L10.9602 1.05584C10.9178 0.885236 10.7645 0.765523 10.5887 0.765711H5.49082C5.31503 0.765523 5.16176 0.885236 5.11937 1.05584Z"
                                    fill="#D93F3F" /></svg></button>
                    </div>
                </div>
            </div>
            <div class="modal__footer">
                <div class="modal__promo">
                    <div class="modal__promo--title">Kode Promo</div>
                    <input type="text">
                    <div class="modal__promo--value">35% OFF</div>
                </div>
                <div class="modal__calc">
                    <div class="modal__calc--title">Subtotal</div>
                    <div class="modal__calc--prices">
                        <div class="old">Rp 3.312.000</div>
                        <div class="new">{{summa}}so'm</div>
                    </div>
                </div>
            </div>
            <button class="checkout">Checkout </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['toggleModal'],
        data(){
            return{
                products:[
                {
                id: 1,
                    img: 'watches.png',
                    url: '/product/1',
                    title: 'Way Kambas Mini Ebony',
                    sale: '20% Off',
                    oldprice: 1280000,
                    newprice: 1024000,
                    custom: '',
                    slogan: '',
                    count:1,
                },
                {
                id: 2,
                    img: 'watches.png',
                    url: '/product/1',
                    title: 'Way Kambas Mini Ebony',
                    sale: '20% Off',
                    oldprice: 1280000,
                    newprice: 1024000,
                    custom: '',
                    slogan: '',
                    count:1,
                },
                ]
            }
        },
        computed:{
            summa(){
                let s = 0
                this.products.forEach(e => {
                    s += e.count*e.newprice
                });
                return s
            }
        },
        methods:{
            remove(id){
                let productIndex = this.products.findIndex(product=>{
                    return product.id = id
                })
                this.products.splice(productIndex,1)
            },
            closeModal(){
                document.querySelector('body').classList.toggle('no-scroll')
                this.$emit('closeModal',false)
            }
        },
    }
</script>

<style>

</style>