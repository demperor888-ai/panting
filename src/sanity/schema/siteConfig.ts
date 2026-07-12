import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteConfig',
  title: '公司信息',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '公司全称',
      type: 'string',
      initialValue: '河南磐霆速科新材料科技有限公司',
    }),
    defineField({
      name: 'shortName',
      title: '公司简称',
      type: 'string',
      initialValue: '磐霆速科',
    }),
    defineField({
      name: 'description',
      title: '公司简介',
      type: 'text',
      rows: 3,
      initialValue: '专注新型建筑材料研发与生产',
    }),
    defineField({
      name: 'address',
      title: '公司地址',
      type: 'string',
      initialValue: '河南省郑州市高新技术产业开发区',
    }),
    defineField({
      name: 'phone',
      title: '联系电话',
      type: 'string',
      initialValue: '13051901573',
    }),
    defineField({
      name: 'email',
      title: '邮箱',
      type: 'string',
      initialValue: '784933282@qq.com',
    }),
    defineField({
      name: 'wechat',
      title: '微信号',
      type: 'string',
      initialValue: 'humanbeings_-',
    }),
    defineField({
      name: 'wechatQR',
      title: '微信二维码图片',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'workingHours',
      title: '工作时间',
      type: 'string',
      initialValue: '周一至周六 8:00-18:00',
    }),
  ],
});
