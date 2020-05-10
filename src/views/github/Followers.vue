<template>
  <v-app>
    <nav-bar></nav-bar>
    <card-bar style="margin-top:30px;"></card-bar>
    <follower
      style="width:70%;margin-left:400px;margin-top:-550px;"
      :list="follow"
      @cancel-follow="unFollow"
    ></follower>
  </v-app>
</template>

<script>
import CardBar from '../../components/CardBar'
import NavBar from '../../components/NavBar'
import Follower from '../../components/Follower'
export default {
  name: 'Followers',
  data() {
    return {
      follow: [],
      tab: null,
      items: ['Followers', 'repositories']
    }
  },
  components: {
    NavBar,
    CardBar,
    Follower
  },
  created() {
    this.axios.get('/follower').then((res) => {
      console.log(res)
      this.follow = res.data
    })
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
