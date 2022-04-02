<template>
  <main>
    <admin-data-kilometers :data="data.kilometers" class="mb-7" @delete="refresh"/>
    <admin-data-donations :data="data.donations" @delete="refresh"/>
  </main>
</template>

<script>
import AdminDataDonations from '../components/AdminDataDonations'
import AdminDataKilometers from '../components/AdminDataKilometers'

export default {
  name: 'admin',
  middleware: ['auth'],
  components: { AdminDataDonations, AdminDataKilometers },
  async asyncData ({ $axios, $config }) {
    let kilometers
    let donations
    try {
      const [km, don] = await Promise.all([
        $axios.$get(`${ $config.api }/kilometers`),
        $axios.$get(`${ $config.api }/donations`)
      ])
      kilometers = km
      donations = don
    } catch (e) {
      kilometers = []
      donations = []
    }

    const data = {
      kilometers,
      donations,
    }

    return {
      data
    }
  },
  methods: {
    async refresh() {
      await this.$nuxt.refresh()
    }
  }
}
</script>

<style scoped>

</style>
