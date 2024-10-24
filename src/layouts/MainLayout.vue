<template>
    <div v-if="!loading">
        <AppBar/>
        <v-main >
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </v-main>
      </div>
</template>

<script>

import { mapActions } from "vuex";
import AppBar from '../components/AppBar.vue';


export default {
    data () {
        return {
            loading: false
        }
    },
    components: {
        AppBar,
    },
    methods: {
      ...mapActions(["getUserInfo"]),
  },
    async mounted(){
        this.loading = true
        await this.getUserInfo()
        this.loading = false
    }
}
</script>