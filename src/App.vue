<template>
  <div>
    <!-- Header -->
  <div class="header">
      <div class="search__container" v-if="processingGrid == false">
          <input class="search__input" type="text" v-on:keyup.enter="getImages" v-model="searchTerm" placeholder="Search for photo">
      </div>

      <div class="search__container" v-if="processingGrid == true">
          <p>{{searchingText}} <span>"{{searchTerm}}"</span></p>
      </div>
  </div>

  <!-- Photo Grid -->
  <div class="row"> 

    <article v-if="showPlaceHolders == true">
      <section class="holdergrey" v-for="(item,i) in lines" :key="i">
        <div class="line"></div>
        <div class="line2"></div>
      </section>
    </article>
    <article>
        <div v-if="showPlaceHolders == true">
          <section class="holdergrey" v-for="(item,i) in lines" :key="i">
            <div class="line"></div>
            <div class="line2"></div>
          </section>
        </div>
        
        <section v-for="(item,i) in images" :key="i">
            <a :id="getID(i)" :href="getTag(i)">
              <img class="cssbox_thumb" :src="item.thumb">
              <span class="cssbox_full">
                <img :src="item.full">
              </span>
            </a>
            <a class="cssbox_close" href="#void"></a>
            
            <div class="overlay">
              <span class="author">
                {{item.author}}
              </span><br>
              <span class="location">
                {{item.location}}
              </span>
               
            </div>
        </section>
    </article>
  </div>

  
</div>
  
</template>

<script>

export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      images: [],
      lines: [1, 2, 3, 4, 5, 6, 7, 8],
      searchTerm: "fun",
      dialog: false,
      processingGrid: false,
      searchingText: "Searching for ",
      showPlaceHolders: false
    };
  },
  mounted() {
    //this.getImages();
  },
  methods: {
    getID(id) {
      return "image" + id ;
    },
    getTag(id) {
      return "#image" + id ;
    },
    getImages() {
      this.processingGrid = true;
      this.showPlaceHolders = true;
      const that = this;
      this.$store
        .dispatch("images/fetchUnsplashPhotos", 
          this.$cliend_id, this.searchTerm
        )
        .then(result => {
          let response = result.data;
          //that.images = result.data;
          that.searchingText = "Search Results for ";
          for (let i = 0; i < response.length; i++) {
            that.images.push({
              location: response[i].user.location,
              thumb: response[i].urls.thumb,
              full: response[i].urls.full,
              author: response[i].user.first_name + " " + response[i].user.last_name
            });
          }
          that.showPlaceHolders = false;
        });
    }
  }
};


</script>
<style lang="scss">
@import "App.scss";
</style>
