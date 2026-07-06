import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Flame,
  Menu,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { lessons } from "./data";
import { dailyBriefings as briefings } from "./daily";
import { HistoryDeepDive } from "./HistoryDeepDive";
import { WorldNewsMap } from "./WorldNewsMap";

const STORAGE_KEY = "zongheng-progress-v1";

function ProgressRing({ value }: { value: number }) {
  return (
    <div className="progress-ring" style={{ "--progress": `${value * 3.6}deg` } as React.CSSProperties}>
      <div>
        <strong>{value}%</strong>
        <span>今日完成</span>
      </div>
    </div>
  );
}

function Header({ active, onNav }: { active: string; onNav: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const nav = ["今日", "时事", "历史", "地理", "复习"];
  return (
    <header className="header">
      <a className="brand" href="#top" onClick={() => onNav("今日")} aria-label="纵横首页">
        <span className="brand-seal">纵</span>
        <span>纵横</span>
        <small>ZONGHENG</small>
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="打开导航">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {nav.map((item) => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => {
              onNav(item);
              setOpen(false);
            }}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="header-meta">
        <span><Flame size={16} /> 连续学习 <b>7</b> 天</span>
        <span className="avatar">知</span>
      </div>
    </header>
  );
}

function DailyRoute({
  complete,
  onToggle,
}: {
  complete: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <section className="daily-route">
      <div className="section-heading compact">
        <div>
          <span className="index">01</span>
          <h2>今日学习路线</h2>
        </div>
        <p>总计 180 分钟 · 可以分段完成</p>
      </div>
      <div className="route-line">
        {lessons.map((lesson, index) => {
          const done = complete.includes(lesson.id);
          return (
            <button
              key={lesson.id}
              className={done ? "route-step done" : "route-step"}
              onClick={() => onToggle(lesson.id)}
              style={{ "--lesson-color": lesson.color } as React.CSSProperties}
            >
              <span className="step-number">{done ? <Check size={15} /> : index + 1}</span>
              <span className="step-copy">
                <b>{lesson.nav}</b>
                <small>{lesson.minutes} 分钟</small>
              </span>
              <span className="step-title">{lesson.title}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function EconomyExplainer() {
  const [mode, setMode] = useState<"normal" | "shock">("normal");
  const normal = ["需求逐步降温", "通胀持续回落", "央行获得降息空间", "融资成本下降", "资产重新估值"];
  const shock = ["能源供给受阻", "成本推动型通胀", "增长同时承压", "央行陷入两难", "降息未必马上发生"];
  const chain = mode === "normal" ? normal : shock;
  return (
    <section className="lead-story" id="economy">
      <div className="story-topline">
        <span>今日主线 · 经济原理</span>
        <button aria-label="收藏"><Bookmark size={18} /></button>
      </div>
      <div className="lead-grid">
        <div>
          <h2>就业降温、通胀与利率：<br />央行怎样判断转向时点？</h2>
          <p className="dek">
            6月新增就业放慢，增加了未来降息的理由，但一个月的数据还不足以触发政策转向。央行要同时判断：
            需求是否持续降温、通胀是否回落，以及就业走弱会不会从“正常化”变成衰退。
          </p>
          <div className="fact-note">
            <b>事实校准</b>
            <p>美国6月非农就业增加5.7万，失业率为4.2%；4—5月新增就业合计下修7.4万。</p>
          </div>
        </div>
        <div className="causal-panel">
          <div className="scenario-switch">
            <button className={mode === "normal" ? "active" : ""} onClick={() => setMode("normal")}>需求型路径</button>
            <button className={mode === "shock" ? "active" : ""} onClick={() => setMode("shock")}>供给冲击</button>
          </div>
          <div className="causal-chain">
            {chain.map((item, index) => (
              <div className="cause" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{item}</b>
                {index < chain.length - 1 ? <ArrowRight size={18} /> : null}
              </div>
            ))}
          </div>
          <p className="model-note">
            {mode === "normal"
              ? "这是一条典型的需求管理链条。真实政策还要同时观察就业、预期与金融稳定。"
              : "油价上涨属于负向供给冲击：价格上升、产出下降，因此央行不能机械地用“降息抗通胀”。"}
          </p>
        </div>
      </div>
      <div className="economy-deep-dive">
        <div className="deep-dive-intro">
          <span>把中间省略的步骤补回来</span>
          <h3>加息不是直接按下“降价按钮”，它先改变每个人借钱和花钱的选择</h3>
          <p>
            央行能直接控制的是短期政策利率，而不是超市价格。它必须通过金融体系影响家庭和企业行为，
            再由总需求变化影响就业、工资和企业定价。这个传导通常需要数月甚至更久。
          </p>
        </div>
        <ol className="mechanism-steps">
          <li>
            <span>01</span><div><b>央行加息</b><p>银行获得资金的成本上升，国债收益率和市场基准利率随之调整。</p></div>
          </li>
          <li>
            <span>02</span><div><b>贷款和融资变贵</b><p>房贷、车贷、信用卡和企业债利率上升；未来现金流的折现率也提高。</p></div>
          </li>
          <li>
            <span>03</span><div><b>消费与投资推迟</b><p>家庭少买耐用品，企业减少设备、库存和扩张项目，房地产活动降温。</p></div>
          </li>
          <li>
            <span>04</span><div><b>就业和工资压力减弱</b><p>订单减少后，企业招聘放慢，劳动者议价能力下降，工资增速可能回落。</p></div>
          </li>
          <li>
            <span>05</span><div><b>通胀逐步回落</b><p>企业更难继续提价，需求型通胀受到压制；政策效果终于进入物价数据。</p></div>
          </li>
        </ol>
        <div className="economy-concepts">
          <article>
            <span>关键概念 1</span>
            <h3>为什么通胀下降后，反而更需要考虑降息？</h3>
            <p>
              因为企业和家庭真正感受到的是<b>实际利率</b>，可粗略理解为“名义利率减去预期通胀率”。
              假设名义利率保持 4%，通胀从 4%降到 2%，实际利率就从约 0%升到约 2%。
              即使央行什么也没做，政策实际上已经变得更紧。此时适度降息，是防止紧缩力度继续自动加大。
            </p>
            <div className="formula"><span>实际利率</span><b>≈</b><span>名义利率</span><b>−</b><span>预期通胀</span></div>
          </article>
          <article>
            <span>关键概念 2</span>
            <h3>油价上涨时，为什么央行会特别难办？</h3>
            <p>
              高利率不能生产石油，也不能疏通海峡。供给冲击会同时造成“价格更高”和“增长更弱”：
              加息可以防止通胀预期失控，却会进一步压低需求；过早降息可以托住增长，却可能让第二轮涨价扩散到工资和服务。
              所以央行要判断冲击是一次性的，还是已经改变了公众预期。
            </p>
          </article>
          <article className="household-example">
            <span>生活中的例子</span>
            <h3>一套房如何把利率传到实体经济</h3>
            <p>
              房贷月供上升，买房者减少；开发商销售放慢，减少拿地和开工；家具、家电、装修订单随之下降；
              相关企业招聘变谨慎。央行并没有命令这些行业降价，而是通过资金价格改变了整条需求链。
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function NewsBriefing() {
  const [expanded, setExpanded] = useState(0);
  return (
    <section className="news-section" id="news">
      <div className="section-heading">
        <div>
          <span className="index">02</span>
          <p className="section-label">THE DAILY BRIEF</p>
          <h2>过去24小时的四条重要主线</h2>
        </div>
        <p>不是知道得更多，<br />而是知道什么更重要。</p>
      </div>
      <div className="briefing-list">
        {briefings.map((item, index) => (
          <article className={expanded === index ? "briefing-row expanded" : "briefing-row"} key={item.title}>
            <span className={`importance level-${item.level.toLowerCase()}`}>{item.level}</span>
            <div className="briefing-main">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              {expanded === index ? (
                <div className="briefing-expanded">
                  <div className="briefing-background">
                    <b>背景与上下文</b>
                    <p>{item.background}</p>
                  </div>
                  <div className="briefing-mechanism">
                    <b>事情怎样一步步影响经济</b>
                    <ol>
                      {item.explanation.map((step, stepIndex) => (
                        <li key={step}><span>{stepIndex + 1}</span><p>{step}</p></li>
                      ))}
                    </ol>
                  </div>
                  <div className="briefing-lower">
                    <div>
                      <b>容易误解的地方</b>
                      <p>{item.misconception}</p>
                    </div>
                    <div>
                      <b>接下来观察什么</b>
                      <ul>{item.watch.map((watch) => <li key={watch}>{watch}</li>)}</ul>
                    </div>
                  </div>
                  <small className="briefing-source">主要依据：{item.source} · 事实、解释与推演分层整理</small>
                </div>
              ) : null}
            </div>
            <button className="read-more" onClick={() => setExpanded(expanded === index ? -1 : index)}>
              {expanded === index ? "收起" : "展开"} <ChevronRight size={17} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function RecallPanel() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="recall-card">
      <div className="recall-title"><CircleHelp size={19} /><span>你还记得吗？</span></div>
          <p>为什么“6月仍新增5.7万个岗位”不能单独证明美国就业市场强劲？</p>
      <button onClick={() => setRevealed((value) => !value)}>
        {revealed ? "隐藏答案" : "想一想，再看答案"}
      </button>
      {revealed ? (
        <div className="answer">
          因为单月新增就业必须和失业率、劳动参与率、工资、行业分布及前值修正一起看。本月参与率下降，且4—5月数据合计下修7.4万，说明招聘动能比单一正数更弱。
        </div>
      ) : null}
    </div>
  );
}

function App() {
  const [active, setActive] = useState("今日");
  const [complete, setComplete] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    } catch {
      return [];
    }
  });
  const minutes = useMemo(
    () => lessons.filter((lesson) => complete.includes(lesson.id)).reduce((sum, lesson) => sum + lesson.minutes, 0),
    [complete],
  );
  const progress = Math.round((minutes / 180) * 100);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(complete));
  }, [complete]);

  const toggleLesson = (id: string) => {
    setComplete((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const navigate = (item: string) => {
    setActive(item);
    const ids: Record<string, string> = { 今日: "top", 时事: "news", 历史: "history", 地理: "geography", 复习: "recall" };
    document.getElementById(ids[item])?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="top">
      <Header active={active} onNav={navigate} />
      <main>
        <section className="opening">
          <div className="edition"><span>2026年7月3日</span><span>星期五 · 第 002 期</span></div>
          <div className="opening-main">
            <div className="hero-copy">
              <h1>今天，用三条线索<br />看懂世界</h1>
              <p>就业降温怎样改变利率预期，停火如何穿过海峡影响能源价格，AI与绿色投资又怎样落到真实产业。</p>
              <button className="primary-button" onClick={() => document.getElementById("news")?.scrollIntoView({ behavior: "smooth" })}>
                开始今日学习 <ArrowRight size={18} />
              </button>
            </div>
            <div className="day-thesis">
              <span>今日三条线索</span>
              <ol>
                <li><b>01</b><p>就业降温</p><small>招聘、工资与降息预期</small></li>
                <li><b>02</b><p>停火溢价</p><small>海峡、能源与全球通胀</small></li>
                <li><b>03</b><p>产业落地</p><small>AI部署、标准与绿色投资</small></li>
              </ol>
            </div>
          </div>
        </section>

        <div className="content-shell">
          <div className="main-column">
            <DailyRoute complete={complete} onToggle={toggleLesson} />
            <EconomyExplainer />
            <NewsBriefing />
          </div>
          <aside className="sidebar">
            <div className="progress-card">
              <div className="sidebar-head"><span>今日进度</span><Clock3 size={17} /></div>
              <ProgressRing value={progress} />
              <strong className="minutes">{minutes} <small>/ 180 分钟</small></strong>
              <div className="progress-stats">
                <span><b>{complete.length}</b> 已完成</span>
                <span><b>12</b> 待复习</span>
              </div>
              {complete.length ? (
                <button className="reset" onClick={() => setComplete([])}><RotateCcw size={14} /> 重置今日</button>
              ) : null}
            </div>
            <div id="recall"><RecallPanel /></div>
            <div className="method-note">
              <Sparkles size={18} />
              <div><b>今天的学习原则</b><p>先搭骨架，再填细节；先讲因果，再记结论；每学 45 分钟，闭眼复述 3 分钟。</p></div>
            </div>
          </aside>
        </div>
        <HistoryDeepDive />
        <WorldNewsMap />
        <section className="closing">
          <p>今天读完，不等于今天记住。</p>
          <h2>用 15 分钟，把知识真正留下来。</h2>
          <button onClick={() => navigate("复习")}>开始回忆测试 <ArrowRight size={18} /></button>
        </section>
      </main>
      <footer>
        <div className="brand"><span className="brand-seal">纵</span><span>纵横</span></div>
        <p>每天三小时，把世界装进一张有坐标的知识地图。</p>
        <span>内容校准于 2026-07-03 · 事实、解释与推演分层呈现</span>
      </footer>
    </div>
  );
}

export default App;
