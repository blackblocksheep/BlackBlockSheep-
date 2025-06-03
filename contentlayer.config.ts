import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
}))

export default makeSource({
  contentDirPath: 'content/posts',
  documentTypes: [Service],
})