<template>

  <div class="home">
     <h1>Esoty en el home</h1>

      <div class="user-list">
        <router-link
          v-for="user in users"
          :to="{ name: 'UserProfile', params: { userID: user.id } }"
          :key="user.id"
        >
          <button class="goto_user">@{{user.username}}</button>
          

        </router-link>
      </div>
  </div>

</template>

<script>

    import { users } from "../assets/users";

    export default {
      name: "Home",

      setup() {
        return {
          users,
        };
      },
    };

</script>

<style scoped>

    .home {
      margin: 0px 5%;
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
      font-size: 1em;
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
