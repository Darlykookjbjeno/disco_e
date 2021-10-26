<template>
  <div class="hello">
    <div class="container-xxl">
    <nav class="navbar nabvar-light bg light">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" aria-label="Search" />

        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          <img class="lupa" src="@/assets/lupa.png" />
        </button>
      </form>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.lupa {
  width: 20px;
  height: 20px;
}
</style>
