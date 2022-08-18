<template>
  <div>
    <LanguageSwitch/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import LanguageSwitch from '@/components/LanguageSwitch'
export default {
  name: 'default',
  components: { LanguageSwitch, Footer }
}
</script>

<style scoped>

</style>
