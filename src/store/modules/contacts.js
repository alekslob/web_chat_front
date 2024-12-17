export default{
    
    state:{
        contacts: []
    },
    mutations:{
        setContacts (state, data) {
            state.contacts = data
        }
    },
    getters:{
        contacts (state) {
            return state.contacts
        },
    },

    actions:{
        async getContacts(ctx) {
            let r = [
                { id: 0, email: 'dlabla@mail.ru'}]
            // let r = await ctx.dispatch('provideRequest', ({endpoint: '/info/user/', method: "GET"}))
            if (r) { 
                ctx.commit('setContacts', r) 
            }
        },
    },
}