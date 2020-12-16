<template>

   <div class="posts-new">
     <form v-on:submit.prevent="submit()">
       <h1>Make a new Post</h1>
       <ul>
         <li class="text-danger" v-for="error in errors">{{ error }}</li>
       </ul>
       <div class="form-group">
         <label>Superbowl:</label> 
         <input type="text" class="form-control" v-model="superbowl">
       </div>
       <div class="form-group">
         <label>Year:</label>
         <input type="string" class="form-control" v-model="year">
       </div>
       <div class="form-group">
         <label>AFC:</label>
         <input type="text" class="form-control" v-model="afc">
       </div>
       <div class="form-group">
         <label>NFC:</label>
         <input type="text" class="form-control" v-model="nfc">
       </div>
       <div class="form-group">
         <label>Superbowl Champion:</label>
         <input type="text" class="form-control" v-model="superbowlchampion">
       </div>
       <input type="submit" class="btn btn-primary" value="Submit">
     </form>
   </div>
 </template>

 <script>
import axios from "axios";

export default {
  data: function () {
    return {
      title: "",
      ingredients: "",
      directions: "",
      prepTime: "",
      imageUrl: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageUrl,
      };
      axios
        .post("/api/recipes", params)
        .then((response) => {
          this.$router.push("/posts/new");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>