<template>
  <v-app class="w-screen h-screen">
    <navBar />
    <v-main class="bg-light">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import navBar from '@/components/shared/navBar'
export default {
  components: {
    navBar,
  },
}
</script>
<style></style>
