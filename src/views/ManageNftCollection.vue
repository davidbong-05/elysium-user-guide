<template>
  <v-container fluid>
    <h1>Manage NFT Collection</h1>
    <v-divider class="my-2"></v-divider>
    <precondition />
    <v-divider class="my-2"></v-divider>
    <CreateNftCollection id="create-nft-collection" />
    <v-divider class="my-2"></v-divider>
    <LinkNftCollection id="link-nft-collection" />
    <v-divider class="my-2"></v-divider>
    <UnlinkNftCollection id="unlink-nft-collection" />
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
        append-icon="mdi-chevron-right"
        variant="plain"
        to="/mint-nft"
      >
        Mint NFT
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import Precondition from "@/components/manageNftCollection/precondition.vue";
import CreateNftCollection from "@/components/manageNftCollection/createNftCollection.vue";
import LinkNftCollection from "@/components/manageNftCollection/linkNftCollection.vue";
import UnlinkNftCollection from "@/components/manageNftCollection/unlinkNftCollection.vue";
</script>
