<template>
  <v-app>
    <Analytics />
    <SpeedInsights />
    <default-app-bar />
    <default-side-bar />
    <default-view class="ms-6" />
  </v-app>
</template>

<script setup>
import DefaultAppBar from "./AppBar.vue";
import DefaultSideBar from "./SideBar.vue";
import DefaultView from "./View.vue";
import { inject } from "@vercel/analytics";

inject();
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
