<template>
  <v-navigation-drawer width="max-content" theme="dark" permanent>
    <v-list class="mx-4 font-weight-bold text-capitalize" density="compact" nav>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-script-text"></v-icon>
        Introduction
      </v-list-item>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-speedometer-slow"></v-icon>
        Getting Started
      </v-list-item>
      <v-list-item title="Setup MetaMask" to="/" variant="plain"></v-list-item>
      <v-list-item title="Sign Up" to="/#" variant="plain"></v-list-item>
      <v-list-item title="Log In" to="/#" variant="plain"></v-list-item>
      <v-list-item title="Edit Profile" to="/#" variant="plain"></v-list-item>
      <v-list-item title="Log Out" to="/#" variant="plain"></v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-cards"></v-icon>
        Manage NFT Collection
      </v-list-item>
      <v-list-item
        title="Create NFT Collection"
        to="/#"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Link NFT Collection"
        to="/"
        variant="plain"
      ></v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-pencil-ruler"></v-icon>
        Mint NFT
      </v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-cash-register"></v-icon>
        Sell NFT
      </v-list-item>
      <v-list-item
        title="List NFT for Sale"
        to="/"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Remove NFT from Sale List"
        to="/"
        variant="plain"
      ></v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-cash"></v-icon>
        Buy NFT
      </v-list-item>
      <v-list-item title="Buy NFT" to="/" variant="plain"></v-list-item>
      <v-list-item title="Add NFT to Cart" to="/" variant="plain"></v-list-item>
      <v-list-item title="Checkout" to="/" variant="plain"></v-list-item>
      <v-list-item
        title="Remove NFT from Cart"
        to="/"
        variant="plain"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
//
</script>
