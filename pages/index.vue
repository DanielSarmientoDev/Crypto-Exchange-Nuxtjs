<template>
  <div
    class="container md:container h-3/4 sm:mx-auto mt-10 rounded-xl bg-light"
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
      :headers="headers"
      :items="coins"
      hide-default-footer
      :search="search"
      :items-per-page="5"
      class="table-history"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.rank }}</td>
        <td class="text-xs-right">
          {{ props.item.name }}
        </td>
        <td class="text-xs-right">
          {{ props.item.supply }}
        </td>
        <td class="text-xs-right">
          {{ props.item.maxSupply }}
        </td>
        <td class="text-xs-right">
          {{ props.item.marketCapUsd }}
        </td>
        <td class="text-xs-right">
          {{ props.item.volumeUsd24Hr }}
        </td>
        <td class="text-xs-right">
          {{ props.item.changePercent24Hr }}
        </td>
        <td class="text-xs-right">
          {{ props.item.priceUsd | formatDate }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      coins: [],
      headers: [
        { text: 'Rank', value: 'rank' },
        { text: 'Nombre', value: 'name' },
        { text: 'Supply', value: 'supply' },
        { text: 'Max Supply', value: 'maxSupply' },
        { text: 'Market Cap Usd', value: 'marketCapUsd' },
        { text: 'Volume Usd 24Hr', value: 'volumeUsd24Hr' },
        { text: 'Change Percent 24Hr', value: 'changePercent24Hr' },
        { text: 'Precio', value: 'priceUsd' },
      ],
    }
  },
  methods: {
    async getData() {
      await this.$axios.get('/assets?limit=1000').then((response) => {
        this.coins = response.data.data
        console.log(response)
      })
    },
  },
  mounted() {
    this.getData()
    this.$vs.notification({
      title: 'welcome',
      sticky: true,
      color: '#7c9dd5',
      text: `If you want to give us your opinion, find me on my social networks.`,
    })
  },
}
</script>
