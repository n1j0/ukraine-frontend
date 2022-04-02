<template>
  <div class="surface-ground px-4 py-6 md:px-6 lg:px-8">
    <div class="container">
      <TabView>
        <TabPanel header="Kilometer">
          <kilometers/>
        </TabPanel>
        <TabPanel header="Spenden">
          <donations/>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script>
import Donations from '@/components/Donations'
import Kilometers from '@/components/Kilometers'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

export default {
  name: 'Forms',
  components: { Donations, Kilometers, TabPanel, TabView },
}
</script>

<style scoped>
::v-deep .p-tabview-nav li {
  width: 50%;
}

::v-deep .p-tabview-nav li a {
  display: flex;
  justify-content: center;
}

::v-deep span.mandatory {
  color: var(--red-600)
}

::v-deep small {
  font-size: 0.85rem;
}
</style>
