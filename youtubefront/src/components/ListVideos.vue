<template>
  <div class="">
    <div class="col-md-12 mb-5" v-if="createNew">
      <CreateVideo v-on:createdVideo="updateVideos"/>
      </div>
    <div class="row">
      <div class="col-md-5 text-center nicefont">
        <h4>Welcome to Youtube Rater</h4>
          <form @submit="createdNew()">
            <input class="btn-sm btn-primary mb-3 btn-center" id="cretedNew" type="submit" value="Create new video">

          </form>
            <p v-bind:key="video.id" v-for="video in videos">
            {{video.title}}
            <br>
            Rating: {{video.rating_average}} 
           
            <br>
            <button class="btn-sm btn-primary mt-2 mb-3" v-on:click="videoDetail(video)"
            
            >Details</button>
           </p>
      </div>
      <div class="col-md-6">
        <VideoDetails v-bind:videodetail="videodetail" v-on:updated="updateVideos" v-on:deleted="updateVideos"/>
      </div>
    
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import VideoDetails from './VideoDetails';
import CreateVideo from './CreateVideo';

export default {
  name: 'home',
  components: {
    VideoDetails,
    CreateVideo,
  
  },
  data() {
    return {
      videos : [],
      videodetail: Object,
      createNew: "",
    }
  },
  methods: {
    getVideos() {
      axios.get("http://127.0.0.1:8000/api/videos/")
      .then(res => (this.videos = res.data))
      .catch(err => console.log(err));
    },
    videoDetail(video) {
      this.videodetail = video;
      console.log(this.videodetail)
    },
    createdNew() {
      this.createNew = !this.createNew;
    },
    updateVideos(video) {
      this.timer = setTimeout(() => {

      axios
      .get("http://127.0.0.1:8000/api/videos/")
      .then(res => (this.videos = res.data))
      .catch(err => console.log(err));
        }, 600);
    }
  },
  created() {
    this.getVideos();
    createNew: false;
  } 
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Alatsi&display=swap');

.nicefont{
  font-size:26px;
  font-family: 'Alatsi', sans-serif;
}
</style>

