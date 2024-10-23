export default{
    state:{
        messages: []
    },
    mutations:{
        setMessages (state, data) {
            state.messages = data
        }
    },
    getters:{
        messages (state) {
            return state.messages
        },
    },

    actions:{
        async getAllMessages(ctx) {
            let r = await ctx.dispatch('provideRequest', ({endpoint: '/messages/', method: 'GET'}))
            if (r) { 
                ctx.commit('setMessages', r) 
            }
        },
        async sendMessage(ctx, data) {
            await ctx.dispatch('provideRequest', ({endpoint: '/messages/', body: data}))
            
        },
    },
}