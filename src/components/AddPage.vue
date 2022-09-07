<template>
    <div>
        <Header></Header>
       <h1>Hello, Welcome on Add Restuant Page</h1>
        <form class="add">
            <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
            <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
            <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
            <button type="button" v-on:click="addRestaurant">Add new Restaurent</button>
        </form>
    </div>
</template>



<script>
import Header from './HeaderPage.vue'
import axios from 'axios';

    export default{
    name:"AddPage",
    components:{
        Header
    },
    data(){
        return{
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async addRestaurant(){
            console.log(this.restaurant)
            const result = await axios.post("http://localhost:3000/restsurent",{
                name:this.restaurant.name,
                address: this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status == 201){
                this.$router.push({name:'Home'}) 
            }
            console.warn("result",result)
        }
    },
    mounted()
    {
    let user = localStorage.getItem('user-info');
    if(!user){
        this.$router.push({name:'SignUp'})
    }
}
}
</script>


<style>
    .register input, .login input, .add input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }
    .register button, .login button, .add button{
        width: 320px;
        height: 40px;
        padding-left: 20px;
        border: 1px solid skyblue;
        background: skyblue;
        color: #fff;
        cursor: pointer;
    }
</style>