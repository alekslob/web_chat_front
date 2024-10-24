<template>
    <v-container
        fluid
        style="height: 100vh; align-items: center; display: flex"
    >
    <v-row align="center" justify="center">
            <v-card
                class="pt-3 pa-3"
                elevation="10"
                outlined
                width="30%"
                max-width="500"
                style="border-width: 2px"
            >
                <v-card-title>Авторизация</v-card-title>
                <v-card-subtitle color="error" v-if="authError">
                            {{errorMessage}}
                        </v-card-subtitle>
                <v-form @submit.prevent="sendLogin">
                    <v-card-text>
                        <TextField
                            v-model="authData.username"
                            label="Имя пользователя"
                            type="text"
                        />
                    </v-card-text>
                    <v-card-text>
                        <TextField
                            v-model="authData.password"
                            label="Пароль"
                            type="Password"
                        />
                        
                    </v-card-text>
                    
                    <v-card-actions>
                        <v-row align="end" justify="end">
                            <v-btn
                                text
                                :loading="loading"
                                color="primary"
                                @click="sendAuth"
                            >
                                Создать
                            </v-btn>
                            <v-btn
                                text
                                :loading="loading"
                                type="submit"
                                color="primary"
                            >
                                Вход
                            </v-btn>
                        </v-row>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import TextField from "../TextField.vue";
import { mapActions } from "vuex";

export default {
    name: "loginComponent",
    data() {
        return {
            authData: {
                password: "",
                username: "",
            },
            loading: false,
            authError: false,
            errorMessage: '',
        };
    },
    methods: {
        ...mapActions(["login", "auth"]),
        async sendAuth() {
            this.loading = true;
            try{
                await this.auth(this.authData);
                this.authError = false
            }
            catch (error){
                this.authError = true
                this.errorMessage = error.message
            }
            
            this.loading = false;
        },
        async sendLogin() {
            this.loading = true;
            try{
                await this.login(this.authData);
                this.authError = false
            }
            catch (error){
                this.authError = true
                this.errorMessage = error.message
            }
            
            this.loading = false;
        },
    },
    components: {
        TextField
    },
}
</script>