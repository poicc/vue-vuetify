<template>
  <!-- <v-card max-width="800" class="mx-auto">
    <v-container class="pa-1">
      <v-item-group v-model="selected" multiple>
        <v-row>
          <v-col v-for="(item, i) in follow" :key="i" cols="12" md="6">
            <v-item v-slot:default="{ active, toggle }">
              <v-card-text height="150" class="text-right pa-2" @click="toggle">
                {{ item.username }}
                <v-img :src="item.avatar"></v-img>
                <my-button
                  color="#ccc"
                  dark
                  small
                  @click.native="handleClick($event, index)"
                >
                  <v-icon slot="pre-icon" color="white">mdi-star</v-icon>
                  <span>UnFollower</span>
                </my-button>
              </v-card-text>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card> -->
  <v-row class="pl-12 pr-6">
    <v-col cols="10" md="4" v-for="(item, index) in list" :key="index">
      <v-card elevation="12">
        <v-card-subtitle class="deep-purple lighten-3">
          {{ item.username }}
        </v-card-subtitle>
        <v-card-text>
          <v-img :src="item.avatar"> </v-img>
        </v-card-text>
        <v-card-actions>
          <my-button
            color="#ccc"
            dark
            small
            @click.native="handleClick($event, index)"
          >
            <v-icon slot="pre-icon" color="white">mdi-cancel</v-icon>
            <span>UnFollow</span>
          </my-button>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MyButton from './MyButton'
export default {
  name: 'Follower',
  components: { MyButton },
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleClick(event, index) {
      console.log(index)
      this.$emit('cancel-follow', index)
    }
  },
  mounted() {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
