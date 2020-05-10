<template>
  <v-row>
    <v-col cols="10" md="4" v-for="(item, i) in user" :key="i">
      <v-card max-width="344" class="mx-auto">
        <v-container>
          <v-img :src="item.avatar" height="294"></v-img>
          <!-- <v-card-text class="headline">{{ item.name }}</v-card-text>
      <v-card-text>{{ item.login }}</v-card-text> -->
          <v-card-actions>
            <v-btn text color="deep-purple accent-4">
              {{ item.name }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="handleColor($event)" icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
      <v-container class="pl-12 pr-6">
        <h2 class="font-weight-bold" style="margin-left:8px;">
          {{ item.name }}
        </h2>
        <p style="margin-left:8px;color:grey">{{ item.login }}</p>
      </v-container>
      <v-container class="pl-12 pr-6">
        <my-button color="#F5F5F5" style="width:344px;" large
          ><span>Edit profile</span></my-button
        >
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import MyButton from './MyButton'
export default {
  name: 'CardBar',
  data() {
    return {
      user: [
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
    MyButton
  },
  props: {
    back: String
  },
  mounted() {},
  methods: {
    handleColor() {
      console.log(this.back)
      if (this.back == 'deep-purple lighten-4') {
        const newColor = 'teal lighten-4'
        this.$emit('new-color', newColor)
      } else if (this.back == 'teal lighten-4') {
        const newColor = 'deep-purple lighten-4'
        this.$emit('new-color', newColor)
      }
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.mx-auto {
  margin-left: 300px;
}
</style>
