<template>
  <div class="home">
   
    <ListVideos msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListVideos from '@/components/ListVideos.vue'


export default {
  name: 'home',
  components: {
    ListVideos
  }
}
</script>
