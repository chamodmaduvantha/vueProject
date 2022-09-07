<template>
    <div>
        <img class="logo" src="../assets/resto-logo.jpg" alt="">
        <h4>Sign Up</h4>
        
        <div class="register">
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="login">Login</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

    export default{
        name:"LoginPage",
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            async login(){
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);

                if(result.status==200 && result.data.length >0){
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                    this.$router.push({name:'Home'})
                }
                console.warn(result);
            }
        }
    }; 
</script>