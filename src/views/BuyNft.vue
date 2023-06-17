<template>
  <v-container fluid>
    <h1>Buy NFT</h1>
    <v-divider class="my-2"></v-divider>
    <Precondition />
    <v-divider class="my-2"></v-divider>
    <BuyNft id="buy-nft" />
    <v-divider class="my-2"></v-divider>
    <AddNftToCart id="add-nft-to-cart" />
    <v-divider class="my-2"></v-divider>
    <Checkout id="checkout" />
    <v-divider class="my-2"></v-divider>
    <RemoveNftFromCart id="remove-nft-from-cart" />
    <div class="d-flex justify-space-between">
      <v-btn
        class="my-6"
        prepend-icon="mdi-chevron-left"
        variant="plain"
        to="/sell-nft"
      >
        Sell NFT
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
import Precondition from "@/components/buyNft/precondition.vue";
import BuyNft from "@/components/buyNft/buyNft.vue";
import AddNftToCart from "@/components/buyNft/addNftToCart.vue";
import Checkout from "@/components/buyNft/checkout.vue";
import RemoveNftFromCart from "@/components/buyNft/removeNftFromCart.vue";
</script>
