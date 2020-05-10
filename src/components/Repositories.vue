<template>
  <v-card max-width="800" class="mx-auto">
    <!-- <v-container class="pa-1">
      <v-item-group v-model="selected" multiple>
        <v-row>
          <v-col v-for="(item, i) in repositories" :key="i" cols="12" md="6">
            <v-item v-slot:default="{ active, toggle }">
              <v-card-text height="150" class="text-right pa-2" @click="toggle">
                {{ item.name }}
                <v-btn icon dark>
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-card-text>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container> -->
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col
          cols="12"
          style="margin:10px;"
          v-for="(item, index) in list"
          :key="index"
        >
          <v-card class="pa-2" outlined tile>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>{{ item.annotation }}</v-card-text>
            <v-card-text
              ><v-icon>mdi-circle</v-icon>{{ item.type }}
              <v-icon>mdi-star</v-icon>{{ item.collectCount }}
              <!-- <v-card-text>{{ item.updateTime }}</v-card-text> -->
            </v-card-text>
            <my-button
              style="margin-left:650px;top:-100px;position: relative;"
              color="cyan lighten-4"
              dark
              small
              @click="handleUn()"
              @click.native="handleClick($event, name)"
            >
              <v-icon slot="pre-icon" color="black">mdi-star</v-icon>
              <span style="color:black">{{ btn }}</span>
            </my-button>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import MyButton from './MyButton'
export default {
  name: 'Repositories',
  data: () => ({
    selected: [],
    flag: true,
    btn: 'Star'
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
    handleClick(event) {
      let name = event.target.innerHTML
      this.$emit('cancel-follow', name)
      console.log(`子组件传递参数>>>>>>${name}`)
      this.flag = !this.flag
      if (this.flag == true) {
        this.btn = 'Star'
      } else {
        this.btn = 'UnStar'
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
