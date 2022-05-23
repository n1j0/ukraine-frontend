<template>
  <div class="surface-section px-4 py-6 md:px-6 lg:px-8 text-center">
    <img src="~assets/svg/logo.svg" alt="Image" height="50">
    <div class="font-medium text-900 mt-4 mb-3">Fachhochschule Salzburg GmbH © 2022</div>
    <div>
      <a href="https://www.fh-salzburg.ac.at/impressum" target="_blank">{{ $t('footer.imprint') }}</a>
      <a href="https://www.fh-salzburg.ac.at/datenschutz" target="_blank">{{ $t('footer.dataSecurity') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
