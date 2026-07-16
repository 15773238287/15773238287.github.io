const products = [
  {name:'CRAFTSMAN 5 Gal Wall Mount',price:129.99,band:'entry',reach:'21FT',feature:'5HP銆佸彲鎷嗕究鎼?,gap:'鎵嬪姩鏀剁撼銆佹棤娣辨磥',channel:'Ace',url:'https://www.acehardware.com/departments/tools/wet-dry-vacuums/wetdry-vacuums/2397776'},
  {name:'Dapper 6 Gal Wall Mount',price:184.99,band:'core',reach:'30FT',feature:'6Gal銆佸惞鍚镐袱鐢?,gap:'浣庡搧鐗屽姏銆佹棤鍥炲嵎',channel:'Wayfair',url:'https://www.wayfair.com/appliances/pdp/dapper-supply-6-gallon-wall-mount-wetdry-vacuum-55-peak-hp-30-ft-hose-vacuum-blower-includes-attachments-for-garage-car-workshop-jobsite-dpae1026.html'},
  {name:'EGO WDV0300',price:249,band:'core',reach:'7FT',feature:'56V銆?5CFM銆侀仴鎺?,gap:'鐭銆侀渶鐢垫睜',channel:'Lowe鈥檚 / EGO',url:'https://www.lowes.com/pd/EGO-EGO-Power-3-Gallon-Wet-Dry-Vacuum-Tool-Only/5016717843'},
  {name:'BISSELL Garage Pro',price:249.99,band:'core',reach:'32FT',feature:'7闄勪欢銆佸惞鍚搞€?Gal',gap:'鎵嬪姩鐩樼銆佹棤鐢靛姩鍒?,channel:'Amazon / DTC',url:'https://www.bissell.com/en-us/product/garage-pro-wet-dry-vac-18P03.html'},
  {name:'InterVac GarageVac',price:307.72,band:'premium',reach:'35FT',feature:'绱у噾銆?00 Air Watts',gap:'鏃犲洖鍗枫€?Gal',channel:'涓撲笟娓犻亾',url:'https://intervacdesign.com/product/garagevac-wall-mounted-vacuum-gh120/'},
  {name:'Giraffe Grandstorm',price:349.99,band:'premium',reach:'30FT',feature:'鑷姩鍥炲嵎銆?0kPa',gap:'鏃犵數鍔ㄦ繁娲侀檮浠?,channel:'DTC / 宸ュ叿闆跺敭',url:'https://giraffetools.com/products/retractable-vacuum-cleaner'},
  {name:'StoreWALL Garage Vac',price:459.99,band:'premium',reach:'35FT',feature:'鏁村鏀剁撼銆佷笓涓氬瑙?,gap:'浼哥缉绠￠潪鑷姩鍥炲嵎',channel:'Wayfair',url:'https://www.wayfair.com/appliances/pdp/storewall-wall-mounted-garage-canister-vacuum-tczk1284.html/'},
  {name:'Prolux Garage Vac',price:479.99,band:'premium',reach:'30FT+',feature:'162CFM銆丠EPA銆佸叏闄勪欢',gap:'鍥炲嵎涓庢敹绾冲壊瑁?,channel:'Home Depot / DTC',url:'https://www.homedepot.com/p/206642728'},
  {name:'WalVac 842',price:699,band:'system',reach:'30FT',feature:'绱у噾鍥哄畾寮忕郴缁?,gap:'鏃犺嚜鍔ㄥ洖鍗枫€佹棤婀垮惛',channel:'涓撲笟娓犻亾',url:'https://www.walvac.com/products/wall-mounted-garage-vac'}
];

const plot=document.querySelector('#pricePlot');
products.forEach((product,index)=>{
  const dot=document.createElement('a');
  dot.className='price-dot';
  dot.dataset.band=product.band;
  dot.href=product.url;
  dot.target='_blank';
  dot.rel='noreferrer';
  dot.style.left=`${Math.min(product.price/750*100,98)}%`;
  dot.style.top=`${18+(index%4)*52}px`;
  dot.title=`${product.name} 路 $${product.price}`;
  dot.innerHTML=`<span>${product.name}<br><b>$${product.price}</b></span>`;
  plot.appendChild(dot);
});

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const band=button.dataset.band;
  document.querySelectorAll('.price-dot').forEach(dot=>dot.classList.toggle('muted',band!=='all'&&dot.dataset.band!==band));
}));

const rows=document.querySelector('#productRows');
products.forEach(product=>{
  const tr=document.createElement('tr');
  tr.innerHTML=`<td><a href="${product.url}" target="_blank" rel="noreferrer">${product.name} 鈫?/a></td><td>$${product.price}</td><td>${product.reach}</td><td>${product.feature}</td><td>${product.gap}</td><td>${product.channel}</td>`;
  rows.appendChild(tr);
});

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.site-header nav a')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));
  });
},{rootMargin:'-30% 0px -60% 0px'});
sections.forEach(section=>observer.observe(section));

