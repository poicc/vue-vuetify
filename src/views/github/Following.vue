<template>
  <v-app>
    <nav-bar></nav-bar>
    <card-bar style="margin-top:30px;"></card-bar>
    <follow
       style="width:70%;margin-left:400px;margin-top:-550px;"
      :list="follow"
      @cancel-follow="unFollow"
    ></follow>
  </v-app>
</template>

<script>
import CardBar from '../../components/CardBar'
import NavBar from '../../components/NavBar'
import Follow from '../../components/Follow'
export default {
  name: 'Folling',
  data() {
    return {
      follow: []
    }
  },
  created() {
    this.axios.get('/following').then((res) => {
      console.log(res)
      this.follow = res.data
    })
  },
  components: {
    NavBar,
    Follow,
    CardBar
  },
  methods: {
    unFollow(index) {
      alert(index)
      this.follow.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss"></style>
