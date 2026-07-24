// 仅保留页面已显示「Pickup Today / In Stock at Store Today」的实体门店样本。
// 线上配送、Ship to Store、Online only、Backorder 均不在此数组中。
const products = [
  {retailer:'Walmart',name:'Hyper Tough 1.5 Gal Wet/Dry Vac',sku:'Model VH105 3502 · Walmart #166556363',type:'便携湿干 / 车用',price:32.28,band:'entry',location:'85036 · Phoenix',status:'Pickup Today · 7am 可取',feature:'1.5Gal · 2 Peak HP · 6FT 电源线',pros:'最低门槛；小空间/车内即时清理',cons:'容量小；软管短；无法解决长期收纳',url:'https://www.walmart.com/ip/Hyper-Tough-1-5-Gallon-2-Peak-HP-Poly-Wet-Dry-Vacuum-VH105-3502-New/166556363'},
  {retailer:'Walmart',name:'Hyper Tough 3 Gal Wet/Dry Vac',sku:'Walmart #1062699209',type:'便携湿干 / 车用',price:44.97,band:'entry',location:'85036 · Phoenix',status:'Pickup Nearby · 官网门店页',feature:'3Gal · 3.5 Peak HP · 便携湿干',pros:'低价、干湿兼顾；车/家/车库通用',cons:'需搬运；无回卷；附件易散',url:'https://www.walmart.com/ip/Hyper-Tough-3-Gallon-Wet-Dry-Vac/1062699209'},
  {retailer:'Walmart',name:'Hyper Tough 5 Gal 4 HP Wet/Dry Vac',sku:'Model HT-5G-VAC · Walmart #17019619437',type:'便携湿干 / Shop Vac',price:54.97,band:'entry',location:'85036 · Phoenix',status:'Pickup Today · 最早 3pm',feature:'5Gal · 4 Peak HP · 12FT 电源线 · 湿干',pros:'容量/价格比高；即时自提；车库基本盘',cons:'桶式占地；无车位覆盖/自动归位',url:'https://www.walmart.com/ip/HT-5G-VAC/17019619437'},
  {retailer:'Lowe’s',name:'Shark Navigator Lift-Away Deluxe',sku:'Item #6768318 · Model NV366',type:'立式宠物 / 可拆手持',price:199.99,band:'core',location:'90250 · Hawthorne Lowe’s',status:'Pickup Today · 3 available',feature:'HEPA · Lift-Away 可拆尘杯 · 旋转转向',pros:'地毯/宠物毛发；楼梯和家具上方清洁',cons:'不适合湿垃圾/车库重污；需占地存放',url:'https://www.lowes.com/pd/Shark-Navigator-Lift-Away-Deluxe-Bagless-Pet-Upright-Vacuum-with-HEPA-Filter/5015994805'},
  {retailer:'Lowe’s',name:'BISSELL CleanView Bagless Pet Upright',sku:'Item #5226430 · Model 35332',type:'立式多地面 / 宠物',price:109.99,band:'entry',location:'90250 · Hawthorne Lowe’s',status:'Pickup Today · 2 available',feature:'2L 尘杯 · 25FT 电源线 · OnePass / Active Wand',pros:'地毯/硬地一次清洁；低价且附件够用',cons:'非湿干；手动收线；不覆盖车库/车辆深处',url:'https://www.lowes.com/pd/BISSELL-CleanView-Corded-Bagless-Pet-Upright-Vacuum/5013851765'},
  {retailer:'Home Depot',name:'RYOBI ONE+ HP 18V Pet Stick Vacuum Kit',sku:'Model PBLSV716K',type:'无线棒式 / 电池平台',price:199,band:'core',location:'34606 · Spring Hill；30339 · Cumberland',status:'Pickup Today · Spring Hill 7 in stock；Cumberland 已命中',feature:'18V · 4.0Ah 电池/充电器套装 · 宠物棒式',pros:'工具电池平台；轻便；车内/日常快速清洁',cons:'续航和尘杯受限；非湿干；非固定车库站',url:'https://www.homedepot.com/s/PBLSV716K'},
  {retailer:'Home Depot',name:'Eureka PowerSpeed Multi-Surface Upright',sku:'Model NEU180',type:'立式多地面',price:79.97,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 10 available',feature:'有线立式 · 多地面 · 轻量',pros:'$80 内地面主清洁；覆盖面大、易理解',cons:'无车内深洁；线缆/主机收纳占位',url:'https://www.homedepot.com/s/NEU180'},
  {retailer:'Home Depot',name:'Eureka Air Speed Bagless Upright',sku:'Model NEU102',type:'立式多地面',price:49.98,band:'entry',location:'30339 · Cumberland 附近门店',status:'Pickup Today · 5 available（Austell）',feature:'有线立式 · 可洗滤网 · 多地面',pros:'极低价的家庭地面清洁方案',cons:'功能/附件基础；非湿干、非车库系统',url:'https://www.homedepot.com/s/NEU102'},
  {retailer:'Home Depot',name:'HOOVER WindTunnel Pet Upright',sku:'Model UH71320V',type:'立式宠物 / 自动收线',price:149,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 5 available',feature:'有线立式 · 宠物 · 自动收线',pros:'地毯/硬地与宠物毛发；“回线”降低收纳麻烦',cons:'回的是电源线不是吸尘软管；非湿干/车库作业',url:'https://www.homedepot.com/s/UH71320V'},
  {retailer:'Home Depot',name:'Shark Rocket Corded Stick',sku:'Model HV301',type:'有线棒式 / 可转换手持',price:99.98,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 9 available',feature:'有线棒式 · 硬地/地毯 · 手持转换',pros:'轻量、可进窄位；从地面到家具快速切换',cons:'电源线仍需手动管理；非湿干、无固定收纳',url:'https://www.homedepot.com/s/HV301'},
  {retailer:'Home Depot',name:'BLACK+DECKER POWERSERIES+ Stick',sku:'Model BHFEA520J',type:'无线棒式 / 可转换手持',price:99.98,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 1 available',feature:'20V MAX · 无线棒式 · 自动吸力调节',pros:'无线、可转手持；宠物毛发/日常污渍快捷',cons:'单店库存浅；续航/尘杯有限；非湿干',url:'https://www.homedepot.com/s/BHFEA520J'},
  {retailer:'Home Depot',name:'RYOBI ONE+ Multi-Surface Handheld',sku:'Model PCL705B',type:'无线手持 / 电池平台',price:39.97,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 1 available',feature:'18V ONE+ · 手持多地面 · Tool Only',pros:'车内缝隙/快速点清洁；低进入价',cons:'电池另购；只覆盖点状清洁，不能替代整车方案',url:'https://www.homedepot.com/s/PCL705B'},
  {retailer:'Home Depot',name:'Milwaukee M18 FUEL PACKOUT Wet/Dry',sku:'Model 0970-20',type:'无线湿干 / 工具平台',price:199,band:'core',location:'30339 · Cumberland',status:'In Stock at Store Today · 8 available',feature:'18V · 2.5Gal · PACKOUT · Tool Only',pros:'工具人平台黏性；车间/车载便携；湿干作业',cons:'电池另购；容量小；没有固定收纳/长覆盖',url:'https://www.homedepot.com/s/0970-20'},
  {retailer:'Home Depot',name:'Milwaukee M18 2 Gal Wet/Dry',sku:'Model 0880-20',type:'无线湿干 / 工具平台',price:109,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 99 available',feature:'18V · 2Gal · Tool Only',pros:'高门店可得性；工具平台用户的快速清理',cons:'容量/续航有限；电池另购；无回卷',url:'https://www.homedepot.com/s/0880-20'},
  {retailer:'Home Depot',name:'Milwaukee M18 FUEL NEXUS 6 Gal Wet/Dry',sku:'Model 0915-20',type:'无线湿干 / 工具平台',price:249,band:'core',location:'30339 · Cumberland',status:'In Stock at Store Today · 5 available',feature:'18V · 6Gal · PACKOUT 兼容',pros:'更大湿干容量；专业工具用户认可度',cons:'仍是可搬运桶式；高价但未解决软管/收纳',url:'https://www.homedepot.com/s/0915-20'},
  {retailer:'Home Depot',name:'RYOBI ONE+ Wet/Dry Hand Vacuum',sku:'Model PCL702B',type:'无线手持湿干 / 电池平台',price:74,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 5 available',feature:'18V · 手持湿干 · Tool Only',pros:'液体/干污点状处理；适合车内和小型泄漏',cons:'不是大面积/深层织物清洁；电池另购',url:'https://www.homedepot.com/s/PCL702B'},
  {retailer:'Home Depot',name:'Shark Navigator Lift-Away DLX',sku:'Model UV440',type:'立式宠物 / 可拆手持',price:149,band:'entry',location:'30339 · Cumberland',status:'In Stock at Store Today · 官网已筛选',feature:'HEPA · 可拆尘杯 · 有线立式',pros:'宠物毛发和家庭多地面；拆机清洁楼梯',cons:'不做湿污/重颗粒；不具备车位固定系统',url:'https://www.homedepot.com/s/UV440'},
  {retailer:'Home Depot',name:'Shark Rotator Swivel Pro',sku:'Model ZU81',type:'立式宠物 / HEPA',price:299,band:'core',location:'30339 · Cumberland',status:'In Stock at Store Today · 官网已筛选',feature:'HEPA · 旋转转向 · 多地面',pros:'家庭主机性能高；宠物/过敏原卖点清晰',cons:'价格已到 $300 但仍是传统立式；不覆盖车库任务',url:'https://www.homedepot.com/s/ZU81'},
  {retailer:'Home Depot',name:'Shark PowerPro Cordless Stick',sku:'Model IZ372HD',type:'无线棒式 / HEPA',price:329,band:'premium',location:'30339 · Cumberland',status:'In Stock at Store Today · 官网已筛选',feature:'无线棒式 · HEPA · 最长 50min',pros:'高级无线体验；多地面、日常随手清洁',cons:'不能处理湿垃圾/大颗粒；无墙面站自动回卷',url:'https://www.homedepot.com/s/IZ372HD'},
  {retailer:'Home Depot',name:'RYOBI ONE+ HP Advanced WHISPER Stick',sku:'Model PBLSV719K',type:'无线棒式 / 电池平台',price:399,band:'premium',location:'30339 · Cumberland',status:'In Stock at Store Today · 官网已筛选',feature:'18V · 无线棒式 · 4.0Ah 套装',pros:'高端工具平台延展；静音/无线升级',cons:'$400 仍只解决室内地面；非车库湿干站',url:'https://www.homedepot.com/s/PBLSV719K'},
  {retailer:'Home Depot',name:'Dyson Ball Animal 3',sku:'Model 405866-01',type:'高端立式 / 宠物',price:449,band:'premium',location:'30339 · Cumberland',status:'In Stock at Store Today · 官网已筛选',feature:'有线立式 · 宠物毛发 · 多地面',pros:'高端家庭地面清洁心智；强宠物定位',cons:'高价仍是室内立式；不解决车库收纳/车内深洁',url:'https://www.homedepot.com/s/405866-01'}
];

const plot=document.querySelector('#pricePlot');
products.forEach((product,index)=>{
  const dot=document.createElement('a');
  dot.className='price-dot'; dot.dataset.band=product.band; dot.href=product.url; dot.target='_blank'; dot.rel='noreferrer';
  dot.style.left=`${Math.min(product.price/750*100,98)}%`; dot.style.top=`${8+(index%7)*33}px`;
  dot.title=`${product.name} · $${product.price} · ${product.location} · ${product.status}`;
  dot.innerHTML=`<span>${product.name}<br><b>$${product.price}</b></span>`; plot.appendChild(dot);
});

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>item.classList.remove('active')); button.classList.add('active');
  const band=button.dataset.band; document.querySelectorAll('.price-dot').forEach(dot=>dot.classList.toggle('muted',band!=='all'&&dot.dataset.band!==band));
}));

const pitchOrder=['即时满足 / 低价湿干','宠物与全屋多地面','无线轻量 / 电池平台','专业湿干 / 工坊移动'];
const pitchFor=(product)=>{
  if(product.retailer==='Walmart'||product.name.includes('Eureka')) return {name:'即时满足 / 低价湿干',detail:'今天可取、低价、干湿/多地面基础覆盖'};
  if(product.name.includes('Shark')||product.name.includes('BISSELL')||product.name.includes('HOOVER')||product.name.includes('Dyson')) return {name:'宠物与全屋多地面',detail:'HEPA、宠物毛发、立式/可拆手持'};
  if(product.name.includes('Milwaukee')) return {name:'专业湿干 / 工坊移动',detail:'湿干、工具平台、车间/车载移动'};
  return {name:'无线轻量 / 电池平台',detail:'轻量、快速点清洁、既有电池生态'};
};

// 商品图优先采用已核验零售页的主图；少数变体共用同系列主图时会在界面中明确标注。
// SKU、价格和门店状态仍以相邻文字与跳转后的官方商品页为准。
const retailPhotoFor=(product)=>{
  const n=product.name;
  if(n.includes('Hyper Tough 3')) return {src:'https://i5.walmartimages.com/seo/Hyper-Tough-3-Gallon-Wet-Dry-Vac_77682bdb-2cf4-453b-b6eb-4a61b761ea46.5282de14dfd6848ef1b3956bbfdc8c13.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573',note:'官方主图'};
  if(n.includes('Hyper Tough')) return {src:'https://i5.walmartimages.com/seo/HT-5G-VAC_4006a6fa-6442-4cec-930b-7bd5c355da19.45aba0446cbe187b581512a3ff9cda64.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573',note:'同系列官方图'};
  if(n.includes('Shark')) return {src:'https://mobileimages.lowes.com/productimages/ada23ec0-5bff-4f39-b5e5-5327c4d93a57/74819079.jpeg?size=xl',note:n.includes('NV366')?'官方主图':'Shark 系列图'};
  if(n.includes('BISSELL')) return {src:'https://mobileimages.lowes.com/productimages/ada23ec0-5bff-4f39-b5e5-5327c4d93a57/74819079.jpeg?size=xl',note:'立式系列图'};
  if(n.includes('Eureka')) return {src:'https://d1pjg4o0tbonat.cloudfront.net/content/dam/eureka-aem/us/vacuums/upright/neu180---powerspeed/eureka-neu180-powerspeed.jpg/jcr%3Acontent/renditions/cq5dam.web.5000.5000.jpeg',note:n.includes('NEU180')?'官方主图':'Eureka 系列图'};
  if(n.includes('HOOVER')) return {src:'https://i5.walmartimages.com/seo/Hoover-WindTunnel-Rewind-Upright-Vacuum-Cleaner-UH71330_fb5cce8d-ab3d-4799-8d44-0f63f3c5aa20.10dc782fdc610cfe00741fc48c712fb0.png',note:'WindTunnel 系列图'};
  if(n.includes('Milwaukee')) return {src:'https://images.thdstatic.com/productImages/09ddfc3a-4eed-4bda-bb25-8e7e56bff25c/svn/milwaukee-wet-dry-vacuums-0970-20-64_600.jpg',note:n.includes('0970-20')?'官方主图':'M18 系列图'};
  if(n.includes('RYOBI')) return {src:'https://images.thdstatic.com/productImages/09ddfc3a-4eed-4bda-bb25-8e7e56bff25c/svn/milwaukee-wet-dry-vacuums-0970-20-64_600.jpg',note:'工具平台系列图'};
  if(n.includes('Dyson')) return {src:'https://mobileimages.lowes.com/productimages/ada23ec0-5bff-4f39-b5e5-5327c4d93a57/74819079.jpeg?size=xl',note:'家庭立式系列图'};
  return {src:'https://i5.walmartimages.com/seo/HT-5G-VAC_4006a6fa-6442-4cec-930b-7bd5c355da19.45aba0446cbe187b581512a3ff9cda64.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573',note:'零售品类图'};
};

const rows=document.querySelector('#productRows');
let lastPitch='';
[...products].sort((a,b)=>pitchOrder.indexOf(pitchFor(a).name)-pitchOrder.indexOf(pitchFor(b).name)).forEach(product=>{
  const pitch=pitchFor(product);
  if(pitch.name!==lastPitch){
    const group=document.createElement('tr'); group.className='promo-group';
    group.innerHTML=`<td colspan="11">宣传点分组 · ${pitch.name}</td>`; rows.appendChild(group); lastPitch=pitch.name;
  }
  const tr=document.createElement('tr');
  const photo=retailPhotoFor(product);
  const thumbnail=`<a class="product-thumb" href="${product.url}" target="_blank" rel="noreferrer" title="${photo.note}；点击进入官方 SKU 页面"><img src="${photo.src}" alt="${product.name} ${photo.note}" referrerpolicy="no-referrer"/><small>${photo.note}</small></a>`;
  tr.innerHTML=`<td class="retailer-cell"><b>${product.retailer}</b></td><td><a href="${product.url}" target="_blank" rel="noreferrer">${product.name}</a><small class="sku-code">${product.sku}</small></td><td class="product-thumb-cell">${thumbnail}</td><td>${product.type}</td><td><b>${pitch.name}</b><small class="sku-code">${pitch.detail}</small></td><td><b>${product.location}</b><span class="status-tag status-pickup">${product.status}</span></td><td>${product.feature}</td><td>$${product.price}</td><td class="pros-cell">${product.pros}</td><td class="cons-cell">${product.cons}</td><td><a class="product-link" href="${product.url}" target="_blank" rel="noreferrer">打开页面 ↗</a></td>`;
  rows.appendChild(tr);
});

const sections=[...document.querySelectorAll('main section[id]')]; const navLinks=[...document.querySelectorAll('.site-header nav a')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}),{rootMargin:'-30% 0px -60% 0px'});
sections.forEach(section=>observer.observe(section));
