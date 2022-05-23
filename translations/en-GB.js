const hero = {
  headline: 'FH Salzburg helps Ukraine',
  text: 'Active emergency aid now! Later we as a university help Ukrainian students'
}

const explanation = {
  headline: 'About the initiative, about us',
  motivation: {
    title: 'Our motivation',
    text: '<p>The war in Ukraine is terrible and affects millions of innocent people. Many feel powerless in this terrible situation - but everyone can help!</p><p>With our donation platform we do not want to start a superficial actionism - we want to give many people the opportunity to actively contribute - especially all people, companies and organizations around the FH Salzburg.</p>',
  },
  idea: {
    title: 'The main idea',
    text: '<p>Students and coworkers supply active and conscious signals - donating and Gönnende help to honor these!</p><p>Each kilometer, which is put back by helpful humans for this project, is to be supported by donating with at least one euro.</p>',
  },
  oneEqualsOne: {
    title: '1 km = 1 €',
    text: '<p>You cycle, run, walk a distance, document this achievement and upload it on this website - someone, who finds this good and worthy of support, donates an amount either to our donation account or to a recognized aid organization and thus honors the activity.</p><p>For donations, we would also like to ask you to upload a confirmation.</p>',
  },
  donations: {
    title: 'The donation account',
    text: '<p>The Raiba Kuchl supports us with a free account:<br/>Treuhandkonto FH Kuchl/Nachbar in Not<br/><strong>IBAN AT86 3502 9000 0015 6729</strong></p><p>If you would like to donate directly to "Nachbar in Not" or another charity, please do so - we accept any donation channel and want to move as much money as possible!</p>',
  },
  hundredPercent: {
    title: '100% for the victims',
    text: '<p>All donations are forwarded 100% to those in need. The current situation has led us to decide that we currently want to forward all incoming amounts to "Nachbar in Not". In the longer term, we want to help students in Ukraine. Ukrainian students at the FH have already promised their help!</p><p>Our former visiting professor Stefan Sagmeister made the valuable saying: Helping other people helps me! Let\'s use this chance!</p><p class="mt-3">Prof. Günter Berger and his committed team of students</p>',
  },
}

const topTen = {
  headline: 'Top 10',
  kilometers: 'KILOMETERS',
  donations: 'DONATIONS',
}

const activities = {
  headline: 'Possible activities',
  running: 'Running',
  walking: 'Walking',
  cycling: 'Cycling',
  other: 'Other',
}

const forms = {
  name: 'Name (optional)',
  imageProof: 'Photo reference (max. 5MB)',
  submitButton: 'Submit',
  mandatoryField: 'Mandatory field',
  thankYou: 'Thanks for your contribution!',
  fileUpload: 'Select file...',
  kilometers: {
    header: 'Kilometers',
    unit: 'Kilometers',
    hint: 'Whole kilometers only (2,4 -> 2; 2,5 ->3)',
    error: 'Please enter kilometers and select photo.',
  },
  donations: {
    header: 'Donate',
    unit: 'Amount',
    error: 'Please enter amount and select photo.',
  },
}

const footer = {
  imprint: 'Imprint',
  dataSecurity: 'Data security',
}

module.exports = {
  hero,
  explanation,
  topTen,
  activities,
  forms,
  footer,
}

