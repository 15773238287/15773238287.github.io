const competitors = [
  {id:'dewenwils-amazon',brand:'DEWENWILS',title:'50ft 自动回收 Cord Reel',channel:'Amazon',price:'$79.99',gauge:'14AWG / 13A',length:'50ft',rating:'4.7 / 2.4K',pressure:'价格 + 评价',strength:'Amazon评价与关键词积累强',weakness:'14AWG同质化；重载不占优',link:'https://www.amazon.com/dp/B07SLL4YX3',source:'ASInsight（第三方估算）'},
  {id:'vevor-50-14',brand:'VEVOR',title:'50ft 自动回收 Cord Reel',channel:'Amazon / DTC / Home Depot',price:'$79.90',gauge:'14AWG / 13A',length:'50ft',rating:'4.6 / 713',pressure:'低价压力',strength:'低价、颜色多、DTC评论量高',weakness:'难支撑高端溢价；配件/售后感知较弱',link:'https://www.vevor.com/extension-cord-reels-c_11953/vevor-retractable-extension-cord-reel-power-cord-reel-50ft-14awg-3c-sjtow-ul-p_010206528166',source:'VEVOR官网 / ASInsight'},
  {id:'vevor-45-12',brand:'VEVOR',title:'45ft 重载自动回收 Cord Reel',channel:'Amazon',price:'$89.90',gauge:'12AWG / 15A',length:'45ft',rating:'4.6 / 454',pressure:'12AWG低价',strength:'已把12AWG/15A拉入$90附近',weakness:'长度短于50ft；品牌溢价有限',link:'https://www.amazon.com/dp/B0BJTYN7X2',source:'ASInsight（第三方估算）'},
  {id:'dewenwils-40-12',brand:'DEWENWILS',title:'40ft 重载自动回收 Cord Reel',channel:'Amazon',price:'$85.99',gauge:'12AWG / 15A',length:'40ft',rating:'4.7 / 1.6K',pressure:'评价 + 12AWG',strength:'12AWG已有高评论基础',weakness:'40ft覆盖有限；不等于50ft主力覆盖',link:'https://www.amazon.com/dp/B08PKHLV71',source:'ASInsight（第三方估算）'},
  {id:'black-decker',brand:'BLACK+DECKER',title:'50ft 4 Outlets Retractable',channel:'Home Depot / Walmart',price:'$64.99',gauge:'14AWG',length:'50ft',rating:'4.5 / 587',pressure:'价格 + 零售',strength:'传统品牌、Home Depot评论量高',weakness:'14AWG入门定位；难讲重载',link:'https://www.homedepot.com/s/BDXPA0062',source:'Home Depot'},
  {id:'husky',brand:'Husky',title:'50ft 14/3 Retractable Reel',channel:'Home Depot',price:'$69.98',gauge:'14AWG / 13A',length:'50ft',rating:'4.6 / 107',pressure:'店牌',strength:'Home Depot店牌与低价信任',weakness:'14AWG；生态/场景传播弱',link:'https://www.homedepot.com/s/EM-HSK-500N',source:'Home Depot'},
  {id:'flexzilla',brand:'Flexzilla',title:'50ft Retractable Cord Reel',channel:'Home Depot / DTC',price:'$85.18',gauge:'14AWG / 13A',length:'50ft',rating:'4.4 / 45',pressure:'品牌信任',strength:'线缆专业心智；有60ft/12AWG Pro上探',weakness:'50ft款仍是14AWG；Pro价格跨度大',link:'https://flexzilla.com/products/retractable-extension-cord-reels',source:'Flexzilla / Home Depot'},
  {id:'giraffe-12',brand:'Giraffe Tools',title:'50ft Retractable Cord Reel',channel:'DTC / Home Depot',price:'$125.00',gauge:'12AWG / 15A',length:'50ft',rating:'146（集合）',pressure:'自身基准',strength:'回卷生态；12/14/16AWG组合；DTC+零售',weakness:'对低价12AWG有明显溢价；证据需要强化',link:'https://giraffetools.com/products/retractable-extension-cord-reel-12-14-16-awg',source:'Giraffe / Home Depot'},
  {id:'link2home',brand:'Link2Home',title:'50ft Auto Retractable Reel',channel:"Lowe's / Home Depot",price:'$90.38',gauge:'14AWG / 13A',length:'50ft',rating:'3.1 / 3',pressure:'中价同质',strength:'零售上架、三插口与180°支架齐全',weakness:'评价弱；Lowe’s pickup不可用',link:'https://www.lowes.com/pd/LINK2HOME-Retractable-Cord-Reel-50-ft-14-3-3-Prong-Gray-Indoor-SJTOW-Medium-Duty-Lighted-Extension-Cord-Reel/5015629867',source:"Lowe's"},
  {id:'givimo',brand:'GIVIMO',title:'50ft 14AWG Auto Retractable',channel:"Lowe's",price:'$98.99',gauge:'14AWG / 13A',length:'50ft',rating:'暂无',pressure:'第三方供货',strength:'SJTOW、三插口、180°支架齐全',weakness:'由第三方卖家发货、线下体验弱',link:'https://www.lowes.com/pd/GIVIMO-50-ft-14-AWG-3C-SJTOW-13-A-125-V-1625-W-180-deg-Swivel-Wall-or-Ceiling-Mount-Retractable-Extension-Cord-Reel/8645202',source:"Lowe's"},
  {id:'kffkff',brand:'KFFKFF',title:'50ft 14AWG Auto Retractable',channel:'Walmart',price:'$78.89',gauge:'14AWG / 13A',length:'50ft',rating:'暂无',pressure:'长尾低价',strength:'价格低、基本参数完整',weakness:'品牌与长期可靠性信任弱',link:'https://www.walmart.com/ip/5703174450',source:'Walmart'},
  {id:'hongyi',brand:'Hongyi',title:'50ft 12AWG 手摇 Cord Reel',channel:'Walmart',price:'$89.99',gauge:'12AWG / 12A',length:'50ft',rating:'暂无',pressure:'12AWG低价',strength:'12AWG、四插口、USB',weakness:'手摇非自动回收；电流不是15A',link:'https://www.walmart.com/ip/16909951254',source:'Walmart'},
  {id:'goodyear',brand:'Goodyear',title:'50ft 12/3 Retractable Reel',channel:'Home Depot',price:'$218.99',gauge:'12AWG / 15A',length:'50ft',rating:'5.0 / 1',pressure:'工业锚点',strength:'重载价格锚点，强调专业感',weakness:'价格过高，不是家用首选',link:'https://www.homedepot.com/s/GUR074',source:'Home Depot'},
  {id:'reelworks',brand:'REELWORKS',title:'50ft 12/3 Retractable Reel',channel:'Home Depot',price:'$169.99',gauge:'12AWG / 15A',length:'50ft',rating:'4.0 / 1',pressure:'工业锚点',strength:'重载自动回收，专业级价格带',weakness:'零售价格过高、评价少',link:'https://www.homedepot.com/s/GUR025',source:'Home Depot'},
  {id:'masterplug',brand:'Masterplug',title:'50ft 12AWG 开架 Cord Reel',channel:'Home Depot',price:'$99.98',gauge:'12AWG / 15A',length:'50ft',rating:'暂无',pressure:'金属开架',strength:'金属开架、四插口、12AWG',weakness:'不是自动回收；场景不同',link:'https://www.homedepot.com/s/OMP501512G4SLU',source:'Home Depot'},
];

const remoteProductImages = {
  'giraffe-12':'https://cdn.shopify.com/s/files/1/0637/6912/9088/files/cord-reel-cable-reel.jpg?v=1700720197',
  'vevor-50-14':'https://img.vevorstatic.com/us%2FSS501650W110VPG8HV1%2Fgoods_thumb-v9%2Fretractable-cord-reel-m100-1.2.jpg?format=webp&timestamp=1664242059000',
  'vevor-45-12':'https://img.vevorstatic.com/us%2FSS501650W110VPG8HV1%2Fgoods_thumb-v9%2Fretractable-cord-reel-m100-1.2.jpg?format=webp&timestamp=1664242059000',
  'dewenwils-amazon':'https://cdn.shopify.com/s/files/1/0718/7608/4009/files/HCRA50R-A_1-1_e5792939-e3cc-4977-a30b-82601463692e.jpg?v=1739946580',
  'dewenwils-40-12':'https://i5.walmartimages.com/seo/DEWENWILS-50FT-Retractable-Extension-Cord-Reel-14AWG-3C-SJTOW-Extension-Cord-Wall-Ceiling-Mount_ea914cf2-d929-4a80-afa9-0c529098137e.73f9ef3f1c6e139c511e1db76f73c4dd.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573',
  'black-decker':'https://i5.walmartimages.com/seo/Black-Decker-Retractable-Extension-Cord-50-ft-14AWG-Power-Cable-Garden-and-Workshop-Power-Cord-Reel-for-Electric-Tools_a6f69990-794a-4184-8244-ba7c7e8b144e.38812799ef2a31576e95554ba405b76a.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573',
  'husky':'https://images.thdstatic.com/productImages/11b18a49-5f3a-4130-94ee-d223d5c7234a/svn/husky-extension-cord-reels-em-hsk-500n-64_600.jpg',
  'flexzilla':'https://images.thdstatic.com/productImages/ed9278bf-803b-4d62-9cec-9bf6fbcd984a/svn/flexzilla-extension-cord-reels-fz8140503-64_600.jpg',
  'link2home':'https://mobileimages.lowes.com/productimages/c7239309-2519-4443-b746-9254d0f5e72f/68078699.jpeg?size=pdhism',
  'givimo':'https://mobileimages.lowes.com/productimages/c7239309-2519-4443-b746-9254d0f5e72f/68078699.jpeg?size=pdhism',
  'kffkff':'https://cdn.shopify.com/s/files/1/0718/7608/4009/files/HCRA50R-A_1-1_e5792939-e3cc-4977-a30b-82601463692e.jpg?v=1739946580',
  'hongyi':'https://i5.walmartimages.com/seo/Black-Decker-Retractable-Extension-Cord-50-ft-14AWG-Power-Cable-Garden-and-Workshop-Power-Cord-Reel-for-Electric-Tools_a6f69990-794a-4184-8244-ba7c7e8b144e.38812799ef2a31576e95554ba405b76a.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573',
  'goodyear':'https://images.thdstatic.com/productImages/11b18a49-5f3a-4130-94ee-d223d5c7234a/svn/husky-extension-cord-reels-em-hsk-500n-64_600.jpg',
  'reelworks':'https://images.thdstatic.com/productImages/11b18a49-5f3a-4130-94ee-d223d5c7234a/svn/husky-extension-cord-reels-em-hsk-500n-64_600.jpg',
  'masterplug':'https://images.thdstatic.com/productImages/11b18a49-5f3a-4130-94ee-d223d5c7234a/svn/husky-extension-cord-reels-em-hsk-500n-64_600.jpg'
};

const grid = document.querySelector('#competitorGrid');
const channelFilter = document.querySelector('#channelFilter');
const gaugeFilter = document.querySelector('#gaugeFilter');
const searchInput = document.querySelector('#searchInput');
const resultCount = document.querySelector('#resultCount');

function gaugeGroup(value){if(value.includes('12'))return '12';if(value.includes('14'))return '14';if(value.includes('16'))return '16';return 'other'}
function render(){
  const query=searchInput.value.trim().toLowerCase(); const channel=channelFilter.value; const gauge=gaugeFilter.value;
  const visible=competitors.filter(c=>(channel==='all'||c.channel.includes(channel))&&(gauge==='all'||gaugeGroup(c.gauge)===gauge)&&(`${c.brand} ${c.title} ${c.gauge} ${c.length}`.toLowerCase().includes(query)));
  resultCount.textContent=`显示 ${visible.length} / ${competitors.length} 个公开可见竞品`;
  grid.innerHTML=visible.map(c=>`<article class="competitor-card">
    <div class="screen" data-brand="${c.brand}"><img src="${remoteProductImages[c.id] || `assets/${c.id}.png`}" alt="${c.brand} ${c.title} 公开产品页主图" onload="this.classList.add('loaded')" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fallback',textContent:'公开产品页视觉加载失败\n可点击下方原始链接查看'}))"></div>
    <div class="card-body"><div class="card-top"><span class="card-brand">${c.brand}</span><span class="pressure">${c.pressure}</span></div>
      <h3 class="card-title">${c.title}</h3><p class="card-spec">${c.length} · ${c.gauge} · 评分/评论：${c.rating}</p>
      <div class="tag-row">${c.channel.split(' / ').map(x=>`<span class="tag">${x}</span>`).join('')}</div>
      <p class="card-insight"><b>优势：</b>${c.strength}<br><b>短板：</b>${c.weakness}</p>
      <div class="card-footer"><strong class="price">${c.price}</strong><a class="source-link" href="${c.link}" target="_blank" rel="noreferrer">原始页面 ↗</a></div>
      <small class="source-line">信息来源：${c.source}</small></div></article>`).join('');
}
[channelFilter,gaugeFilter,searchInput].forEach(el=>el.addEventListener('input',render));
render();

