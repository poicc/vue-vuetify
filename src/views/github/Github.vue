<template>
  <v-app>
    <nav-bar></nav-bar>
    <card-bar :back="color" @new-color="changeColor" :class="color"></card-bar>

    <span>{{ login.name }}</span>
    <repositories
      :list="repositories"
      @cancel-follow="unFollow"
      style="left:200px;top:-540px;"
    ></repositories>
  </v-app>
</template>

<script>
import CardBar from '../../components/CardBar'
import NavBar from '../../components/NavBar'
import Repositories from '../../components/Repositories'
export default {
  name: 'Github',
  data() {
    return {
      goDark: false,
      repositories: [],
      color: 'deep-purple lighten-4',
      login: [
        {
          login: '1802343228',
          name: 'crq',
          avatar:
            'https://avatars3.githubusercontent.com/u/59445871?s=460&u=da5694544e03959d2e2c54ea5b2a29c67174cbcc&v=4',
          url: 'https://api.github.com/users/1802343228',
          html_url: 'https://github.com/1802343228',
          public_repos: 15,
          followers: 8,
          following: 5,
          created_at: '2019-12-04T01:52:21Z',
          updated_at: '2020-05-07T12:59:42Z',
          private_gists: 7,
          total_private_repos: 1,
          disk_usage: 274391
        }
      ]
    }
  },
  components: {
    CardBar,
    NavBar,
    Repositories
  },
  created() {
    this.axios.get('/repositories').then((res) => {
      console.log(res)
      this.repositories = res.data
    })
  },
  mounted() {},
  methods: {
    unFollow(name) {
      console.log(name)
    },
    changeColor(newColor) {
      console.log(newColor)
      this.color = newColor
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
