<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>

