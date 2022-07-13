
<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <h1>{{ todos }}</h1>
    <h1 @click="toggle">click</h1>
    <h1>{{ isFullscreen }}</h1>
    <h1 @click="enter">click</h1>
    <h1 @click="exit">click</h1>
    <div>x： {{x}}</div>
    <div>y： {{y}}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMouse } from '../utils/mouse'
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit, toggle } = useFullscreen()
// import { useStorage } from '../utils/useStorage'
let {x, y} = useMouse()
let color = computed(() => {
  return x.value + y.value > 1000 ? "blue":"red"
})

// let todos = useStorage('todo', [])
let todos = ref([{title: 'demo', done: false}])
let title = ref('')

function addTodo() {
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}

</script>

<style scoped>
h1 {
  color:v-bind(color);
}
</style>