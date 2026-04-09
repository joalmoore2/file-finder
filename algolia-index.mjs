import { algoliasearch } from 'algoliasearch'

const client = algoliasearch('11GAJN9N0E', '1e94a76ab97f6566fbc4b1d318109caf')

// Fetch all documents from Payload
const response = await fetch('http://localhost:3000/api/documents?limit=3000&depth=1')
const { docs } = await response.json()

// Shape the data for Algolia
const records = docs.map((doc) => ({
  objectID: doc.id,
  title: doc.title,
  excerpt: doc.excerpt,
  document_type: doc.document_type?.name || '',
  file_url: doc.file?.url || '',
}))

// Push to Algolia
const result = await client.saveObjects({
  indexName: 'documents',
  objects: records,
})

console.log(`Indexed ${records.length} documents`)
