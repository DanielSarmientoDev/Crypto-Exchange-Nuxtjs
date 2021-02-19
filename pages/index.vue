<template>
  <div
    class="container md:container h-screen sm:mx-auto mt-10 rounded-xl bg-light"
  >
    <div
      class="container md:container relative h-20 sm:mx-auto mt-10 rounded-xl bg-light"
    >
      <v-text-field
        v-model="search"
        class="bg-white w-60 p-5 m-5 absolute inset-y-0 right-0 rounded-xl"
        append-icon="mdi-magnify"
        label="Search"
        color="blue"
        single-line
      ></v-text-field>
    </div>
    <v-data-table
      id="table-container"
      :items-per-page="5"
      class="table-history"
      :headers="headers"
      :search="search"
      :items="coins"
      hide-default-footer
      single-select
      sort-by="position"
      sort-desc
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            {{ item.rank }}
          </td>
          <td>
            {{ item.name }}
            {{ item.symbol }}
          </td>
          <td v-if="item.priceUsd != null">
            {{ item.priceUsd | currency }}
          </td>
          <td v-else>Not found</td>
          <td v-if="item.marketCapUsd != null">
            {{ item.marketCapUsd | numFormat }}
          </td>
          <td v-else>Not found</td>
          <td>
            {{ item.changePercent24Hr | percentFilter }}
          </td>
        </tr>
      </template>
    </v-data-table>
    <vs-button>
      Ver información detallada
      <template #animate>
        <v-icon>mdi-plus</v-icon>
      </template>
    </vs-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      coins: [],
      headers: [
        { text: 'Ranking', value: 'rank' },
        { text: 'Nombre', value: 'name' },
        { text: 'Precio', value: 'priceUsd' },
        { text: '	Cap. de Mercado', value: 'marketCapUsd' },
        { text: 'Variación 24hr', value: 'changePercent24Hr' },
      ],
    }
  },
  methods: {
    async getCoins() {
      await this.$axios
        .get('/assets?limit=1000')
        .then((response) => {
          this.coins = response.data.data
          this.$vs.notification({
            title: 'Carga completa',
            sticky: true,
            color: '#7c9dd5',
            text: `Se ha cargado los datos correctamente.`,
          })
        })
        .catch((error) => {
          this.$vs.notification({
            title: 'welcome',
            sticky: true,
            color: 'danger',
            text: `${error}`,
          })
        })
    },
  },
  mounted() {
    this.getCoins()
  },
}
</script>
