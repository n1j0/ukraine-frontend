<template>
  <div class="px-4 py-6 md:px-6 lg:px-8">
    <div class="container">
      <div class="text-2xl text-900 font-bold mb-4">Über die Aktion, über uns</div>
      <template v-for="(item, idx) in content">
        <div class="grid mt-3" :key="idx">
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
  data: () => ({
    content: [
      {
        title: 'Unsere Motivation',
        text: '<p>Der Krieg in der Ukraine ist schrecklich und trifft Millionen unschuldiger Menschen. Viele fühlen sich ohnmächtig in dieser schlimmen Situation – doch jede*r kann helfen!</p><p>Mit unserer Spendenplattform wollen wir keinen oberflächlichen Aktionismus starten – wir wollen vielen Menschen die Möglichkeit zu aktiven Beiträgen geben – besonders allen Menschen, Firmen und Organisationen rund um die FH Salzburg.</p>',
      },
      {
        title: 'Die einfache Grundidee',
        text: '<p>Studierende und Mitarbeitende liefern aktive und bewusste Zeichen – Spendende und Gönnende helfen, diese zu honorieren!</p><p>Jeder Kilometer, der von hilfsbereiten Menschen für dieses Projekt zurückgelegt wird, soll von Spendenden mit mind. einem Euro unterstützt werden.</p>',
      },
      {
        title: '1 km = 1 €',
        text: '<p>Sie radeln, laufen, gehen eine Strecke, dokumentieren diese Leistung und laden Sie hier bei uns hoch – jemand, der das gut und unterstützenswert findet, spendet entweder auf unserem Hilfskonto oder bei einer anerkannten Hilfsorganisation einen Betrag und honoriert somit die Aktivität.</p><p>Bei Spenden möchten wir Sie ebenfalls um den Upload einer Bestätigung bitten.</p>',
      },
      {
        title: '100% für die Opfer',
        text: '<p>Alle Beträge werden zu 100% an Hilfsbedürftige weitergeleitet. Die aktuelle Lage hat uns dazu bewogen, dass wir derzeit alle eingehenden Beträge an "Nachbar in Not", "Rotes Kreuz" oder "Ärzte ohne Grenzen" weiterleiten wollen. Längerfristig wollen wir Studierenden in der Ukraine helfen. Die entsprechenden Kontakte sind im Entstehen!</p><p>Unser ehemaliger Gastprofessor Stefan Sagmeister machte den wertvollen Spruch: Helping other people helps me! Nutzen wir diese Chance!</p><p class="mt-3">Prof. Günter Berger und sein engagiertes Studententeam</p>',
      },
    ]
  })
}
</script>

<style scoped>

</style>
