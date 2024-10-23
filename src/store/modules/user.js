export default{
    state:{
        user: {
            id: Number,
            username: String
        }
    },
    mutations:{
        setUser (state, data) {
            state.user = data
        }
    },
    getters:{
        user (state) {
            return state.user
        },
    },

    actions:{
        async getUserInfo(ctx) {
            let r = await ctx.dispatch('provideRequest', ({endpoint: '/info/user/', method: "GET"}))
            if (r) { 
                ctx.commit('setUser', r) 
            }
        },
    },
}