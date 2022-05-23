<template>
  <div v-if="!successful" class="surface-card p-4 pt-6 shadow-2 border-round">
    <form class="p-fluid grid formgrid" @submit.prevent="onSubmit">
      <div class="field mb-5 col-12 md:col-6">
        <label for="nameKm">{{ $t('forms.name') }}</label>
        <InputText id="nameKm" v-model="name" type="text"/>
      </div>
      <div class="field mb-5 col-12 md:col-6">
        <label for="km">{{ $t('forms.kilometers.unit') }}<span class="mandatory">*</span></label>
        <InputNumber id="km" v-model="kilometers" :min="0" locale="de-DE" :maxFractionDigits="0" suffix=" km"
                     aria-describedby="km-help"/>
        <small id="km-help">{{ $t('forms.kilometers.hint') }}</small>
      </div>
      <div class="field mb-5 col-12">
        <label for="imageKm">{{ $t('forms.imageProof') }}<span class="mandatory">*</span></label>
        <u-file-upload id="imageKm" name="kilometers" @change="setFile"/>
      </div>
      <div v-if="error" class="field mb-5 col-12">
        <Message severity="error" @close="error = ''">{{ this.error }}</Message>
      </div>
      <div class="field flex justify-content-end col-12">
        <UButton class="button w-full md:w-auto" :label="$t('forms.submitButton')" icon="pi pi-arrow-right" iconPos="right"
                 type="submit" :loading="loading"/>
      </div>
      <div class="field col-12">
        <small class="text-600"><span class="mandatory">*</span> {{ $t('forms.mandatoryField') }}</small>
      </div>
    </form>
  </div>
  <success v-else />
</template>

<script>
import UFileUpload from '../components/FileUpload'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Message from 'primevue/message'
import Success from './Success'
import UButton from './UButton'

export default {
  name: 'Kilometers',
  components: { UButton, Success, Message, UFileUpload, InputText, InputNumber },
  data: () => ({
    name: '',
    kilometers: 0,
    file: null,
    error: '',
    successful: false,
    loading: false,
  }),
  methods: {
    setFile (evt) {
      this.file = evt || null
    },
    onSubmit () {
      this.error = ''
      if (this.kilometers === 0 || this.file === null) {
        this.error = this.$t('forms.kilometers.error')
        return
      }

      this.loading = true

      try {
        const reader = new FileReader()
        reader.onloadend = async () => {
          try {
            await this.$axios.$post(`${ this.$config.api }/kilometers`, {
              image: reader.result,
              name: this.name,
              kilometers: this.kilometers,
            })
            this.successful = true
            this.loading = false
          } catch (err) {
            this.error = err.message
            this.loading = false
          }
        }
        reader.readAsDataURL(this.file)
      } catch (err) {
        this.error = err.message
        this.loading = false
      }
    },
  }
}
</script>

<style scoped>

</style>
