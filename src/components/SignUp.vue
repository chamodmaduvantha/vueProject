<template>
    <div>
        <img class="logo" src="../assets/resto-logo.jpg" alt="">
        <h4>Sign Up</h4>
        
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signUp">Sign Up</button>
        </div>
    </div>
</template>




<script>
import axios from 'axios'

export default({
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            console.log("signUp",this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            });
            console.warn(result);
            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
            
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
})

</script>



<style>
    .logo{
        width:120px
    }
    .register input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display:block;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }
    .register button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        color: white;
        background-color: skyblue;
        cursor: pointer;
    }
</style>
