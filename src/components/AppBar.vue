<template>
	<v-app-bar app color="primary" dark clipped-left clipped-right>
		<v-icon class="pr-3" x-large>mdi-monitor-multiple</v-icon>
		<h1>{{title}}</h1>
		<v-row align="center" justify="space-between">
            <v-spacer></v-spacer>

        </v-row>
        <InfoBlock v-if="token!=null">
			<h1>{{user.username}}</h1>
		</InfoBlock>
        <InfoBlock v-if="token!=null">
			<v-btn
                text
				@click="exit"
                color="success"
            >
                Выход
            </v-btn>
		</InfoBlock>
        
	</v-app-bar>
</template>

<script>
import InfoBlock from "./InfoBlock.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
            title: document.title
        };
	},
	components: {
		InfoBlock,
	},
	methods: {
		...mapActions(["exit"]),
	},
	computed: {
		...mapGetters({
            token: 'token',
			user: 'user'
			// version: "version",
		}),
	}
};
</script>