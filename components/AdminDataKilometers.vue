<template>
  <div class="container">
    <DataTable :value="data" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
               paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
               :rowsPerPageOptions="[10,25,50]" responsiveLayout="scroll"
               currentPageReportTemplate="Zeigt {first} bis {last} von {totalRecords} Einträgen"
    >
      <template #header>
        <h2 class="m-0">Kilometer</h2>
      </template>
      <Column sortable field="name" header="Name"></Column>
      <Column sortable field="kilometers" header="Kilometer">
        <template #body="slotProps">
          {{
            new Intl.NumberFormat('de-DE', {
              minimumFractionDigits: 3,
              maximumFractionDigits: 3,
            }).format(slotProps.data.kilometers)
          }}
        </template>
      </Column>
      <Column>
        <template #body="slotProps">
          <div class="flex justify-content-end">
            <u-button type="button" label="Löschen" class="p-button-rounded"
                      @click="showDetails(slotProps.data)"></u-button>
          </div>
        </template>
      </Column>
    </DataTable>

    <Dialog :visible.sync="showInfo" header="Details" :modal="true">
      <div class="flex justify-content-end mt-2">
        <u-button type="button" label="Delete" class="p-button-danger p-button-rounded"
                  @click="deleteItem(currentData.id)"></u-button>
      </div>
      <span>Name:</span> {{ currentData.name }}<br/>
      <span>Kilometer:</span> {{
        new Intl.NumberFormat('de-DE', {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        }).format(currentData.kilometers)
      }} km
      <div class="mt-4">
        <img :src="currentData.image" alt="Image">
      </div>
    </Dialog>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import UButton from './UButton'

export default {
  name: 'AdminDataKilometers',
  components: { UButton, DataTable, Dialog, Column },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
    currentData: {},
    showInfo: false,
    error: '',
  }),
  methods: {
    async showDetails (data) {
      try {
        this.currentData = (await this.$axios.$get(`${ this.$config.api }/kilometers/${ data.id }`))
        this.showInfo = true
      } catch (err) {
        this.err = err.message
      }
    },
    async deleteItem (id) {
      try {
        await this.$axios.$delete(`${ this.$config.api }/kilometers/${ id }`)
        this.$emit('delete')
        this.showInfo = false
      } catch (err) {
        this.err = err.message
      }
    }
  }
}
</script>

<style scoped>

</style>
