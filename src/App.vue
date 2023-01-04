<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/string">String</router-link> |
    <router-link to="/databindiing/html">Html</router-link> |
    <router-link to="/databindiing/input">input</router-link> |
    <router-link to="/databindiing/select">select</router-link> |
    <router-link to="/databindiing/check">checkbox</router-link> |
    <router-link to="/databindiing/radio">radio</router-link> |
    <router-link to="/databindiing/attribute">attribute</router-link> |
    <router-link to="/databinding/list">list</router-link> |
    <router-link to="/databinding/class">class</router-link> |
    <router-link to="/databinding/style">style</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
