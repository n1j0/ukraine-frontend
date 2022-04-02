<script>
export default {
  name: 'MoneyRaised',
  props: {
    money: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    display() {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.money)
    }
  }
}
</script>

<template>
  <div class="box shadow-2 surface-card flex justify-content-between py-5 px-3 overflow-hidden">
    <div class="flex flex-column justify-content-between align-items-center">
      <div class="text-center font-bold text-6xl mt-3 mb-5">{{ display }}</div>
      <img src="~assets/svg/love.svg" alt="Image">
    </div>
  </div>
</template>

<style scoped>
.box {
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(1,90,187,0.7) 0%, rgba(1,90,187,0.7) 30%, rgba(254,215,1,0.7) 70%, rgba(254,215,1,0.7) 100%);
}
</style>
