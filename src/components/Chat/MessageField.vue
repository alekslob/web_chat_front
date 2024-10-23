<template>
    <v-card>
        <v-form @submit.prevent="enterSendMessage">
            <v-text-field
                v-model="value"
                placeholder="Введите сообщение..."
                rows="2"
                no-resize
                :disabled="loading"
                
                >
                <template v-slot:loader>
                    <v-progress-linear
                    :active="loading"
                    color="primary"
                    :model-value="progress"
                    height="7"
                    indeterminate
                    ></v-progress-linear>
                </template>
            </v-text-field  >
        </v-form>
    </v-card>
</template>

<script>
import { mapActions, mapGetters} from "vuex";

export default {
    name: "messageField",
    data () {
        return {
            value: '',
            loading: false
        }
    },
    methods:{
        ...mapActions(["sendMessage", "getAllMessages"]),
        async enterSendMessage(){
            this.loading = true
            var messageData = {
                content: this.value,
                user_id: this.user.id
            }
            console.log("messageData", messageData)
            await this.sendMessage(messageData)
            await this.getAllMessages()
            this.value = ''
            this.loading = false
        }
    },
    computed:{
        ...mapGetters({
            user: "user"
        }),
        progress () {
            return Math.min(100, this.value.length * 10)
        },  
    }
}
</script>