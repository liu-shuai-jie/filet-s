<template>
  <nav>
    <router-link to="/">题目一</router-link> |
    <router-link to="/home">题目二</router-link> |
    <router-link to="/Signup">题目三</router-link> |
    <router-link to="/about">题目四</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
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
