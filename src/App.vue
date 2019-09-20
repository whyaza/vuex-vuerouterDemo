<template>
  <div id="app">
    <input type="radio" value="1"  v-model.number="selectlevel" name="bigsize"/>1
    <input type="radio" value="2"  v-model.number="selectlevel" name="bigsize"/>2
    <input type="radio" value="3"  v-model.number="selectlevel" name="bigsize"/>3
    <input type="radio" value="4"  v-model.number="selectlevel" name="bigsize"/>4
    <input type="radio" value="5"  v-model.number="selectlevel" name="bigsize"/>5
    <input type="radio" value="6"  v-model.number="selectlevel" name="bigsize"/>6
    <br>
    内容大小:
    {{ selectlevel }}
    <fuck :level="selectlevel">
        balabala...balabala...balabala...balabala...balabala...
        balabala...balabala...balabala...balabala...balabala...
        balabala...balabala...balabala...balabala...balabala...
        balabala...balabala...balabala...balabala...balabala...
        balabala...balabala...balabala...balabala...balabala...
        balabala...balabala...balabala...balabala...balabala...
    </fuck>

    
    <router-link to="/y1">去页面1</router-link>
    <router-link to="/y2">去页面2</router-link>
    <router-view></router-view>
    
    下面是vuex：this.$store.state.count 获得的数据:
    <h2>{{  this.$store.state.count  }}</h2>
    下面是vuex：this.$store.getters.getStateCount获得的数据:   
    <h2>{{ this.$store.getters.getStateCount }}</h2>

    <button @click="addS">+</button>
    <button @click="reduceS">-</button>
  </div>
</template>

<script>
import fuck from './components/fuck'
  export default {
    data (){
        return {
            selectlevel : 1
        }
    },
    components:{
        fuck
    },
    methods:{
        addS() {
            //this.$store.commit("addition");
            this.$store.dispatch("addition");
        },
        reduceS() {
            //this.$store.commit('reduction');
            this.$store.dispatch("reduction");
        }
    }
  };
</script>