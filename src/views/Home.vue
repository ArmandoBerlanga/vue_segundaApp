<template>

  <div id="home">
    <h1>Pagina de INICIO</h1>
    <h2>Selecciona al usuario al cual deseas acceder</h2>
    <div class="home-items">
      <div class="user-list">
        <router-link
          v-for="user in users"
          :to="{ name: 'UserProfile', params: { userID: user.id } }"
          :key="user.id"
        >
          <button class="goto_user">@{{user.username}}</button>
          
        </router-link>
      </div>

      <div class="users">
          <AddUser/>
      </div>

    </div>
  </div>

</template>

<script>

    import { users } from "../assets/users";
    import AddUser from "../components/AddUser.vue";

    export default {
      components: { AddUser },
      name: "Home",
      
      setup() {
        return {
          users,
        };
      },
    };

</script>

<style scoped>

    #home {
      margin: 0px 5%;
      
    }

    .home-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    } 

    .user-list {
      display: flex;
      flex-direction: column;
    }

    .goto_user{
      border: 1.5px solid #ea899a;
      color: #ea899a;
      background-color: #f4f4f9;
      border-radius: 5px;
      font-size: 1.3em;
      padding: 5px;
      margin: 5px;
      margin-left: 0;
      transition: transform 250ms;
    }

    .goto_user:hover {
      transform: scale(1.1, 1.1);
      background-color: #fae7eb;
    }

</style>
