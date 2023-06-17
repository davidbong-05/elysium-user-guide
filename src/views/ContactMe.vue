<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="9">
        <h1 class="text-center">
          Hello there, thank you for checkout my project!
        </h1>
        <p class="my-4 text-justify">
          My name is David Bong, and I'm a final year Software Engineering
          Undergrad based in Sarawak, Malaysia. Elysium is my final year
          project. Please feel free to reach out to me at any platform below:
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-right">
        <v-btn
          class="text-white font-weight-bold"
          color="#0077B5"
          href="https://www.linkedin.com/in/davidbong05/"
          target="_blank"
          width="200"
          height="50"
          size="large"
          variant="flat"
        >
          <v-icon icon="mdi-linkedin" size="large" start />
          LinkedIn
        </v-btn>
      </v-col>
      <v-col class="text-center">
        <v-btn
          class="text-white font-weight-bold"
          color="#000000"
          href="https://github.com/davidbong-05"
          target="_blank"
          width="200"
          height="50"
          size="large"
          variant="flat"
        >
          <v-icon icon="mdi-github" size="large" start />
          GitHub
        </v-btn>
      </v-col>
      <v-col class="text-left">
        <v-btn
          class="text-white font-weight-bold"
          color="#BB001B"
          href="mailto://davidbong05@gmail.com"
          target="_blank"
          width="200"
          height="50"
          size="large"
          variant="flat"
        >
          <v-icon icon="mdi-gmail" size="large" start />
          Gmail
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>
