import { CollectionConfig } from 'payload'

const DocumentTypes: CollectionConfig = {
  slug: 'document-types',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

export default DocumentTypes
