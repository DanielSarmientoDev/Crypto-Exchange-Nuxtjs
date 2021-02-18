<template>
  <v-app class="bg-white w-screen h-screen">
    <navBar />
    <v-main>
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
