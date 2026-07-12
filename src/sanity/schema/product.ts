import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: '产品',
  type: 'document',
  groups: [
    { name: 'basic', title: '基本信息' },
    { name: 'detail', title: '详细内容' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: '产品名称',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'slug',
      title: 'URL 标识',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'category',
      title: '产品分类',
      type: 'string',
      options: {
        list: [
          { title: '灌浆料系列', value: 'guanjiang' },
          { title: '特种砂浆系列', value: 'shajiang' },
          { title: '建筑结构胶系列', value: 'tezhong' },
          { title: '防水防腐系列', value: 'fangshui' },
          { title: '建筑外墙砂浆系列', value: 'zhuangpeishi' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
      group: 'basic',
    }),
    defineField({
      name: 'description',
      title: '产品描述',
      type: 'text',
      rows: 4,
      group: 'basic',
    }),
    defineField({
      name: 'features',
      title: '产品特点（每行一个）',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'detail',
    }),
    defineField({
      name: 'image',
      title: '产品图片',
      type: 'image',
      options: { hotspot: true },
      group: 'basic',
    }),
    defineField({
      name: 'order',
      title: '排序（数字越小越靠前）',
      type: 'number',
      initialValue: 0,
      group: 'detail',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
  orderings: [
    { title: '排序', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
});
