<template>
  <v-card theme="dark" class="px-10 py-2">
    <v-card-title class="text-h5">Remove NFT from Cart</v-card-title>
    <v-card-subtitle>
      There are two methods to remove NFT from cart
    </v-card-subtitle>
    <v-card-title class="pb-0 mb-0 text-h6">Method 1</v-card-title>
    <v-list>
      <v-list-item>
        Step 1: Click the
        <v-icon icon="mdi-cart"></v-icon> button on the app bar
      </v-list-item>
      <v-list-item> Step 2: Hover to the NFT you wished to remove</v-list-item>
      <v-list-item>
        Step 3: Click
        <v-icon color="red" icon="mdi-delete"></v-icon>
        button</v-list-item
      >
    </v-list>
    <v-card-title class="pb-0 mb-0 text-h6">Method 2</v-card-title>
    <v-card-subtitle>
      This method will remove everything from cart
    </v-card-subtitle>
    <v-list>
      <v-list-item>
        Step 1: Click the
        <v-icon icon="mdi-cart"></v-icon> button on the app bar
      </v-list-item>
      <v-list-item>
        Step 2: Click "<span class="text-red">CLEAR ALL</span>"
        button</v-list-item
      >
    </v-list>
  </v-card>
</template>

<script setup>
//
</script>
