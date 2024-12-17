<template>
<v-card class="admin-card">
    <div class="d-flex flex-row">
    <v-tabs
      v-model="tab"
      bg-color="background"
      direction="vertical"
    >
      <v-tab value="pannelContacts">Контакты</v-tab>
      <v-tab value="pannelUsers">Пользователи</v-tab>
      <v-tab value="pannelInstructions" disabled="true">Инструкции</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="pannelContacts">
          <Contacts/>
        </v-tabs-window-item>

        <v-tabs-window-item value="pannelUsers">
            <v-card flat>
                <v-card-text>
          Two
                </v-card-text>
            </v-card>
        </v-tabs-window-item>

        <v-tabs-window-item value="pannelInstructions">
            <v-card flat>
                <v-card-text>
          Three
                </v-card-text>
            </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
</div>
</v-card>
</template>

<script>
import Contacts from '@/components/Admin/Contacts.vue';
export default {
    name: 'AdminPannelView',
    data: () => ({
      tab: 0,
    }),
    components:{
        Contacts
    }
}
</script>

<style>
.admin-card {
  height: 92vh;
  display: flex;
  flex-direction: column;
}

</style>