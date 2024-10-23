<template>
    <v-container fluid style="height: 100vh; align-items:center; display: flex;">
        <v-col
        justify="center" 
        align="center"
        >
            <v-progress-circular
                
                :size="100"
                :width="7"
                color="primary"
                indeterminate
            ></v-progress-circular>
            <h1 class="pa-5">Загрузка данных...</h1>
        </v-col>
    </v-container>
</template>

<script>

export default {
    name: "loadLayout",
    data () {
        return {

        }
    },
    components: {

    },
    methods: {
        
    }
}
</script>