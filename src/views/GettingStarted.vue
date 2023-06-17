<template>
  <v-container fluid>
    <h1>Getting Started</h1>
    <v-divider class="my-2"></v-divider>
    <SetupMetaMask id="setup-meta-mask" />
    <v-divider class="my-2"></v-divider>
    <SignUp id="sign-up" />
    <v-divider class="my-2"></v-divider>
    <Login id="log-in" />
    <v-divider class="my-2"></v-divider>
    <EditProfile id="edit-profile" />
    <v-divider class="my-2"></v-divider>
    <Logout id="log-out" />
    <div class="d-flex justify-space-between">
      <v-btn
        class="my-6"
        prepend-icon="mdi-chevron-left"
        variant="plain"
        to="/"
      >
        Introduction
      </v-btn>
      <v-btn
        class="my-6"
        append-icon="mdi-chevron-right"
        variant="plain"
        to="/manage-nft-collection"
      >
        Manage NFT Collection
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import SetupMetaMask from "@/components/gettingStarted/setupMetaMask.vue";
import SignUp from "@/components/gettingStarted/signUp.vue";
import Login from "@/components/gettingStarted/login.vue";
import EditProfile from "@/components/gettingStarted/editProfile.vue";
import Logout from "@/components/gettingStarted/logout.vue";
</script>
