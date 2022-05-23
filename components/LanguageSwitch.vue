<script>
import Dropdown from 'primevue/dropdown';

export default {
  name: 'LanguageSwitch',
  components: { Dropdown },
  data() {
    return {
      selected: this.$i18n.locale.toUpperCase(),
    }
  },
  computed: {
    options() {
      return this.$i18n.locales.map(locale => locale.code.toUpperCase())
    },
  },
  methods: {
    setLocale(evt) {
      this.$i18n.setLocale(evt.toLowerCase())
    },
  },
}
</script>

<template>
  <span class="language-switch">
    <Dropdown v-model="selected" :options="options" @input="setLocale"/>
  </span>
</template>

<style scoped>
.language-switch {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

::v-deep .p-dropdown-label.p-inputtext {
  padding: 0.65rem;
}

::v-deep .p-dropdown .p-dropdown-trigger {
  width: 1.5rem
}

::v-deep .p-dropdown-trigger-icon.pi.pi-chevron-down {
  position: absolute;
  right: 0.5rem;
}
</style>
