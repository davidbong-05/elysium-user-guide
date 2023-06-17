<template>
  <v-card theme="dark" class="px-10 py-2">
    <v-card-title class="text-h5">List NFT for Sale</v-card-title>
    <v-card-subtitle>
      There are to methods to list a NFT for sale
    </v-card-subtitle>
    <v-card-title class="pb-0 mb-0 text-h6">Method 1</v-card-title>
    <v-card-subtitle> During NFT Minting </v-card-subtitle>
    <v-list>
      <v-list-item>
        Step 1: Turn on "List it for Sale on Elysium?" option and set the price
        when fill in NFT minting form
      </v-list-item>
      <v-list-item> Step 2: Click "Mint" button </v-list-item>
      <v-list-item>
        Step 2: Wait for MetaMask to pop up again and press "Confirm" for
        minting
      </v-list-item>
      <v-list-item>
        Step 4: Wait for MetaMask to pop up and press "Approve" for granting
        ELysium the permission to transfer the NFT token
      </v-list-item>
      <v-list-item>
        Step 5: Wait for MetaMask to pop up again and press "Confirm" for
        listing for sale
      </v-list-item>
      <v-list-item> Step 6: Wait for a response from Elysium </v-list-item>
    </v-list>
    <v-card-title class="pb-0 mb-0 text-h6">Method 2</v-card-title>
    <v-list>
      <v-list-item> Step 1: View an NFT </v-list-item>
      <v-list-item> Step 2: Click "Sell" button and set the price </v-list-item>
      <v-list-item>
        Step 3: Wait for MetaMask to pop up and press "Approve" granting ELysium
        the permission to transfer the NFT token
      </v-list-item>
      <v-list-item>
        Step 4: Wait for MetaMask to pop up again and press "Confirm" for
        listing for sale
      </v-list-item>
      <v-list-item> Step 5: Wait for a response from Elysium </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
//
</script>
