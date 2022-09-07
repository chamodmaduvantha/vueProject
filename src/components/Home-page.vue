<template>
    <div>
        <Header></Header>
       <h1>Hello,{{name}} Welcome on Home Page</h1>
       
       <table border="1">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td><router-link :to="'/update/'+item.id">Update</router-link></td>
        </tr>
       </table>
       
    </div>
</template>



<script>
import Header from './HeaderPage.vue';
import axios from 'axios';

    export default{
    name:"Home-page",
    components:{
        Header
    },
    data(){
      return{
        name:'',
        restaurant:[]
      }  
    },
    async mounted()
    {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    if(!user){
        this.$router.push({name:'Home'})
    }

    let result = await axios.get("http://localhost:3000/restsurent");
    console.log(result);
    this.restaurant = result.data;

}
}
</script>



<style>
    td{
        width:160px;
        height: 40px;
    }
</style>