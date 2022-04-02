<template>
  <main>
    <template v-if="error.statusCode === 404">
      <div class="surface-section px-4 py-6 md:px-6 lg:px-8">
        <div class="w-6 mx-auto overflow-hidden"><img
          src="~/assets/svg/404.svg" alt="404 error"
          class="w-full"></div>
        <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>
        <p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
        <div class="text-center">
          <button class="p-button p-component" type="button" @click="$router.push('/')"><span
            class="pi pi-home p-button-icon p-button-icon-left"></span><span
            class="p-button-label">Go to homepage</span><span class="p-ink"></span></button>
        </div>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  name: 'error',
  props: [ 'error' ],
}
</script>

<style scoped>

</style>
