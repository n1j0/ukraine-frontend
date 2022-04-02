<template>
  <main>
    <Hero/>
    <Stats :stats="stats"/>
    <Explaination/>
    <Top10 :data="top10"/>
    <Activities/>
    <Forms/>
  </main>
</template>

<script>
import Activities from '../components/Activities'
import Explaination from '../components/Explaination'
import Forms from '../components/Forms'
import Stats from '../components/Stats'
import Hero from '../components/Hero'
import Top10 from '../components/Top10'

export default {
  components: { Explaination, Top10, Stats, Forms, Activities, Hero },
  async asyncData({ $axios, $config }) {
    let stats
    let top10
    try {
      const [s, t] = await Promise.all([
        $axios.$get(`${$config.api}/stats`),
        $axios.$get(`${$config.api}/top10`)
      ])
      stats = s
      top10 = t
    } catch (e) {
      stats = {
        donations: 0,
        kilometers: 0,
      }
      top10 = {
        donations: [],
        kilometers: [],
      }
    }

    return {
      stats,
      top10
    }
  }
}
</script>
