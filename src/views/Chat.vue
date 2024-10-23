<template>
	<v-container class="chat-container">
        <list-messages align-self="start"/>
        <message-field/>
    </v-container>
</template>

<script>
import MessageField from '@/components/Chat/MessageField.vue'
import ListMessages from '@/components/Chat/ListMessages.vue'

export default {
    name: 'ChatView',
    components:{
        MessageField,
        ListMessages
    },
}
</script>

<style>
.chat-container {
  height: 92vh;
  display: flex;
  flex-direction: column;
}

</style>