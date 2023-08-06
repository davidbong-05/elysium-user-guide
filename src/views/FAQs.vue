<template>
  <v-container fluid>
    <h1>Frequently Asked Questions</h1>
    <v-divider class="my-2"></v-divider>
    <v-card theme="dark" class="px-10 py-2">
      <v-card-title class="text-h5">
        Why my NFT does not show up on my profile page after I mint/buy it?
      </v-card-title>
      <v-card-subtitle> There are two cases </v-card-subtitle>
      <v-card-title class="pb-0 mb-0 text-h6">Case 1</v-card-title>
      <v-card-text
        >Check your "My Collection Page" and make sure you linked the collection
        of that NFT.</v-card-text
      >

      <v-card-title class="pb-0 mb-0 text-h6">Case 2</v-card-title>
      <v-card-text>
        You listed the NFT for sale, check out "OnSale" tab inside your profile
        page.
      </v-card-text>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <v-card theme="dark" class="px-10 py-2">
      <v-card-title class="text-h5">
        Why the Top Collections on the homepage does not load?
      </v-card-title>
      <v-card-text>
        Make sure that your MetaMask is properly setup and it is on the Sepolia
        Test Network. <br />
        Checkout the
        <v-btn
          class="px-1"
          to="/getting-started"
          variant="text"
          color="primary"
        >
          Getting Started
        </v-btn>
        page for more information.
      </v-card-text>
    </v-card>
    <v-divider class="my-2"></v-divider>
    <div class="d-flex justify-space-between">
      <v-btn
        class="my-6"
        prepend-icon="mdi-chevron-left"
        variant="plain"
        to="/getting-started"
      >
        Getting Started
      </v-btn>
      <v-btn
        class="my-6"
        append-icon="mdi-creation"
        color="primary"
        variant="flat"
        href="https://elysium-nft-marketplace.netlify.app/"
        target="_blank"
      >
        Try Now
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
//
</script>
