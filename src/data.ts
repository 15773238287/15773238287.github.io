export type Lesson = {
  id: string;
  nav: string;
  title: string;
  minutes: number;
  color: string;
};

export const lessons: Lesson[] = [
  { id: "news", nav: "时事", title: "世界正在发生什么", minutes: 55, color: "#a74732" },
  { id: "economy", nav: "经济", title: "把因果链真正理顺", minutes: 35, color: "#c68738" },
  { id: "history", nav: "历史", title: "建立秦与世界的坐标", minutes: 55, color: "#355f58" },
  { id: "geography", nav: "地理", title: "把新闻放回地图", minutes: 20, color: "#4d6a80" },
  { id: "review", nav: "回忆", title: "关掉材料，主动提取", minutes: 15, color: "#66556d" },
];

export const briefings = [
  { level: "A", category: "货币政策", title: "美联储维持利率不变：现在不是“为了抗通胀而降息”", summary: "6月会议把联邦基金目标区间维持在 3.5%–3.75%。通胀仍高于 2%目标，能源价格又带来供给侧压力。", why: "决定美元、全球资金成本，也影响黄金和成长股估值。", source: "Federal Reserve" },
  { level: "A", category: "全球经济", title: "能源冲击没有立刻拖垮全球增长，但脆弱性正在分化", summary: "IMF认为经济整体仍有韧性，能源进口国、财政空间有限的经济体承受更高通胀与融资压力。", why: "同一次油价上涨，对出口国和进口国几乎是两种故事。", source: "IMF" },
  { level: "B", category: "科技与市场", title: "AI投资继续托住增长，也把市场押注集中到少数公司", summary: "数据中心与AI资本开支支撑美国和亚洲科技出口，但高估值要求未来利润兑现。", why: "技术进步是真实变量，资产价格仍可能提前透支它。", source: "IMF" },
  { level: "B", category: "资产价格", title: "为什么不确定性上升时，黄金也可能短期下跌？", summary: "避险需求推升黄金，但实际利率、美元和投资者补保证金的需求，可能在短期形成反向压力。", why: "“避险=必涨”是直觉，不是完整模型。", source: "知识解释" },
];

export const dynasties = [
  { name: "秦", years: "前221—前207", event: "统一制度与疆域" },
  { name: "汉", years: "前202—220", event: "帝国结构定型" },
  { name: "魏晋南北朝", years: "220—589", event: "分裂、融合与迁徙" },
  { name: "隋唐", years: "581—907", event: "重建统一与开放秩序" },
  { name: "宋元", years: "960—1368", event: "商业革命与欧亚联通" },
  { name: "明清", years: "1368—1912", event: "全球化前夜与近代冲击" },
];
