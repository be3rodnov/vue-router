<template>
  <a class="vue-router__back" @click="$router.go(-1)">Back</a>

  <div class="vue-router__item item v-detail-news" v-if="POST.id">
    <div class="item__title">{{ POST.title }}</div>
    <div class="item__brief">{{ POST.body }}</div>
    <div class="item__delete" @click="delete_one_post(POST.id)">
      delete
      <span></span>
    </div>
  </div>
  
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'v-detail-news',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['POST', 'DEL']),
  },
  methods: {
    ...mapActions([
      'GET_POST_BY_ID', 'DELETE_ONE_POST'
    ]),
    delete_one_post(id) {
      this.$store.dispatch('DELETE_ONE_POST', id);
    }
  },
  mounted() {
    this.GET_POST_BY_ID(this.$route.query.news)
  },
}
</script>
<style></style>