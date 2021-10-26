


<template>
<div id="app">
<Vertical/>
</div>
    
</template>


<script>

import Vertical from '@/components/Vertical.vue'

export default {
  components:{
    Vertical,
  }
}
</script>


<style  scoped>
header {
  background-color: rgb(39, 39, 112);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}
h1 {
  color: white;
  font-size: 25px;
}

li {
  color: white;
  margin: 5px;
  text-decoration: none;
  list-style: none;
}
header a img {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}
</style>

