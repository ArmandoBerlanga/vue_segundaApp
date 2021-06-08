<template>

    <div>
        <form action="" class="create_twoot" @submit.prevent="createNewTwoot()">
        
        <label for="newTwoot">
            <strong>New Twoot</strong>
            <i :class="{ '--limit': counter > 180 }"> ({{ counter }}/180)</i>
        </label>

        <textarea id="newTwoot" rows="6" v-model="state.content" :class="{ '--limit': counter > 180 }"/>

        <div class="twoot_type">
            <label for="type"><strong>Type </strong></label>
            <select id="type" v-model="state.chosenType">
            <option
                :value="option.value"
                v-for="(option, index) in state.twootTypes"
                :key="index"
            >
                {{ option.name }}
            </option>
            </select>
        </div>

        <button id="twoot_button">Twoot!</button>
        </form>
    </div>

</template>

<script>

    import {reactive, computed} from 'vue'

    export default {
        name: "TwootBar",
        
        setup(props, context){
            const state = reactive ({
                twootTypes: [
                    { value: "draft", name: "Draft" },
                    { value: "instant", name: "Instant Twoot" },
                ],

                content: "",
                chosenType: "draft",
            })

            const counter = computed(() => state.content.length);

            function createNewTwoot() {
                if (state.content && state.chosenType != "draft" && state.content.length<=180)
                    {
                        context.emit("create", state.content);
                        state.content = "";
                    }
            }
        
            return {
                state,
                counter,
                createNewTwoot
            }
        }
    }   
    
</script>

<style scoped>

    .create_twoot {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }

    textarea {
        border:1px solid rgb(204, 203, 203) ;
        border-radius: 5px;
        resize: none;
        margin-bottom: 10px;
        font-size: 1.1em;
    }

    select {
        border:1px solid rgb(204, 203, 203) ;
        border-radius: 5px;
        font-size: 1em;
        margin-bottom: 10px;
    }

    .--limit {
        border-color: red;
        color: red;
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

    #twoot_button {
        background-color: #ea899a;
        font-weight: bold;
        color: #f4f4f9;
        font-size: 1.3em;
    }

</style>