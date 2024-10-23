<template>
  <v-sheet
      class="chat-messages"
      
      elevation="2"
    >

    <div v-for="(block, index) in messages"
        :key="index">
      <message-vue 
        :title="block.user.username"
        :text="block.content"
        :date="block.create_time"
        />
      <!-- <v-card
         class="message-text"
         
      >
        <v-card-title>{{ block.title }}</v-card-title>
        <v-card-text>{{ block.text }}</v-card-text>
      </v-card> -->
    </div>
    </v-sheet>
</template>
  
<script>
import MessageVue from './Message.vue';
import { mapActions, mapGetters} from "vuex";

export default {
    name: 'listMessages',
    data() {
      return {
        // blocks: [
        //   { title: 'Блок 1', text: 'Текст блока 1' , date: Date(Date.now())},
        //   { title: 'Блок 2', text: 'Текст блока 2' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   { title: 'Блок 3', text: 'Текст блока 3' , date: Date(Date.now())},
        //   // Добавьте больше блоков по мере необходимости
        // ]
      };
    },
    computed:{
      ...mapGetters({
        messages: "messages"
      })
    },
    methods:{
      ...mapActions(["getAllMessages"])
    },
    components:{
      MessageVue
    },
    async mounted(){
      await this.getAllMessages()
    }
  };
  </script>

<style>
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.message {
  margin-bottom: 10px;
}
</style>