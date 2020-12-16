<template>
   <div class="post-index">
     <h1>{{ message }}</h1>
     <!-- <h1>{{ post }}</h1> -->
     <div v-for="post in post">
       <p>{{ post.title }}</p>
     </div>
   </div>
 </template>

 <style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to index page!",
      recipes: [],
    };
  },
  created: function () {
    this.recipesIndex();
  },
  methods: {
    recipesIndex: function () {
      console.log("in recipes index");
      axios.get("/api/recipes").then((response) => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
  },
};
</script>
