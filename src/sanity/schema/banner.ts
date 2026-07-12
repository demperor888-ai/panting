import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'banner',
  title: '首页轮播',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: '副标题',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: '背景图片（1920x800 左右为宜）',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: '跳转链接',
      type: 'string',
      initialValue: '/products',
    }),
    defineField({
      name: 'order',
      title: '排序（数字越小越靠前）',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
  orderings: [
    { title: '排序', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
});
