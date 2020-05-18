<template>
  <div id="app" class="has-background-light">
    <Navbar id="navbar"></Navbar>
    <div class="section wrapper">
      <router-view class="fade-in" />
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.fade-in {
  -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both,
    slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both,
    slide-in-bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.wrapper {
  margin: auto;
  padding-top: 72px !important;
  max-width: 980px !important;
}
</style>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  data: function() {
    return {
      show: false,
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
