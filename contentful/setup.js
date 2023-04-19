const spaceImport = require('contentful-import')
const exportFile = require('./export.json')
require('dotenv').config({ path: `.env.local` })
console.log(process.env.NODE_ENV)
console.log(process.env) // remo

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error(
    [
      'Parameters missing...',
      'Please run the setup command as follows',
      'CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup',
    ].join('\n')
  )
}

spaceImport({
  spaceId: CONTENTFUL_SPACE_ID,
  managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
  content: exportFile,
})
  .then(() => console.log('The content model of your space is set up!'))
  .catch((e) => console.error(e))
