import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'case',
  title: '成功案例',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '案例标题',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL 标识',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: '客户名称',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: '项目地点',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '项目描述',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: '封面图片',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contentImages',
      title: '施工图集（多张）',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'products',
      title: '使用产品（按名称填写）',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'date',
      title: '项目日期',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'image',
    },
  },
});
