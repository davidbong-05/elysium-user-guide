<template>
  <v-navigation-drawer class="w-auto" theme="dark" permanent>
    <v-list class="mx-4 font-weight-bold text-capitalize" density="compact" nav>
      <v-list-item class="text-primary" to="/" :active="false" variant="text">
        <v-icon icon="mdi-script-text"></v-icon>
        Introduction
      </v-list-item>
      <v-list-item
        class="text-primary"
        to="/getting-started"
        :active="false"
        variant="text"
      >
        <v-icon icon="mdi-speedometer-slow"></v-icon>
        Getting Started
      </v-list-item>
      <v-list-item
        title="Setup MetaMask"
        to="/getting-started#setup-meta-mask"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Sign Up"
        to="/getting-started#sign-up"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Log In"
        to="/getting-started#log-in"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Edit Profile"
        to="/getting-started#edit-profile"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Log Out"
        to="/getting-started#log-out"
        variant="plain"
      ></v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item
        class="text-primary"
        to="/manage-nft-collection"
        :active="false"
        variant="text"
      >
        <v-icon icon="mdi-cards"></v-icon>
        Manage NFT Collection
      </v-list-item>
      <v-list-item
        title="Create NFT Collection"
        to="/manage-nft-collection#create-nft-collection"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Link NFT Collection"
        to="/manage-nft-collection#link-nft-collection"
        variant="plain"
      ></v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item
        class="text-primary"
        to="/mint-nft"
        :active="false"
        variant="text"
      >
        <v-icon icon="mdi-pencil-ruler"></v-icon>
        Mint NFT
      </v-list-item>
      <v-divider class="my-2"></v-divider>
      <v-list-item
        class="text-primary"
        to="/sell-nft"
        :active="false"
        variant="text"
      >
        <v-icon icon="mdi-cash-register"></v-icon>
        Sell NFT
      </v-list-item>
      <v-list-item
        title="List NFT for Sale"
        to="/sell-nft#list-nft-for-sale"
        variant="plain"
      ></v-list-item>
      <v-list-item
        title="Remove NFT from Sale List"
        to="/sell-nft#remove-nft-from-sale-list"
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
