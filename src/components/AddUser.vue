<template>

    <div id="add-user">
        <form @sumbit.prevent="agregarUsuario()">

            <h2>Agregar usuario</h2>

            <label for="user">User</label>
            <textarea name="user" rows="1" placeholder="armandoBerlanga27"></textarea>

            <label for="nombre">Nombre</label>
            <textarea name="nombre" rows="1" placeholder="Armando"></textarea>

            <label for="apellido">Apellido</label>
            <textarea name="apellido" rows="1" placeholder="Berlanga"></textarea>

            <label for="mail">Correo</label>
            <textarea name="mail" rows="1" placeholder="Jose.berlangam@udem.edu"></textarea>

            <button>Agregar</button>

        </form>
    </div>
    
</template>


<script>

    export default ({
        setup() {
            
        },
    })

</script>

<style scoped>

    #add-user{
        border: 0;
        margin-left: 35px;
        border-radius: 5px;
        background-color: white;
        transition: transform 250ms;
    }

    #add-user:hover{
        transform: scale(1.05, 1.05);
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 30px;
        padding-top: 10px;
    }

    label{
        color: #ea899a;
        font-weight: bold;
        font-size: 1.3em;
    }

    textarea {
        resize: none;
        font-size: 1.3em;
        padding: 5px;
        margin-bottom: 10px;
        width: 20em;
    }

    button {
        background-color: #ea899a;
        border-radius: 5px;
        border: 0;
        font-size: 1.3em;
        transition: transform 250ms;
        font-weight: bold;
        color: white;
        margin-top: 15px;
        padding: 5px;
    }

    button:hover {
        box-shadow: 0 1.2px #888888;
    }

    button:active {
        /* transform: translateY(2px); */
        transform: scale(1.05, 1.05);
    }

    ::placeholder{
        color: #d5d3d3;
    }

</style>