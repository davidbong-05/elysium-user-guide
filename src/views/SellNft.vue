<template>
  <v-container fluid>
    <h1>Sell NFT</h1>
    <v-divider class="my-2"></v-divider>
    <Precondition />
    <v-divider class="my-2"></v-divider>
    <ListNftForSale id="list-nft-for-sale" />
    <v-divider class="my-2"></v-divider>
    <RemoveNftFromSaleList id="remove-nft-from-sale-list" />
    <div class="d-flex justify-space-between">
      <v-btn
        class="my-6"
        prepend-icon="mdi-chevron-left"
        variant="plain"
        to="/mint-nft"
      >
        Mint NFT
      </v-btn>
      <v-btn
        class="my-6"
        append-icon="mdi-chevron-right"
        variant="plain"
        to="/buy-nft"
      >
        Buy NFT
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import Precondition from "@/components/sellNft/precondition.vue";
import ListNftForSale from "@/components/sellNft/listNftForSale.vue";
import RemoveNftFromSaleList from "@/components/sellNft/removeNftFromSaleList.vue";
</script>
