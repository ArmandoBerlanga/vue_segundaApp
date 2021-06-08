<template>
    
    <div id="app">
      <div class="barra-principal">
          <router-link to="/">
            <h1>Twotter</h1>
          </router-link>
            
            <div class="navigation__user" v-if="user">
                @{{ user.username }}
            </div>
      </div>

        <div class="router_content">
            <router-view/> 
        </div>

    </div>

</template>

<script>
  import { useStore } from 'vuex';
  import { computed } from 'vue';

  export default {
    name: "App",

    setup(){
      const store = useStore();
      const user = computed(() => store.state.user);

      return {
        user
      }
    }
  };
</script>


<style>

    body{
      background-color: #f4f4f9;
      margin: 0;
    }

    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-size: medium;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;
      flex-direction: column;
    }

    .barra-principal{
        background-color: #ea899a;
        color: white;
        font-weight: bold;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .barra-principal a, .navigation__user {
        margin: 0px 4.5%;
    }

    .barra-principal h1 {
      margin: 0;
      transition: transform 250ms;
    }

    .barra-principal h1:active {
      transform: scale(1.1, 1.1);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

</style>
