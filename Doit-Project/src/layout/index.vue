<!-- 최상위 라우트 컴포넌트 (기본 레이아웃 설정) -->

<template>
  <section id="wrap">
    <h1 class="blind">웹사이트 제목</h1>
    <Header/>
    <section id="container">
      <router-view/>  <!-- body에 다양한 컴포넌트가 렌더링되도록 설정 -->
    </section>
    <Footer/>
  </section>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<style lang="scss" scoped>

</style>