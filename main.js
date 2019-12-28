
/*Vue.component('product-review', {
template:`
< input v-model="name" >
`,
data() {
	return{
		name:null
	}
}
})

var app = new Vue({
	el:'#app',
	data: {
	brand: 'ZeeBee',
	product:'socks',
	image:'picture4.png',
	link:'http.google.com',
	instock: true,
	inventory:8,
	onsale:false,
	details:["80% cotton","20% polyester", "Gender-neutral"],
	variants:[
		{
			variantId: 2234,
			variantColor:"green"
		},

		{
			variantId: 2235,
			variantColor: "blue"
		}
	],
	sizes:["20cm", "50cm", "80cm"],
	cart:0,
	},	
	methods:{
		addToCart: function(){
			this.cart += 1
		},
		removeCart: function(){
			this.cart -= 1
		}
	},
	computed:{
		title(){
			return this.brand + ' ' + this.product
		}
	}






	
})*/


let app = new Vue ({
	el:'#app',
	data: {
		greeting:'hello dear',
		count:'3',
		water:'4',
		email:'',
		fruits:[
		'mango',
		'orange', 
		'apple' ,
		'paw-paw'
		],
		cars:[
		{name:'toyota'},
		{year: '2019'}
		],
		addFruit:''


	},

	methods:{
		newFruit: function(){
			/*return*/ this.fruits.push (this.addFruit)
			

		}
	},
	/*computed:{
		add:function(){
		if (this.addFruit.length > 1){
			return this.addFruit +'' +'is delicious'
		}
		}

	},
*//*
	filters: {
  		capitalize: function (value) {
    	if (!value) return ''
    	value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
*/
	/*filters: {
		capitalize: function (FirstLetter) {
			return FirstLetter.toUpperCase()
			var uppercaseFirstLetter = string.charAt(0).toUpperCase()
		}
	}*/

})