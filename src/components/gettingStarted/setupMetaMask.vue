<template>
  <v-card theme="dark" class="px-10 py-2">
    <v-card-title class="text-h5">Setting Up MetaMask</v-card-title>
    <v-list>
      <v-list-item>
        Step 1: Install MetaMask:
        <a href="https://metamask.io/download/" target="_blank">
          https://metamask.io/download/
        </a>
      </v-list-item>
      <v-list-item title="Step 2:">
        <v-card-text>
          Get Sepolia ETH from:
          <a href="https://sepoliafaucet.com/" target="_blank">
            https://sepoliafaucet.com/
          </a>
        </v-card-text>
        <span class="text-center">OR</span>
        <v-card-text>
          Import one of the following tester account into your MetaMask:
          <ul class="ms-4 my-4">
            <li>
              <v-label class="mb-4">Account [1]:</v-label>
              <v-text-field
                class="w-50"
                label="Public Key"
                variant="outlined"
                density="compact"
                readonly
                model-value="0x99a7ae18469070cfb23dfa008bd6c995bfea3536"
              />
              <v-text-field
                class="w-50"
                label="Private Key"
                variant="outlined"
                density="compact"
                readonly
                model-value="c58dd7902db5c20835fd0e3166ee0e025de1dd43397207855a5b40fa6bdf0be4"
              />
            </li>
            <li>
              <v-label class="mb-4">Account [2]:</v-label>
              <v-text-field
                class="w-50"
                label="Public Key"
                variant="outlined"
                density="compact"
                readonly
                model-value="0x25F1B49163fA8D63cC40fF65636E82f1f04f7a67"
              />
              <v-text-field
                class="w-50"
                label="Private Key"
                variant="outlined"
                density="compact"
                readonly
                model-value="d10420477e485f2e2363ef71fa35bbe0361c1b6057bc1e75d7922acf9ff47317"
              />
            </li>
            <li>
              <v-label class="mb-4">Account [3]:</v-label>
              <v-text-field
                class="w-50"
                label="Public Key"
                variant="outlined"
                density="compact"
                readonly
                model-value="0xb7894C30E8407b41db5aE47e71dAf40e77510322"
              />
              <v-text-field
                class="w-50"
                label="Private Key"
                variant="outlined"
                density="compact"
                readonly
                model-value="363525f5ea7bfb817c0f506c8e868dcd75c6e5888993ffde3bbc0598fb5e8b0a"
              />
            </li>
          </ul>
        </v-card-text>
      </v-list-item>
      <v-list-item>
        Step 3: Add Sepolia Testnet:
        <a
          href="https://support.metamask.io/hc/en-us/articles/13946422437147-How-to-view-testnets-in-MetaMask"
          target="_blank"
        >
          https://support.metamask.io/hc/en-us/articles/13946422437147-How-to-view-testnets-in-MetaMask
        </a>
      </v-list-item>
      <v-list-item>Step 4: Change to Sepolia Testnet </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
//
</script>
