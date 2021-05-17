<template>
  <div id="app" class="container">
    <!-- <AddEmployee/> -->
    <Employee/>
  </div>
</template>

<script>

import Employee from './components/Employee'
// import AddEmployee from './components/AddEmployee'
export default {
  name: 'App',
  components: {
    Employee,
    // AddEmployee
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
        width:1140px;
        margin:0 auto;
    }
</style>
