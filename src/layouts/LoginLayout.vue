<template>
    <div>
        <AppBar></AppBar>
        <login></login>
</div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import Login from "../components/Login"

export default {
    name: "loginLayout",
    data() {
        return {
            
        };
    },

    methods: {
    },

    components: {
        Login,
        AppBar
    },
};
</script>