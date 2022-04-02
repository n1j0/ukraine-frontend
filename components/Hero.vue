<template>
  <div class="bg-gray-900 px-4 py-4 md:px-6 lg:px-8">
    <div class="container flex flex-wrap md:align-items-center">
      <div class="w-12 md:w-9 lg:w-9 p-4">
        <h1 class="text-6xl font-bold text-white mt-0 mb-4 lg:mb-8">FH Salzburg hilft Ukraine</h1>
        <div class="text-gray-400 mt-0 mb-5 md:mb-0">
          <p class="text-3xl line-height-2">
            Jetzt aktive Soforthilfe! Später helfen wir als Hochschule ukrainischen Studierenden
          </p>
        </div>
      </div>
      <div class="w-12 md:w-3 lg:w-3 text-center lg:text-right overflow-hidden">
        <img src="~assets/svg/ukraine.svg" alt="Image" class="w-6 md:w-12">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hero',
}
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
