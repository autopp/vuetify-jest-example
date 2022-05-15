<template>
  <v-menu attach="#test">
    <template #activator="{ on, attrs }">
      <v-btn data-testid="menu-btn" color="primary" v-bind="attrs" v-on="on">
        Dropdown
      </v-btn>
      <span id="test"></span>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheMenu",
  data: () => ({
    items: ["item 1", "item 2", "item 3"],
  }),
});
</script>
