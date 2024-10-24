import { createStore } from 'vuex'
import auth from './modules/auth'
import user from './modules/user';
import messages from './modules/messages';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async provideRequest (ctx, {endpoint, body, method}) {
      try {
        let r = await fetch(
          endpoint, 
          {
          method: method ? method : "POST",
          headers: {
            'Content-Type': 'application/json', 
            "Authorization": ctx.getters.token
          },
          body: body ? JSON.stringify(body) : null,
          
        } );
        if (r.status == 500) {
          throw new Error("Ошибка соединения с сервером")
        }
        let data = await r.json()
        
        if (r.ok) return data 
        else {
          console.log(r)
          if (data.error_class == "Unauthorized") {
            await ctx.commit('setToken', null)
            localStorage.clear()
          }
          else{ 
            throw new Error(data.message);
          }
        }
      }
      catch (error){
        console.log(error)
        throw new Error(error.message)
      }
    },
  },
  modules: {
    auth,
    user,
    messages
  }
})
