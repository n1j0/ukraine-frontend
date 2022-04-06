<script>
export default {
  name: 'KilometersCollected',
  props: {
    kilometers: {
      type: [Number, String],
      required: true,
    },
  },
}
</script>

<template>
  <div class="box shadow-2 surface-card flex justify-content-between py-5 px-3 overflow-hidden">
    <div class="flex flex-column justify-content-between align-items-center">
      <div class="text-center font-bold text-6xl mt-3 mb-5">{{ kilometers }} km</div>
      <img src="~assets/svg/kilometers.svg" alt="Image">
    </div>
  </div>
</template>

<style scoped>
.box {
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(1,90,187,0.65) 0%, rgba(1,90,187,0.65) 30%, rgba(254,215,1,0.65) 70%, rgba(254,215,1,0.65) 100%);}
</style>
