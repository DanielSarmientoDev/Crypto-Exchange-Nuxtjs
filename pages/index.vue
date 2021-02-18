<template>
  <div class="container md:container h-1/2 sm:mx-auto mt-10 rounded-xl">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="coins"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      coins: [],
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Precio', value: 'priceUsd' },
      ],
    }
  },
  methods: {
    async getData() {
      await this.$axios.get('/assets?limit=10').then((response) => {
        this.coins = response.data.data
        console.log(response)
      })
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style></style>
