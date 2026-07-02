import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Bookmark, Check, ChevronRight, CircleHelp, Clock3, Flame, Globe2, Map, Menu, RotateCcw, Sparkles, X } from "lucide-react";
import { briefings, dynasties, lessons } from "./data";

const STORAGE_KEY = "zongheng-progress-v1";

function ProgressRing({ value }: { value: number }) {
  return <div className="progress-ring" style={{ "--progress": `${value * 3.6}deg` } as React.CSSProperties}><div><strong>{value}%</strong><span>今日完成</span></div></div>;
}

function Header({ active, onNav }: { active: string; onNav: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const nav = ["今日", "时事", "历史", "地理", "复习"];
  return <header className="header">
    <a className="brand" href="#top" onClick={() => onNav("今日")} aria-label="纵横首页"><span className="brand-seal">纵</span><span>纵横</span><small>ZONGHENG</small></a>
    <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="打开导航">{open ? <X /> : <Menu />}</button>
    <nav className={open ? "nav open" : "nav"}>{nav.map(item => <button key={item} className={active === item ? "active" : ""} onClick={() => { onNav(item); setOpen(false); }}>{item}</button>)}</nav>
    <div className="header-meta"><span><Flame size={16} /> 连续学习 <b>7</b> 天</span><span className="avatar">知</span></div>
  </header>;
}

function DailyRoute({ complete, onToggle }: { complete: string[]; onToggle: (id: string) => void }) {
  return <section className="daily-route"><div className="section-heading compact"><div><span className="index">01</span><h2>今日学习路线</h2></div><p>总计 180 分钟 · 可以分段完成</p></div>
    <div className="route-line">{lessons.map((lesson, index) => { const done = complete.includes(lesson.id); return <button key={lesson.id} className={done ? "route-step done" : "route-step"} onClick={() => onToggle(lesson.id)} style={{ "--lesson-color": lesson.color } as React.CSSProperties}>
      <span className="step-number">{done ? <Check size={15} /> : index + 1}</span><span className="step-copy"><b>{lesson.nav}</b><small>{lesson.minutes} 分钟</small></span><span className="step-title">{lesson.title}</span>
    </button>; })}</div></section>;
}

function EconomyExplainer() {
  const [mode, setMode] = useState<"normal" | "shock">("normal");
  const normal = ["需求逐步降温", "通胀持续回落", "央行获得降息空间", "融资成本下降", "资产重新估值"];
  const shock = ["能源供给受阻", "成本推动型通胀", "增长同时承压", "央行陷入两难", "降息未必马上发生"];
  const chain = mode === "normal" ? normal : shock;
  return <section className="lead-story" id="economy"><div className="story-topline"><span>今日主线 · 经济原理</span><button aria-label="收藏"><Bookmark size={18} /></button></div>
    <div className="lead-grid"><div><h2>降息、通胀与市场：<br />到底谁推着谁走？</h2><p className="dek">先纠正一个常见倒置：通常不是“为了缓解通胀而降息”，而是加息先抑制需求；当通胀确实回落、就业或增长转弱，央行才可能降息。</p><div className="fact-note"><b>事实校准</b><p>美联储 6 月维持政策利率在 3.5%–3.75%，并指出通胀仍高于 2%目标。</p></div></div>
      <div className="causal-panel"><div className="scenario-switch"><button className={mode === "normal" ? "active" : ""} onClick={() => setMode("normal")}>需求型路径</button><button className={mode === "shock" ? "active" : ""} onClick={() => setMode("shock")}>供给冲击</button></div>
        <div className="causal-chain">{chain.map((item, index) => <div className="cause" key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b>{index < chain.length - 1 ? <ArrowRight size={18} /> : null}</div>)}</div>
        <p className="model-note">{mode === "normal" ? "这是一条典型的需求管理链条。真实政策还要同时观察就业、预期与金融稳定。" : "油价上涨属于负向供给冲击：价格上升、产出下降，因此央行不能机械地用“降息抗通胀”。"}</p>
      </div></div></section>;
}

function NewsBriefing() {
  const [expanded, setExpanded] = useState(0);
  return <section className="news-section" id="news"><div className="section-heading"><div><span className="index">02</span><p className="section-label">THE DAILY BRIEF</p><h2>今天值得知道的四件事</h2></div><p>不是知道得更多，<br />而是知道什么更重要。</p></div>
    <div className="briefing-list">{briefings.map((item, index) => <article className={expanded === index ? "briefing-row expanded" : "briefing-row"} key={item.title}><span className={`importance level-${item.level.toLowerCase()}`}>{item.level}</span><div className="briefing-main"><span className="category">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p>{expanded === index ? <div className="why"><b>为什么重要</b><span>{item.why}</span><small>依据：{item.source} · 2026-07-02 编辑</small></div> : null}</div><button className="read-more" onClick={() => setExpanded(expanded === index ? -1 : index)}>{expanded === index ? "收起" : "展开"} <ChevronRight size={17} /></button></article>)}</div>
  </section>;
}

function HistoryTimeline() {
  const [selected, setSelected] = useState(0);
  const world = ["罗马共和国扩张；印度孔雀王朝", "罗马帝国兴衰；丝绸之路网络", "拜占庭延续；欧洲民族迁徙", "伊斯兰帝国兴起；欧亚贸易活跃", "十字军与蒙古扩张；海贸兴盛", "大航海、工业革命与民族国家"];
  return <section className="history-section" id="history"><div className="section-heading light"><div><span className="index">03</span><p className="section-label">HISTORY IN CONTEXT</p><h2>从秦统一开始，搭起中国史的骨架</h2></div><p>今天先记结构，不背碎片。<br />同一时刻，世界在发生什么？</p></div>
    <div className="history-rail">{dynasties.map((item, index) => <button key={item.name} onClick={() => setSelected(index)} className={selected === index ? "selected" : ""}><span className="dot" /><b>{item.name}</b><small>{item.years}</small></button>)}</div>
    <div className="context-compare"><div className="context-china"><span>中国线</span><h3>{dynasties[selected].name}</h3><p>{dynasties[selected].event}</p><blockquote>{selected === 0 ? "秦的意义不只在“第一个统一王朝”，更在于把郡县、文字、度量衡与交通网络变成可复制的帝国制度。" : `把“${dynasties[selected].event}”作为这一时期的主记忆钩子，再往上挂人物与事件。`}</blockquote></div>
      <div className="parallel-mark"><Globe2 /><span>同时</span></div><div className="context-world"><span>世界线</span><h3>{world[selected].split("；")[0]}</h3><p>{world[selected]}</p><div className="coordinate"><Map size={18} /><span>把年代放进同一条时间轴，避免中国史与世界史各自悬空。</span></div></div></div>
  </section>;
}

function GeographySection() { return <section className="geo-section" id="geography"><div className="geo-copy"><span className="index">04</span><p className="section-label">GEOGRAPHY OF THE NEWS</p><h2>地图不是配图，<br />它是因果的一部分</h2><p>今天的三个位置：霍尔木兹海峡、欧洲能源进口线、亚洲制造业带。距离、通道与资源禀赋，决定冲击如何扩散。</p><button>进入今日地图 <ArrowRight size={17} /></button></div>
  <div className="map-board" role="img" aria-label="世界新闻地理关系示意图"><svg viewBox="0 0 700 360" aria-hidden="true"><path className="land" d="M54 111l55-45 94 12 34 35 51 11-18 42-78 18-20 47-79-8-36-43zM302 71l55-34 79 20 28 51-35 31 30 63-23 87-50-18-19-85-53-31-34-38zM490 94l45-25 61 19 57 70-25 40-81-14-32-42zM538 252l47-20 60 29-16 46-61 8-42-34z" /><path className="route red" d="M417 174C484 134 535 136 594 163" /><path className="route gold" d="M417 174C359 122 294 105 230 116" /><path className="route blue" d="M417 174C487 213 542 247 582 278" /><circle cx="417" cy="174" r="7" /><circle cx="594" cy="163" r="5" /><circle cx="230" cy="116" r="5" /><circle cx="582" cy="278" r="5" /></svg><span className="map-label hormuz">霍尔木兹海峡<br /><b>全球能源咽喉</b></span><span className="map-label europe">欧洲<br /><b>进口依赖</b></span><span className="map-label asia">亚洲<br /><b>制造与需求</b></span><div className="map-legend"><i /> 能源冲击传播路径</div></div></section>; }

function RecallPanel() {
  const [revealed, setRevealed] = useState(false);
  return <div className="recall-card"><div className="recall-title"><CircleHelp size={19} /><span>你还记得吗？</span></div><p>为什么“美国降息是为了缓解通胀”这句话通常把因果说反了？</p><button onClick={() => setRevealed(v => !v)}>{revealed ? "隐藏答案" : "想一想，再看答案"}</button>{revealed ? <div className="answer">降息会降低借贷成本，通常刺激需求，并非直接压低通胀。央行往往是在此前的紧缩已让通胀回落、经济转弱后，才开始降息。</div> : null}</div>;
}

function App() {
  const [active, setActive] = useState("今日");
  const [complete, setComplete] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); } catch { return []; } });
  const minutes = useMemo(() => lessons.filter(l => complete.includes(l.id)).reduce((sum, l) => sum + l.minutes, 0), [complete]);
  const progress = Math.round((minutes / 180) * 100);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(complete)); }, [complete]);
  const toggleLesson = (id: string) => setComplete(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const navigate = (item: string) => { setActive(item); const ids: Record<string, string> = { 今日: "top", 时事: "news", 历史: "history", 地理: "geography", 复习: "recall" }; document.getElementById(ids[item])?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return <div id="top"><Header active={active} onNav={navigate} /><main>
    <section className="opening"><div className="edition"><span>2026年7月2日</span><span>星期四 · 第 001 期</span></div><div className="opening-main"><div className="hero-copy"><h1>今天，用三条线索<br />看懂世界</h1><p>能源如何推高物价，央行为何陷入两难；把今天的新闻放回历史与地图，你会看到一条更长的因果链。</p><button className="primary-button" onClick={() => document.getElementById("news")?.scrollIntoView({ behavior: "smooth" })}>开始今日学习 <ArrowRight size={18} /></button></div><div className="day-thesis"><span>今日三条线索</span><ol><li><b>01</b><p>能源冲击</p><small>海峡、油价与通胀</small></li><li><b>02</b><p>货币政策</p><small>利率、需求与资产</small></li><li><b>03</b><p>帝国治理</p><small>从秦制理解国家能力</small></li></ol></div></div></section>
    <div className="content-shell"><div className="main-column"><DailyRoute complete={complete} onToggle={toggleLesson} /><EconomyExplainer /><NewsBriefing /></div><aside className="sidebar"><div className="progress-card"><div className="sidebar-head"><span>今日进度</span><Clock3 size={17} /></div><ProgressRing value={progress} /><strong className="minutes">{minutes} <small>/ 180 分钟</small></strong><div className="progress-stats"><span><b>{complete.length}</b> 已完成</span><span><b>12</b> 待复习</span></div>{complete.length ? <button className="reset" onClick={() => setComplete([])}><RotateCcw size={14} /> 重置今日</button> : null}</div><div id="recall"><RecallPanel /></div><div className="method-note"><Sparkles size={18} /><div><b>今天的学习原则</b><p>先搭骨架，再填细节；先讲因果，再记结论；每学 45 分钟，闭眼复述 3 分钟。</p></div></div></aside></div>
    <HistoryTimeline /><GeographySection /><section className="closing"><p>今天读完，不等于今天记住。</p><h2>用 15 分钟，把知识真正留下来。</h2><button onClick={() => navigate("复习")}>开始回忆测试 <ArrowRight size={18} /></button></section>
  </main><footer><div className="brand"><span className="brand-seal">纵</span><span>纵横</span></div><p>每天三小时，把世界装进一张有坐标的知识地图。</p><span>内容校准于 2026-07-02 · 事实与解释分层呈现</span></footer></div>;
}

export default App;
