<template>
    <v-card
         class="message-card"
      >
        <v-card-title class="message-text">{{ title }}</v-card-title>
        <v-card-text class="message-text">{{ text }}</v-card-text>
        <v-card-text class="message-text-date">{{ formatDate}}</v-card-text>
      </v-card>
</template>

<script>
import {  format } from "date-fns";
export default {
    name: "messageComponent",
    props: {
        title: String,
        text: String,
        date: String
    },
    computed:{
      formatDate(){
        var newDate = new Date(this.date)
        var timeZoneHour = newDate.getTimezoneOffset() / 60;
        newDate.setTime(newDate.getTime() + (timeZoneHour*60 * 60 * 1000))
        return format(newDate, "yyyy-MM-dd hh:mm:ss")
      }
    },
}
</script>

<style>
.message-card {
  width: 700px;
  display:inline-block;
  margin-top: 20px;
}
.message-text {
  
  display: flex ;
  justify-content: start;
  
  /* height: 100px; */
}
.message-text-date {
  width: 700px;
  display: flex ;
  justify-content: end;
  
  /* height: 100px; */
}
</style>