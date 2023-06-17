<template>
  <v-container fluid>
    <h1>Mint</h1>
    <v-divider class="my-2"></v-divider>
    <Precondition />
    <v-divider class="my-2"></v-divider>
    <MintNft id="mint-nft" />
    <div class="d-flex justify-space-between">
      <v-btn
        class="my-6"
        prepend-icon="mdi-chevron-left"
        variant="plain"
        to="/manage-nft-collection"
      >
        Manage NFT Collection
      </v-btn>
      <v-btn
        class="my-6"
        append-icon="mdi-chevron-right"
        variant="plain"
        to="/sell-nft"
      >
        Sell NFT
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import Precondition from "@/components/mintNft/precondition.vue";
import MintNft from "@/components/mintNft/mintNft.vue";
</script>
