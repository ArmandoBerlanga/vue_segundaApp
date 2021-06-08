<template>

    <div class="content">

        <div class="barra-principal">
            <h1>Twotter</h1>

            <div class="navigation__user" v-if="state.user">
                @{{ state.user.username }}
            </div>
        </div>

        <div class="user-profile">
            <div class="user-profile__panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        
                <div class="user-profile__badge" v-if="state.user.isAdmin">Admin</div>
                <div class="user-profile__contador"><strong>Followers: </strong> {{ state.followers }}</div>

                <TwootBar @create="addTwoot"/>
            </div>

            <div class="user-profile__twoots">
                <Twoot
                    v-for="twoot in state.user.twoots"
                    :key="twoot.id"
                    :username="state.user.username"
                    :twoot="twoot"
                    @favourite="toggleFav"
                />
            </div>
        </div>

    </div>

</template>

<script>

    import {reactive, computed} from 'vue'
    import Twoot from "./Twoot.vue";
    import TwootBar from "./TwootBar.vue";

    export default {
        components: { Twoot, TwootBar },
        name: "UserProfile",

        setup(){
            const state = reactive({
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
                    { id: 4, content: "Omg no puedo poner mas de 180 chars xd" },
                    ],
                },                
            })

            const fullName = computed (() => `${state.user.firstName} ${state.user.lastName}`);

            function followUser() {
                state.followers++;
            }

            function unfollowUser() {
                if (state.followers > 0) 
                    state.followers--;
            }

            function toggleFav(id) {
                console.log(`Fav Twoot: #${id}`);
            }

            function addTwoot(content) {
                state.user.twoots.unshift(
                    {id: state.user.twoots.length + 1, content: content,}
                );
            }  

            return{
                state,
                fullName,
                followUser,
                unfollowUser,
                toggleFav,
                addTwoot
            }
        },

        watch: {
            // para observar los datos y como se compartan
            followers(newFollowerCont, oldFollowerCont) {
                if (oldFollowerCont < newFollowerCont)
                    console.log(`${this.state.user.usermame} ha conseguido un seguidor`);
            },
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

    .user-profile h1{

        margin-bottom: 5px;
    }

    .user-profile__panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 0px 20px 20px;
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
        /* margin-bottom: 2px; */
        padding: 1px 3px;
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

    .barra-principal h1, .navigation__user{
        margin: 0px 4.5%;
    }

</style>