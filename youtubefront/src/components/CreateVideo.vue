<template>
  <div class="">
   <div class="row">
     <div class="col-md-6">
       <div class="card">
         <div class="card-body">
           <form id="formvideo" @submit.prevent="checkForm">
            
               <p>
                    <label for="title">Title </label>
                    <input class="ml-2" type="text" name="title" id="title" v-model="title">
                  </p>
                  <p>
                    <label for="description">Description </label>
                    <input class="ml-2 description" type="textarea" name="description" id="description" v-model="description">
                  </p>
                  <p>
                    <label for="url">Url </label>
                    <input class="ml-2" type="text" name="url" id="url" v-model="url" >
                  </p>
                   <p>
                    <label for="category">Category</label>
                    <select  class="ml-2" name="category" id="category" v-model="category">
                      <option>web_development</option>
                      <option>programming</option>
                      <option></option>

                      </select>
                  </p>
                  <p>
                    <label for="subcategory">Subcategory </label>
                    <input class="ml-2" type="text" name="subcategory" id="subcategory" v-model="subcategory" >
                  </p>
                   <p>
                    <label for="author">Author </label>
                    <input class="ml-2" type="text" name="author" id="author" v-model="author" >
                  </p>
                  <p>
                    <input type="submit" value="Submit" @click="$emit('createdVideo')">
                  </p>

           </form>
         </div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';


export default {
  name: 'CreateVideo',
  components: {
   
  },
  data() {
    return {
      title:null,
      description:null,
      url:null,
      category: null,
      subcategory: null,
      author:null
    }

  },
  methods: {
    checkForm() {
      axios.post('http://127.0.0.1:8000/api/videos/', {
        title: this.title,
        description: this.description,
        url: this.url,
        category: this.category,
        subcategory: this.subcategory,
        author: this.author
      })
      .then(res => console.log(res))
      .catch(res => console.log(res))
    }
  }
}
</script>
