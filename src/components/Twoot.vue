<template>

    <div class="twoot-item" @click="favTwoot(twoot.id)">
        <div class="user-profile__twoot">
            <div class="twoot-user"><strong>@{{ username }}</strong></div>
            <div class="twoot-content">{{ twoot.content }}</div>
        </div>
    </div>

</template>

<script>

    export default {
        
        name: "Twoot",
        props: {
            username: {
                type: String,
                required: true,
            },

            twoot: {
                type: Object,
                required: true,
            },
        },

        methods: {
            favTwoot(id) {
                this.$emit("favourite", id);
            },
        },
    };

</script>

<style scoped>

    .twoot-item {
        background-color: white;
        margin: 0px 0px 15px 0px;
        padding: 15px;
        border-radius: 5px;
        max-width:100%;
        transition: transform 250ms;
    }
    
    .twoot-user {
        color: #ea899a;
    }

    .twoot-content{
        color: #888888;
    }

    .user-profile__twoot {
        margin-left: 10px;
    }

    .twoot-item:hover {
        background-color: #f3d9de;
        transform: scale(1.08, 1.08);
        /* transform: translateY(-7px); */
    }

</style>