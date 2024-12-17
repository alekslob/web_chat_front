<template>
  <v-card flat>
    <v-card-text>
        
    </v-card-text>
  </v-card>    
</template>

<script>

import { mapActions, mapGetters} from "vuex";
export default {
    name: 'ContactsAdmin',
    computed:{
      ...mapGetters({
        contacts: "contacts"
      })
    },
    methods:{
        ...mapActions([
            
        ]),
    },
    async mounted(){
        //console.log(this.contacts)
    }
}
</script>
