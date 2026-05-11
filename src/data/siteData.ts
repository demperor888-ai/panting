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
  { id: 'shajiang', name: '特种砂浆系列' },
  { id: 'tezhong', name: '建筑结构胶系列' },
  { id: 'fangshui', name: '防水防腐系列' },
  { id: 'zhuangpeishi', name: '建筑外墙砂浆系列' },
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
    id: 'p6',
    name: '聚合物防水砂浆',
    category: 'fangshui',
    description: '用于地下室、卫生间、水池等防水工程，抗渗性能优异。',
    image: '/images/products/products-2.jpg',
    features: ['抗渗性强', '粘结牢固', '耐腐蚀']
  },
  {
    id: 'p8',
    name: '丙乳砂浆',
    category: 'shajiang',
    description: '丙乳砂浆是一种新型混凝土建筑物修补材料，属于高分子聚合物乳液改性水泥砂浆，具有优异的粘结、抗裂、防水、防氯离子渗透、耐磨、耐老化等性能，成本低、施工工艺简单。',
    image: '/images/products/products-2.jpg',
    features: ['粘结力强', '抗裂性好', '防水防渗', '耐老化', '施工简便']
  },
  {
    id: 'p9',
    name: '重金属不发火砂浆',
    category: 'shajiang',
    description: '重金属不发火砂浆是一种功能性防爆砂浆，在受到冲击、摩擦或撞击时不产生火花，具有不燃、防爆、高耐磨、高强度、耐久性等特性，适用于易燃易爆场所。',
    image: '/images/products/products-2.jpg',
    features: ['不燃不爆', '高耐磨性', '高强度耐久', '环保安全', '施工方便']
  },
  {
    id: 'p10',
    name: '混凝土CPC防碳化涂料',
    category: 'fangshui',
    description: '高性能液体聚合物-水泥复合防碳化材料，含有独特组分与水泥水化产物反应，形成聚合物-水泥互穿网络结构，有效防止混凝土碳化。',
    image: '/images/products/products-2.jpg',
    features: ['防碳化', '渗透性强', '粘结牢固', '耐候性好']
  },
  {
    id: 'p11',
    name: '混凝土色差修复剂',
    category: 'fangshui',
    description: '用于修补各类混凝土表面，包括路面、桥面、机场跑道等，解决起砂、开裂等表面问题，可定制多种颜色。',
    image: '/images/products/products-2.jpg',
    features: ['修复色差', '颜色可定制', '附着力强', '耐久性好']
  },
  {
    id: 'p13',
    name: '重载耐磨地面砂浆',
    category: 'shajiang',
    description: '特种干混砂浆，能够承受重型机械摩擦和冲击，适用于金属撞击易产生火花引发火灾或爆炸危险的环境。',
    image: '/images/products/products-2.jpg',
    features: ['高耐磨', '抗冲击', '耐重载', '使用寿命长']
  },
  {
    id: 'p14',
    name: '钢筋连接套筒灌浆料',
    category: 'guanjiang',
    description: '由水泥、细骨料、矿物掺合料预拌而成的干混砂浆，具有低泌水、流动度好、强度高、微膨胀不收缩特点，适用于装配式建筑连接和基础灌浆。',
    image: '/images/products/products-2.jpg',
    features: ['低泌水', '流动度好', '强度高', '微膨胀不收缩']
  },
  {
    id: 'p15',
    name: '风机基础专用灌浆料',
    category: 'guanjiang',
    description: '专为陆上风力发电机塔架基础灌浆设计，具有早强高强、均匀膨胀、抗疲劳性能，适用于精密设备安装。',
    image: '/images/products/products-2.jpg',
    features: ['早强高强', '均匀膨胀', '抗疲劳', '精密灌浆']
  },
  {
    id: 'p16',
    name: '保温砂浆',
    category: 'zhuangpeishi',
    description: '水泥基特种砂浆，具有保温隔热功能，适用于内外墙及屋顶保温层，满足建筑节能要求。',
    image: '/images/products/products-2.jpg',
    features: ['保温隔热', '节能环保', '施工方便', '粘结力强']
  },
  {
    id: 'p17',
    name: '自流平砂浆',
    category: 'shajiang',
    description: '水泥基自流平材料，能够自动流平无需振捣，用于地板铺设前的地面找平处理。',
    image: '/images/products/products-2.jpg',
    features: ['自动流平', '无需振捣', '平整度高', '施工快捷']
  },
  {
    id: 'p20',
    name: '重载防静电砂浆',
    category: 'shajiang',
    description: '防静电特种砂浆，在摩擦或撞击时不产生火花，适用于处理易燃易爆材料的环境，具有防静电和防爆双重功能。',
    image: '/images/products/products-2.jpg',
    features: ['防静电', '防爆防火', '高耐磨', '安全可靠']
  },
  {
    id: 'p21',
    name: '隔音砂浆',
    category: 'shajiang',
    description: '水泥基隔音特种砂浆，用于内墙和楼板隔音，有效解决冲击噪声和空气传声问题。',
    image: '/images/products/products-2.jpg',
    features: ['隔音降噪', '施工便捷', '粘结力强', '环保无害']
  },
  {
    id: 'p22',
    name: '找平砂浆',
    category: 'shajiang',
    description: '水泥基找平材料，具有高流动性、自密实特性，无需人工振捣即可自动找平。',
    image: '/images/products/products-2.jpg',
    features: ['自流平', '高流动性', '平整度高', '省工省时']
  },
  {
    id: 'p23',
    name: '锚栓砂浆',
    category: 'shajiang',
    description: '以水泥砂浆作为粘结剂的全粘结锚栓材料，将锚栓与周围岩土粘结形成整体，用于边坡和岩体结构加固。',
    image: '/images/products/products-2.jpg',
    features: ['锚固可靠', '粘结力强', '耐久稳定', '施工方便']
  },
  {
    id: 'p24',
    name: '界面砂浆',
    category: 'shajiang',
    description: '用于不同基层之间的粘结材料，提供新旧抹灰层之间的双面粘结力，防止空鼓、开裂和剥落。',
    image: '/images/products/products-2.jpg',
    features: ['双面粘结', '防空鼓', '防开裂', '附着力强']
  },
  {
    id: 'p25',
    name: '自密实砂浆',
    category: 'shajiang',
    description: '高性能特种砂浆，具有高流动性、耐候性和填充性，能自动填充复杂模板并包裹钢筋形成密实结构。',
    image: '/images/products/products-2.jpg',
    features: ['自密实', '高流动性', '填充性好', '耐候性强']
  },
  {
    id: 'p26',
    name: '导电砂浆',
    category: 'shajiang',
    description: '采用石墨、碳黑等导电材料制成的特种砂浆，能有效传导静电，28天抗压强度超过100N/mm²，48小时内可使用。',
    image: '/images/products/products-2.jpg',
    features: ['导电防静电', '强度高', '硬化快', '性能稳定']
  },
  {
    id: 'p27',
    name: '无机防水砂浆',
    category: 'shajiang',
    description: '以无机结晶防水为核心组分的水泥砂浆，能形成结晶防水层，有效防止渗漏。',
    image: '/images/products/products-2.jpg',
    features: ['结晶防水', '抗渗性强', '耐久性好', '环保安全']
  },
  {
    id: 'p28',
    name: '压浆料',
    category: 'guanjiang',
    description: '专用水泥基材料，主要由水泥、高效减水剂、膨胀剂和多种外加剂组成，具有良好流动性、稳定性、膨胀性和粘度，用于后张预应力管道灌浆。',
    image: '/images/products/products-2.jpg',
    features: ['流动性好', '稳定性强', '膨胀性佳', '施工便捷']
  },
  {
    id: 'p29',
    name: '预应力管道压浆料',
    category: 'guanjiang',
    description: '专用水泥基灌浆材料，适用于公路、铁路、核电等工程的有粘结预应力管道灌浆。',
    image: '/images/products/products-2.jpg',
    features: ['高压灌注', '密实填充', '粘结可靠', '耐久性强']
  },
  {
    id: 'p30',
    name: '超细水泥灌浆料',
    category: 'guanjiang',
    description: '采用高强度超细水泥、膨胀剂和稳定剂制成的均匀无机超细灌浆材料，具有超细粒径、高强度、不离析的特点。',
    image: '/images/products/products-2.jpg',
    features: ['超细粒径', '高强度', '不离析', '渗透性强']
  },
  {
    id: 'p31',
    name: '水性环氧树脂灌浆料',
    category: 'guanjiang',
    description: '由水性环氧树脂和水性固化剂组成，与水泥基灌浆料混合形成有机-无机复合网络结构，粘结强度高，抗渗耐化学性好。',
    image: '/images/products/products-2.jpg',
    features: ['粘结强度高', '抗渗性好', '耐化学腐蚀', '固化快']
  },
  {
    id: 'p32',
    name: '轨道支座灌浆料',
    category: 'guanjiang',
    description: '高性能干粉灌浆材料，主要用于铁路、公路、桥梁等工程中的支座安装灌浆。',
    image: '/images/products/products-2.jpg',
    features: ['高强耐久', '微膨胀', '流动度好', '安装精准']
  },
  {
    id: 'p33',
    name: '水下抗分散灌浆料',
    category: 'guanjiang',
    description: '用于水下桩基、围堰、岩石灌浆、地下连续墙和防水堵漏工程的水下专用灌浆材料，具有优异的水下抗分散性。',
    image: '/images/products/products-2.jpg',
    features: ['水下抗分散', '堵漏止水', '粘结力强', '施工方便']
  },
  {
    id: 'p36',
    name: '混凝土防腐剂',
    category: 'fangshui',
    description: '专用于防止混凝土中钢筋腐蚀的化学材料，能有效提高混凝土结构耐久性和安全性，抑制钢筋腐蚀、提高密实度和抗渗性。',
    image: '/images/products/products-2.jpg',
    features: ['防腐阻锈', '提高密实度', '抗渗性好', '延长寿命']
  },
  {
    id: 'p37',
    name: '钢筋阻锈剂',
    category: 'fangshui',
    description: '专用于防止钢筋混凝土中钢筋锈蚀的化学材料，通过抑制钢筋腐蚀的电化学过程延长结构使用寿命，直接涂刷于钢筋起到钝化防腐作用。',
    image: '/images/products/products-2.jpg',
    features: ['钝化钢筋', '阻止腐蚀', '涂刷方便', '耐久可靠']
  },
  {
    id: 'p38',
    name: '透水砼胶结剂',
    category: 'fangshui',
    description: '一种用于改善透水性铺装产品集料间粘结性能、提高产品强度的综合胶凝材料，适用于人行道、自行车道、公园绿地等透水混凝土施工场合。',
    image: '/images/products/products-2.jpg',
    features: ['高透水性', '抗压粘结强', '抗冻融', '耐久耐候']
  },
  {
    id: 'p39',
    name: '混凝土养护剂',
    category: 'fangshui',
    description: '液体成膜养护产品，喷涂于混凝土或砂浆表面后迅速形成无色不透水薄膜，防止水分蒸发，减缓混凝土收缩和开裂。',
    image: '/images/products/products-2.jpg',
    features: ['成膜快', '保水养护', '防开裂', '使用方便']
  },
  {
    id: 'p40',
    name: '聚合物弹性防水涂料',
    category: 'fangshui',
    description: '以合成高分子聚合物为主要成分，经乳化、分散、固化等工艺形成具有一定厚度和弹性的涂膜，起到防水、防腐、防漏作用。',
    image: '/images/products/products-2.jpg',
    features: ['弹性涂膜', '防水防漏', '防腐耐久', '附着力强']
  },
  {
    id: 'p41',
    name: '混凝土地面硬化剂',
    category: 'fangshui',
    description: '增强混凝土表面硬度和耐磨性能的化学材料，通过化学反应形成坚硬表面保护膜，提高混凝土表面硬度和抗渗性。',
    image: '/images/products/products-2.jpg',
    features: ['表面硬化', '高耐磨', '抗渗防尘', '施工简单']
  },
  {
    id: 'p42',
    name: '混凝土防护剂',
    category: 'fangshui',
    description: '用于保护混凝土结构的化学制剂，通过渗透作用形成网状聚硅氧烷高分子基团，固化为憎水层附着在毛细管内壁形成致密保护层。',
    image: '/images/products/products-2.jpg',
    features: ['渗透防护', '憎水耐久', '致密保护', '施工便捷']
  },
  {
    id: 'p43',
    name: '加强聚合物砂浆',
    category: 'zhuangpeishi',
    description: '高分子合成材料，具有高粘结力、抗裂性和施工性，兼具防水、耐磨、耐老化性能，适用于建筑保温板之间及防水耐磨装饰。',
    image: '/images/products/products-2.jpg',
    features: ['粘结力强', '抗裂性好', '防水耐磨', '耐老化']
  },
  {
    id: 'p44',
    name: '粘结砂浆',
    category: 'zhuangpeishi',
    description: '由水泥、石灰、石英砂和聚合物组成的粘结材料，用于瓷砖、石材等装饰材料与墙面的粘结，具有良好的施工性和附着力。',
    image: '/images/products/products-2.jpg',
    features: ['附着力强', '施工性好', '粘结牢固', '不空鼓']
  },
  {
    id: 'p45',
    name: '聚合物抗裂砂浆',
    category: 'zhuangpeishi',
    description: '改性合成材料，兼具聚合物粘结力和无机材料耐久性，抗压强度高、固化迅速、粘结性好、保水性佳，适用于潮湿基面施工。',
    image: '/images/products/products-2.jpg',
    features: ['抗压强度高', '固化迅速', '保水性好', '柔性抗裂']
  },
  {
    id: 'p46',
    name: '环氧植筋胶',
    category: 'tezhong',
    description: '双组分环氧树脂结构胶，用于混凝土结构植筋加固，具有极高的粘结强度和耐腐蚀性能。',
    image: '/images/products/products-2.jpg',
    features: ['粘结力强', '耐腐蚀', '耐久性好', '强度高']
  },
  {
    id: 'p47',
    name: '环氧封缝胶',
    category: 'tezhong',
    description: '环氧树脂基裂缝封闭材料，用于混凝土表面裂缝的封闭处理，防止水分和有害物质渗入。',
    image: '/images/products/products-2.jpg',
    features: ['封闭性好', '附着力强', '耐候耐久', '施工简便']
  },
  {
    id: 'p48',
    name: '环氧灌缝胶',
    category: 'tezhong',
    description: '低粘度环氧树脂灌缝材料，具有优异的渗透性，可深入混凝土细微裂缝进行灌注修复。',
    image: '/images/products/products-2.jpg',
    features: ['低粘度', '渗透性强', '强度高', '固化稳定']
  },
  {
    id: 'p49',
    name: '环氧粘钢胶',
    category: 'tezhong',
    description: '环氧树脂基粘钢专用结构胶，用于将钢板粘贴到混凝土表面进行结构补强，具有高强度和高耐久性。',
    image: '/images/products/products-2.jpg',
    features: ['高强度', '粘结牢固', '耐老化', '施工性好']
  },
  {
    id: 'p50',
    name: '硅烷浸渍剂',
    category: 'fangshui',
    description: '以硅烷为主要成分的混凝土防护浸渍材料，能深层渗透混凝土内部形成憎水层，有效阻止水分和氯离子侵入，提高混凝土耐久性。',
    image: '/images/products/products-2.jpg',
    features: ['深层渗透', '憎水防护', '抗氯离子', '耐久性好']
  },
];

export const initialNews: News[] = [
  {
    id: 'n1',
    title: '公司荣获省级高新技术企业认证',
    category: '公司动态',
    summary: '经过严格评审，我公司荣获省级高新技术企业认证，标志着公司技术创新能力获得认可。',
    content: '经过严格评审，我公司荣获省级高新技术企业认证，标志着公司技术创新能力获得认可。这是公司发展历程中的重要里程碑，我们将继续加大研发投入，为客户提供更优质的产品和服务。未来，公司将继续秉承"科技创新、质量为本"的理念，不断推出新产品，满足市场需求。',
    image: '/images/news/gxjsqy.jpg',
    date: '2024-01-15',
    views: 256
  },
  {
    id: 'n2',
    title: '新型灌浆料研发成功',
    category: '公司动态',
    summary: '公司自主研发的新型高强度灌浆料通过省级鉴定，性能达到国内领先水平。',
    content: '公司自主研发的新型高强度灌浆料通过省级鉴定，性能达到国内领先水平。该产品具有早强、高强、自流平、无收缩等特点，广泛应用于设备安装、桥梁工程等领域。产品经过多项性能测试，各项指标均达到或超过国家标准，填补了省内空白。',
    image: '/images/news/xxgjcl.jpg',
    date: '2024-01-10',
    views: 189
  },
  {
    id: 'n3',
    title: '装配式建筑发展趋势分析',
    category: '行业资讯',
    summary: '装配式建筑作为建筑工业化的重要形式，近年来发展迅速，市场规模持续扩大。',
    content: '装配式建筑作为建筑工业化的重要形式，近年来发展迅速，市场规模持续扩大。国家政策大力支持，未来发展前景广阔。我公司将抓住机遇，大力发展装配式建筑配套材料，为行业发展贡献力量。',
    image: '/images/news/zbsjzfz.jpg',
    date: '2024-01-05',
    views: 312
  },
  {
    id: 'n4',
    title: '灌浆料施工要点详解',
    category: '技术文章',
    summary: '详细介绍灌浆料的施工工艺和注意事项，帮助用户正确使用产品。',
    content: '灌浆料施工应注意以下几点：1. 基础表面必须清理干净，无油污、杂物；2. 按规定水灰比加水搅拌；3. 搅拌时间不少于3分钟；4. 灌浆时应从一侧进行，直至另一侧溢出；5. 灌浆后应及时养护，保持湿润。',
    image: '/images/news/gjsgydxj.jpg',
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
    image: '/images/cases/dxgtc.jpg',
    products: ['高强度无收缩灌浆料', 'CGM高强灌浆料'],
    date: '2023-12-01'
  },
  {
    id: 'c2',
    title: '某高速公路桥梁支座灌浆工程',
    client: '某交通建设集团',
    location: '河南省洛阳市',
    description: '参与高速公路桥梁建设，提供桥梁支座灌浆材料和技术支持，确保工程质量。项目全长15公里，共20座桥梁，使用灌浆料100余吨。',
    image: '/images/cases/gsgl.jpg',
    products: ['CGM高强灌浆料'],
    date: '2023-11-15'
  },
  {
    id: 'c3',
    title: '某商业综合体防水工程',
    client: '某房地产集团',
    location: '河南省郑州市',
    description: '为大型商业综合体提供地下室防水解决方案，使用聚合物防水砂浆，效果显著。地下室面积达2万平方米，防水效果良好，无渗漏问题。',
    image: '/images/cases/fsgc.jpg',
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
