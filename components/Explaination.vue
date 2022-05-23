<template>
  <div class="px-4 py-6 md:px-6 lg:px-8">
    <div class="container">
      <div class="text-2xl text-900 font-bold mb-4">{{ $t('explanation.headline') }}</div>
      <template v-for="(item, idx) in content">
        <div class="grid mt-3" :key="`${idx}-el`">
          <div class="col-12 text-900 lg:col-4 font-medium text-lg line-height-3">{{ item.title }}</div>
          <div class="col-12 lg:col-8 text-700 line-height-3" v-html="item.text"></div>
        </div>
        <hr v-if="idx + 1 < content.length" class="my-3 mx-0 border-top-1 border-none surface-border" :key="idx">
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Explaination',
  data() {
    return {
      content: [
        {
          title: this.$t('explanation.motivation.title'),
          text: this.$t('explanation.motivation.text'),
        },
        {
          title: this.$t('explanation.idea.title'),
          text: this.$t('explanation.idea.text'),
        },
        {
          title: this.$t('explanation.oneEqualsOne.title'),
          text: this.$t('explanation.oneEqualsOne.text'),
        },
        {
          title: this.$t('explanation.donations.title'),
          text: this.$t('explanation.donations.text'),
        },
        {
          title: this.$t('explanation.hundredPercent.title'),
          text: this.$t('explanation.hundredPercent.text'),
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
