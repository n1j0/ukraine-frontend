<template>
  <div class="surface-ground px-4 py-6 md:px-6 lg:px-8">
    <div class="container">
      <div class="surface-card shadow-2 border-round p-4">
        <div class="flex justify-content-center mb-4">
          <div class="text-900 font-medium text-3xl">Top 10</div>
        </div>
        <div class="u-grid">
          <div>
            <span class="block text-600 font-medium mb-3">KILOMETER</span>
            <ul class="p-0 m-0 list-none">
              <template v-if="data.kilometers.length > 0">
                <li v-for="(item, idx) in data.kilometers" :key="idx"
                    class="flex align-items-center py-2 surface-border"
                    :class="{ 'border-bottom-1': idx + 1 < data.kilometers.length }"
                >
                  <div
                    class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                    <span class="text-xl text-blue-500">{{ idx + 1 }}</span>
                  </div>
                  <span class="text-900 line-height-3">{{ item.name ? item.name : 'anonymous' }}:
                <span class="text-blue-500">
                  {{
                    Math.trunc(item.kilometers)
                  }} km
                </span>
            </span>
                </li>
              </template>
              <li v-else class="flex align-items-center py-2 surface-border">
                <div
                  class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                  <span class="text-xl text-blue-500">-</span>
                </div>
                <span class="text-900 line-height-3">-</span>
              </li>
            </ul>
          </div>
          <div>
            <span class="block text-600 font-medium mt-4 lg:mt-0">SPENDEN</span>
            <ul class="p-0 mx-0 mt-0 list-none">
              <template v-if="data.donations.length > 0">
                <li v-for="(item, idx) in data.donations" :key="idx"
                    class="flex align-items-center py-2 surface-border"
                    :class="{ 'border-bottom-1': idx + 1 < data.donations.length }"
                >
                  <div
                    class="w-3rem h-3rem flex align-items-center justify-content-center bg-yellow-100 border-circle mr-3 flex-shrink-0">
                    <span class="text-xl text-yellow-500">{{ idx + 1 }}</span>
                  </div>
                  <span class="text-900 line-height-3">{{ item.name ? item.name : 'anonymous' }}:
              <span class="text-yellow-500">{{
                  new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                  }).format(item.amount)
                }}</span>
            </span>
                </li>
              </template>
              <li v-else class="flex align-items-center py-2 surface-border">
                <div
                  class="w-3rem h-3rem flex align-items-center justify-content-center bg-yellow-100 border-circle mr-3 flex-shrink-0">
                  <span class="text-xl text-yellow-500">-</span>
                </div>
                <span class="text-900 line-height-3">-</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top10',
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.u-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 996px) {
  .u-grid {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
