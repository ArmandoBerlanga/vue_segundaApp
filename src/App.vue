<template>
    <div id="app">
      <UserProfile />      
    </div>
</template>

<script>
    import UserProfile from "./components/UserProfile";

    export default {
      name: "App",
      components: { UserProfile },
    };
</script>


<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: medium;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;
      flex-direction: column;
    }
</style>
