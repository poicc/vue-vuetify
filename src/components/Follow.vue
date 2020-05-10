<template>
  <!--  <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="100"
      offset-x
      max-width="300"
    > -->
  <!-- <template v-slot:activator="{ on }">
        <v-card max-width="1000" class="mx-auto">
          <v-container class="grey lighten-5">
            <v-row no-gutters>
              <v-col
                cols="12"
                style="margin:10px;"
                v-for="(item, index) in list"
                :key="index"
              >
                <v-card class="pa-2" outlined tile>
                  <v-card-title v-on="on">{{ item.name }}</v-card-title>

                  <my-button
                    style="margin-left:750px;"
                    color="cyan lighten-4"
                    dark
                    small
                    @click.native="handleClick($event, index)"
                  >
                    <v-icon slot="pre-icon" color="black">mdi-cancel</v-icon>
                    <span style="color:black;">UnFollow</span>
                  </my-button>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template> -->
  <v-row class="pl-12 pr-6">
    <v-col cols="10" md="4" v-for="(item, index) in list" :key="index">
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="item.avatar" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.username }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable hints</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Cancel</v-btn>
          <my-button
            @click="menu = false"
            color="#fff"
            dark
            text
            small
            @click.native="handleClick($event, index)"
          >
            <v-icon slot="pre-icon" color="black">mdi-cancel</v-icon>
            <span style="color:black;">UnFollow</span>
          </my-button>
        </v-card-actions>
      </v-card>
      <!-- </v-menu> -->
    </v-col>
  </v-row>
</template>

<script>
import MyButton from './MyButton'
export default {
  name: 'Follow',
  data: () => ({
    selected: [],
    fav: true,
    menu: false,
    message: false,
    hints: true
  }),
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    MyButton
  },
  methods: {
    handleClick(event, index) {
      console.log(index)
      this.$emit('cancel-follow', index)
    }
  }
}
</script>

<style scoped lang="scss"></style>
