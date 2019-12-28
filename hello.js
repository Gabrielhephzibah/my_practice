var navbar = Vue.component('navbar', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">{{ appName }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input class="form-control mr-sm-2 search-box" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div class="cart-icon ml-3">
          <a href="#">
            <span>
            <span class = "mr-2">
              Cart (0)
            </span>
            <img src="images/shopping-cart.svg" class="mg-fluid icon-image" alt="Shopping Cart">
          </a>
        </div>
      </div>
    </nav>
  `,
  data() {
    return {
      appName: 'Enyata Shop',
    }
  }
});

var sidebar =  Vue.component('sidebar', {
  template: `
    <aside class="app-sidebar">
      <ul class="categories-list">
        <li class="category" v-for="category in categories" :key="category">
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </li>
      </ul>
    </aside>
  `,
  data() {
    return {
      categories: [
        "shoes",
        "bags",
        "phones",
        "laptops",
        "house",
        "humans"
      ]
    }
  }
});

var singleProduct = Vue.component('single-product', {
  template: `
    <div class="product-card">
      <img class="product-image img-fluid" :src="product.imageUrl" :alt="product.name"/>

      <div class="product-details">
        <h3 class="product-name">{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <p class="quantity"> Quantity:{{ product.quantity }}</p>
      </div>
      <div class="text-center">
        <button class="btn btn-product" @click="updateQuantity">
        Add to cart
        </button>
      </div>
    </div>
  `,
  props: ["product"],
  data() {
    return{

        }
      },
      methods:{
        updateQuantity(){
          if(this)
        }
      }

})

new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    productList: [
      {
        id: 001,
        name: "Iphone XS",
        price: 300000,
        quantity: 10,
        category: "phones",
        imageUrl: "images/iphone xs.jpeg"
      },
      {
        id: 002,
        name: "Iphone X",
        price: 30000,
        quantity: 20,
        category: "phone",
        imageUrl: "images/iphone-x.jpg"
      },
      {
        id: 003,
        name: "Samsung S10+ ",
        price: 300000,
        quantity: 10,
        category: "phone",
        imageUrl: "images/samsung.jpeg"
      },
      {
        id: 004,
        name: "Tecno Spark 3",
        price: 20,
        quantity: 15,
        category: "phone",
        imageUrl: "images/tecno.jpeg"
      },
      {
        id: 005,
        name: "Samsung S10 ",
        price: 300000,
        quantity: 10,
        category: "phone",
        imageUrl: "images/samsung.jpeg"
      },
    ] 
  },
  components: {
    navbar: navbar,
    sidebar: sidebar,
    singleProduct: singleProduct
  }
})

4