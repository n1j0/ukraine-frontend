<template>
  <div class="surface-ground px-4 py-6 md:px-6 lg:px-8">
    <div class="container">
      <div class="u-grid">
        <kilometers-collected :kilometers="stats.kilometers"/>
        <MoneyRaised :money="stats.donations"/>
      </div>
    </div>
  </div>
</template>

<script>
import KilometersCollected from '../components/KilometersCollected'
import MoneyRaised from '../components/MoneyRaised'

export default {
  name: 'Stats',
  components: { KilometersCollected, MoneyRaised },
  props: {
    stats: Object,
    required: true,
  },
}
</script>

<style scoped>
.u-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.5rem;
}

@media (min-width: 768px) {
  .u-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

::v-deep img {
  max-width: 50%;
}

::v-deep .box {
  transition: all 0.3s ease-in-out;
}

::v-deep .box:hover {
  transform: scale(1.02);
}
</style>
