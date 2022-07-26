<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>

<el-container>
  <el-header style="height: 200px;"><HelloWorld></HelloWorld></el-header>
  <el-container>
    <el-aside width="200px">
      <div><router-link to="/home">首页</router-link></div>
      <div><router-link to="/todoList">列表页</router-link></div>
      <div><router-link to="/rate">平分</router-link></div>
      <router-link to="/counter">vuex demo</router-link><br/>
      <router-link to="/head">Jsx demo</router-link>
    </el-aside>
    <el-container>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition name="modal" mode="out-in">
            <div :key="route.name">
              <component :is="Component"></component>
            </div>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
