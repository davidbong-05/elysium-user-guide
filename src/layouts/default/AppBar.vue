<template>
  <v-app-bar theme="dark" color="black">
    <v-app-bar-title class="font-weight-black text-h5" @click="home()">
      <v-icon icon="mdi-alpha-e-box" size="50" />
      <span class="d-none d-sm-inline-block ms-3">Elysium</span>
      <span class="d-none d-sm-inline-block ms-3 text-primary">User Guide</span>
    </v-app-bar-title>
    <v-btn
      class="me-2"
      large
      prepend-icon="mdi-creation"
      color="white"
      href="https://elysium-nft-marketplace.netlify.app/"
      target="_blank"
    >
      Live Demo
    </v-btn>
    <v-btn
      class="me-2"
      large
      prepend-icon="mdi-github"
      color="white"
      href="https://github.com/davidbong-05/elysium"
      target="_blank"
    >
      GitHub
    </v-btn>
    <v-btn
      class="me-2"
      large
      prepend-icon="mdi-card-account-details"
      color="white"
      to="/contact-me"
    >
      Contact Me
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const home = async () => {
      await router.push("/");
    };
    return { home };
  },
};
</script>
