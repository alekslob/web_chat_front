export default{
    state:{
        token: null,
        refresh_token: ''
    },
    mutations:{
        setToken (state, data) {
            state.token = data ? "Bearer " + data : null
        }
    },
    getters:{
        token (state) {
            return state.token
        },
    },
    actions:{
        async auth(ctx, data) {
            let r = await ctx.dispatch('provideRequest', ({endpoint: '/auth/', body: data}))
            if (r) { 
                localStorage.refresh_token = r.refresh_token
                ctx.commit('setToken', r.token) 
            }
            return r
          },
        async login(ctx, data) {
            let r = await ctx.dispatch('provideRequest', ({endpoint: '/login/', body: data}))
            if (r) { 
                localStorage.refresh_token = r.refresh_token
                ctx.commit('setToken', r.token) 
            }
            return r
        },
        async refresh(ctx, data) {
            try{
                var refresh_token = localStorage.refresh_token || null
                ctx.commit('setToken', refresh_token) 
                let r = await ctx.dispatch('provideRequest', ({endpoint: '/refresh/', body: data, method: "POST"}))
                if (r) { 
                    localStorage.refresh_token = r.refresh_token
                    ctx.commit('setToken', r.token) 
                }
            } catch {
                localStorage.clear()
            }
        },
        exit(ctx){
            localStorage.clear()
            ctx.commit('setToken', null)
        }
    }
}