<template>
    <div class="user-profile">
        <div class="user-profile__panel">
            <h1 class="user-profile__username">@{{ user.username }}</h1>
    
            <div class="user-profile__badge" v-if="user.isAdmin">Admin</div>
            <div class="user-profile__contador"><strong>Followers: </strong> {{ followers }}</div>

            <form action="" class="create_twoot" @submit.prevent="createNewTwoot">
                <label for="newTwoot">
                    <strong>New Twoot</strong> 
                    <i :class="{'--limit': characterCounter > 180}"> ({{ characterCounter }}/180)</i>
                </label>
                
                <textarea id="newTwoot" rows="6" v-model="content" :class="{'--limit': characterCounter > 180}"/>
                
                <div class="twoot_type">
                    <label for="type"><strong>Type </strong></label>
                    <select id="type" v-model="chosenType">
                        <option
                        :value="option.value"
                        v-for="(option, index) in twootTypes"
                        :key="index"
                        >
                        {{ option.name }}
                        </option>
                    </select>
                </div>

                <button id="twoot_button">Twoot!</button>
            </form>

        <!-- <div class="user-profile__followers">
                    <button @click="followUser" class="button_follow">Follow</button>
                    <button @click="unfollowUser" class="button_unfollow">Unfollow</button>
                </div> -->
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

</template>

<script>

    import Twoot from "./Twoot.vue";
    export default {
        components: { Twoot },
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

                twootTypes: [
                    { value: "draft", name: "Draft" },
                    { value: "instant", name: "Instant Twoot" },
                ],

                content: "",
                chosenType: "draft",
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

            characterCounter(){
                return this.content.length;
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

            createNewTwoot() {
                if (this.content && this.chosenType != "draft" && this.characterCounter<=180)
                    {
                        this.user.twoots.unshift(
                            {id: this.user.twoots.length + 1, content: this.content,}
                        );
                        this.content = "";
                    }
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
        padding: 50px 5%;
        width: 90%;
    }

    .user-profile__panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: #f4f4f9;
        border-radius: 5px;
        box-shadow: 4px 4px #888888;
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

    h1 {
        margin: 0;
    }

    .user-profile__twoot {
        color: #888888;
    }

    button {
        background-color: white;
        border-radius: 5px;
        border: 1px solid #ea899a;
        font-size: 1em;
        margin: 3px 3px 3px 0px;
        transition: transform 250ms;
    }

    button:hover {
        box-shadow: 0 1.2px #888888;
    }

    button:active {
        /* transform: translateY(2px); */
        transform: scale(1.05, 1.05);
    }

    .button_follow,
    #twoot_button {
        background-color: #ea899a;
        font-weight: bold;
        color: #f4f4f9;
        font-size: 1.3em;
    }

    .create_twoot {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    textarea {
        border: 0px;
        border-radius: 5px;
        resize: none;
        margin-bottom: 10px;
        font-size: 1.1em;
    }

    select {
        border: 0px;
        border-radius: 5px;
        font-size: 1em;
        margin-bottom: 10px;
    }

    .--limit {
        border-color: red;
        color: red;
    }

</style>