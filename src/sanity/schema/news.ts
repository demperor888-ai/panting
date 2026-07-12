import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'news',
  title: '新闻',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题',
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
      name: 'category',
      title: '分类',
      type: 'string',
      options: {
        list: [
          { title: '公司动态', value: '公司动态' },
          { title: '行业资讯', value: '行业资讯' },
          { title: '技术文章', value: '技术文章' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: '摘要',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: '正文内容',
      type: 'text',
      rows: 20,
    }),
    defineField({
      name: 'image',
      title: '封面图片',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'date',
      title: '发布日期',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'views',
      title: '阅读量',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});
