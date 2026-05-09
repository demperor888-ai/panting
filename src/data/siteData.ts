export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface News {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  views: number;
}

export interface Case {
  id: string;
  title: string;
  client: string;
  location: string;
  description: string;
  image: string;
  products: string[];
  date: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  order: number;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  wechat: string;
  qq: string;
  workingHours: string;
}

export const productCategories = [
  { id: 'guanjiang', name: '灌浆料系列' },
  { id: 'shajiang', name: '建筑砂浆系列' },
  { id: 'tezhong', name: '特种结构系列' },
  { id: 'fangshui', name: '防水堵漏系列' },
  { id: 'zhuangpeishi', name: '装配式墙面砂浆系列' },
];

export const siteConfig: SiteConfig = {
  name: '河南磐霆速科新材料科技有限公司',
  shortName: '磐霆速科',
  description: '专注新型建筑材料研发与生产',
  address: '河南省郑州市高新技术产业开发区',
  phone: '13051901573',
  email: '784933282@qq.com',
  wechat: 'humanbeings_-',
  qq: '784933282',
  workingHours: '周一至周六 8:00-18:00'
};

export const initialProducts: Product[] = [
  {
    id: 'p1',
    name: '高强度无收缩灌浆料',
    category: 'guanjiang',
    description: '适用于设备基础二次灌浆、地脚螺栓锚固、钢结构柱脚底板灌浆等，具有高强度、无收缩、自流平特点。',
    image: '/images/products/products-2.jpg',
    features: ['早强高强', '自流平性', '无收缩', '耐久性好']
  },
  {
    id: 'p2',
    name: 'CGM高强灌浆料',
    category: 'guanjiang',
    description: '广泛应用于重型机械、精密设备安装灌浆，桥梁支座灌浆等工程领域。',
    image: '/images/products/products-2.jpg',
    features: ['流动度大', '强度高', '微膨胀', '抗疲劳']
  },
  {
    id: 'p3',
    name: '砌筑砂浆',
    category: 'shajiang',
    description: '用于砌筑各种墙体材料，具有良好的和易性和粘结强度。',
    image: '/images/products/products-2.jpg',
    features: ['保水性好', '粘结力强', '施工方便']
  },
  {
    id: 'p4',
    name: '抹灰砂浆',
    category: 'shajiang',
    description: '室内外墙面抹灰，表面平整光滑，不开裂、不空鼓。',
    image: '/images/products/products-2.jpg',
    features: ['不开裂', '不空鼓', '表面细腻']
  },
  {
    id: 'p5',
    name: '结构加固胶',
    category: 'tezhong',
    description: '用于建筑结构加固、植筋、粘钢等工程，强度高、耐老化。',
    image: '/images/products/products-2.jpg',
    features: ['高粘结力', '耐老化', '抗震动']
  },
  {
    id: 'p6',
    name: '聚合物防水砂浆',
    category: 'fangshui',
    description: '用于地下室、卫生间、水池等防水工程，抗渗性能优异。',
    image: '/images/products/products-2.jpg',
    features: ['抗渗性强', '粘结牢固', '耐腐蚀']
  },
  {
    id: 'p7',
    name: '装配式专用砂浆',
    category: 'zhuangpeishi',
    description: '专为装配式建筑开发，用于预制构件接缝、灌浆连接。',
    image: '/images/products/products-2.jpg',
    features: ['流动性好', '强度发展快', '连接可靠']
  },
];

export const initialNews: News[] = [
  {
    id: 'n1',
    title: '公司荣获省级高新技术企业认证',
    category: '公司动态',
    summary: '经过严格评审，我公司荣获省级高新技术企业认证，标志着公司技术创新能力获得认可。',
    content: '经过严格评审，我公司荣获省级高新技术企业认证，标志着公司技术创新能力获得认可。这是公司发展历程中的重要里程碑，我们将继续加大研发投入，为客户提供更优质的产品和服务。未来，公司将继续秉承"科技创新、质量为本"的理念，不断推出新产品，满足市场需求。',
    image: '/images/products/guanjiang-1.jpg',
    date: '2024-01-15',
    views: 256
  },
  {
    id: 'n2',
    title: '新型灌浆料研发成功',
    category: '公司动态',
    summary: '公司自主研发的新型高强度灌浆料通过省级鉴定，性能达到国内领先水平。',
    content: '公司自主研发的新型高强度灌浆料通过省级鉴定，性能达到国内领先水平。该产品具有早强、高强、自流平、无收缩等特点，广泛应用于设备安装、桥梁工程等领域。产品经过多项性能测试，各项指标均达到或超过国家标准，填补了省内空白。',
    image: '/images/products/guanjiang-1.jpg',
    date: '2024-01-10',
    views: 189
  },
  {
    id: 'n3',
    title: '装配式建筑发展趋势分析',
    category: '行业资讯',
    summary: '装配式建筑作为建筑工业化的重要形式，近年来发展迅速，市场规模持续扩大。',
    content: '装配式建筑作为建筑工业化的重要形式，近年来发展迅速，市场规模持续扩大。国家政策大力支持，未来发展前景广阔。我公司将抓住机遇，大力发展装配式建筑配套材料，为行业发展贡献力量。',
    image: '/images/products/guanjiang-1.jpg',
    date: '2024-01-05',
    views: 312
  },
  {
    id: 'n4',
    title: '灌浆料施工要点详解',
    category: '技术文章',
    summary: '详细介绍灌浆料的施工工艺和注意事项，帮助用户正确使用产品。',
    content: '灌浆料施工应注意以下几点：1. 基础表面必须清理干净，无油污、杂物；2. 按规定水灰比加水搅拌；3. 搅拌时间不少于3分钟；4. 灌浆时应从一侧进行，直至另一侧溢出；5. 灌浆后应及时养护，保持湿润。',
    image: '/images/products/guanjiang-1.jpg',
    date: '2024-01-01',
    views: 456
  },
];

export const initialCases: Case[] = [
  {
    id: 'c1',
    title: '某大型钢铁厂设备基础灌浆工程',
    client: '某钢铁集团',
    location: '河南省郑州市',
    description: '为年产500万吨钢铁厂提供设备基础灌浆服务，使用我公司高强度灌浆料，工程质量优良，获得客户高度评价。项目历时3个月，灌浆面积超过5000平方米。',
    image: '/images/products/guanjiang-1.jpg',
    products: ['高强度无收缩灌浆料', 'CGM高强灌浆料'],
    date: '2023-12-01'
  },
  {
    id: 'c2',
    title: '某高速公路桥梁支座灌浆工程',
    client: '某交通建设集团',
    location: '河南省洛阳市',
    description: '参与高速公路桥梁建设，提供桥梁支座灌浆材料和技术支持，确保工程质量。项目全长15公里，共20座桥梁，使用灌浆料100余吨。',
    image: '/images/products/guanjiang-1.jpg',
    products: ['CGM高强灌浆料'],
    date: '2023-11-15'
  },
  {
    id: 'c3',
    title: '某商业综合体防水工程',
    client: '某房地产集团',
    location: '河南省郑州市',
    description: '为大型商业综合体提供地下室防水解决方案，使用聚合物防水砂浆，效果显著。地下室面积达2万平方米，防水效果良好，无渗漏问题。',
    image: '/images/products/guanjiang-1.jpg',
    products: ['聚合物防水砂浆'],
    date: '2023-10-20'
  },
];

export const initialBanners: Banner[] = [
  {
    id: 'b1',
    title: '专注新型建筑材料',
    subtitle: '为您提供专业的建筑材料解决方案',
    image: '/images/banners/banners-1.jpg',
    link: '/products',
    order: 1
  },
  {
    id: 'b2',
    title: '质量为本 服务至上',
    subtitle: '携手共创美好未来',
    image: '/images/banners/banners-2.jpg',
    link: '/about',
    order: 2
  },
  {
    id: 'b3',
    title: '专业团队 技术领先',
    subtitle: '引领行业发展方向',
    image: '/images/banners/banners-3.jpg',
    link: '/cases',
    order: 3
  },
];
