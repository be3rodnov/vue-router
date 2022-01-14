<template>
  <div class="v-main">
    <section class="vue-router">
      <div class="container">
        <div class="vue-router__wrap">
          <div class="vue-router__title">vue-router</div>
          <router-view></router-view>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'v-main',
  props: {},

}
</script>
<style></style>