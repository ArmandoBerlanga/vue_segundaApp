<template>

    <div class="content">

        <div class="barra-principal">
            <h1>Twotter</h1>
        </div>

        <div class="user-profile">
            <div class="user-profile__panel">
                <h1 class="user-profile__username">@{{ user.username }}</h1>
        
                <div class="user-profile__badge" v-if="user.isAdmin">Admin</div>
                <div class="user-profile__contador"><strong>Followers: </strong> {{ followers }}</div>

                <TwootBar @create="addTwoot"/>

            </div>

            <div class="user-profile__twoots">
                <Twoot
                    v-for="twoot in user.twoots"
                    :key="twoot.id"
                    :username="user.username"
                    :twoot="twoot"
                    @favourite="toggleFav"
                />
            </div>
        </div>

    </div>

</template>

<script>

    import Twoot from "./Twoot.vue";
    import TwootBar from "./TwootBar.vue";
    export default {
        components: { Twoot, TwootBar },
        name: "UserProfile",

        data() {
            return {
                followers: 0,
                user: {
                    id: 1,
                    username: "armandoBerlanga27",
                    firstName: "Armando",
                    lastName: "Berlanga",
                    email: "armando@gmail.com",
                    isAdmin: true,
                    twoots: [
                    { id: 1, content: "Omg this is amazing" },
                    { id: 2, content: "Omg this is super mega amazing" },
                    { id: 3, content: "Como es que se puede hacer esto" },
                    ],
                },
            };
        },

        watch: {
            // para observar los datos y como se compartan
            followers(newFollowerCont, oldFollowerCont) {
                if (oldFollowerCont < newFollowerCont)
                    console.log(`${this.user.usermame} ha conseguido un seguidor`);
            },
        },

        computed: {
            // para hacer funciones con los datos
            fullName() {
                return `${this.user.firstName} ${this.user.lastName}`; // no son ' som ` o sea acentos
            },
        },

        methods: {
            // metodos
            followUser() {
                this.followers++;
            },

            unfollowUser() {
                if (this.followers > 0) 
                    this.followers--;
            },

            toggleFav(id) {
                console.log(`Fav Twoot: #${id}`);
            },

            addTwoot(content) {
                this.user.twoots.unshift(
                    {id: this.user.twoots.length + 1, content: content,}
                );
            },    
        },

        mounted() {
            // lo primero que hace al crearse
            // this.followUser();
        },
    };

</script>

<style scoped> 
/* scoped ayuda a que solo sea aplicable a este compoennte */

    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        padding: 20px 5%;
        width: 90%;
    }

    .user-profile__panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        /* box-shadow: 4px 4px #888888; */
        height: fit-content;
    }

    .user-profile__badge {
        background-color: #ea899a;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        margin-right: auto;
        margin-bottom: 2px;
        padding: 1px 3px;
    }

    .barra-principal{
        background-color: #ea899a;
        color: white;
        font-weight: bold;
        padding: 10px;
    }

    .barra-principal h1 {
        margin: 0px 4.5%;
    }

</style>