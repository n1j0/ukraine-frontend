const hero = {
  headline: 'FH Salzburg hilft Ukraine',
  text: 'Jetzt aktive Soforthilfe! Später helfen wir als Hochschule ukrainischen Studierenden'
}

const explanation = {
  headline: 'Über die Aktion, über uns',
  motivation: {
    title: 'Unsere Motivation',
    text: '<p>Der Krieg in der Ukraine ist schrecklich und trifft Millionen unschuldiger Menschen. Viele fühlen sich ohnmächtig in dieser schlimmen Situation – doch jede*r kann helfen!</p><p>Mit unserer Spendenplattform wollen wir keinen oberflächlichen Aktionismus starten – wir wollen vielen Menschen die Möglichkeit zu aktiven Beiträgen geben – besonders allen Menschen, Firmen und Organisationen rund um die FH Salzburg.</p>',
  },
  idea: {
    title: 'Die einfache Grundidee',
    text: '<p>Studierende und Mitarbeitende liefern aktive und bewusste Zeichen – Spendende und Gönnende helfen, diese zu honorieren!</p><p>Jeder Kilometer, der von hilfsbereiten Menschen für dieses Projekt zurückgelegt wird, soll von Spendenden mit mind. einem Euro unterstützt werden.</p>',
  },
  oneEqualsOne: {
    title: '1 km = 1 €',
    text: '<p>Sie radeln, laufen, gehen eine Strecke, dokumentieren diese Leistung und laden Sie hier bei uns hoch – jemand, der das gut und unterstützenswert findet, spendet entweder auf unserem Hilfskonto oder bei einer anerkannten Hilfsorganisation einen Betrag und honoriert somit die Aktivität.</p><p>Bei Spenden möchten wir Sie ebenfalls um den Upload einer Bestätigung bitten.</p>',
  },
  donations: {
    title: 'Das Spendenkonto',
    text: '<p>Die Raiba Kuchl unterstützt uns mit einem spesenfreien Konto:<br/>Treuhandkonto FH Kuchl/Nachbar in Not<br/><strong>IBAN AT86 3502 9000 0015 6729</strong></p><p>Falls sie direkt an Nachbar in Not oder eine andere Hilfsorganisation spenden wollen, tun Sie das bitte - wir akzeptieren jeden Spendenkanal und wollen so viel Geld wie möglich bewegen!</p>',
  },
  hundredPercent: {
    title: '100% für die Opfer',
    text: '<p>Alle Beträge werden zu 100% an Hilfsbedürftige weitergeleitet. Die aktuelle Lage hat uns dazu bewogen, dass wir derzeit alle eingehenden Beträge an "Nachbar in Not" weiterleiten wollen. Längerfristig wollen wir Studierenden in der Ukraine helfen. Ukrainische Studierende an der FH haben dazu schon Ihre Hilfe zugesagt!</p><p>Unser ehemaliger Gastprofessor Stefan Sagmeister machte den wertvollen Spruch: Helping other people helps me! Nutzen wir diese Chance!</p><p class="mt-3">Prof. Günter Berger und sein engagiertes Studententeam</p>',
  },
}

const topTen = {
  headline: 'Top 10',
  kilometers: 'KILOMETER',
  donations: 'SPENDEN',
}

const activities = {
  headline: 'Mögliche Aktivitäten',
  running: 'Laufen',
  walking: 'Spazieren',
  cycling: 'Rad fahren',
  other: 'Anderes',
}

const forms = {
  name: 'Name (optional)',
  imageProof: 'Fotonachweis (max. 5MB)',
  submitButton: 'Einreichen',
  mandatoryField: 'Pflichtfeld',
  thankYou: 'Vielen Dank für Ihren Beitrag!',
  fileUpload: 'Datei auswählen...',
  kilometers: {
    header: 'Kilometer',
    unit: 'Kilometer',
    hint: 'Nur ganze Kilometer (2,4 -> 2; 2,5 ->3)',
    error: 'Bitte Kilometer eingeben und Foto auswählen.',
  },
  donations: {
    header: 'Spenden',
    unit: 'Betrag',
    error: 'Bitte Betrag eingeben und Foto auswählen.',
  },
}

module.exports = {
  hero,
  explanation,
  topTen,
  activities,
  forms,
}
