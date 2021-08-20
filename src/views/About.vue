<template>
  <div class="about">
    <Header HeaderMsg="Header" />
    <AboutContent />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import AboutContent from '@/components/AboutContent.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    AboutContent,
    Footer
  }
}
</script>

