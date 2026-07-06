import { useState } from "react";
import { BookOpen, Crown, Landmark, ScrollText, Swords } from "lucide-react";
import { dynasties, qinFigures, qinRulers, qinStories, qinTimeline } from "./data";

type HistoryView = "timeline" | "rulers" | "stories" | "system";

const views: { id: HistoryView; label: string; icon: typeof Crown }[] = [
  { id: "timeline", label: "关键年代", icon: ScrollText },
  { id: "rulers", label: "君主与人物", icon: Crown },
  { id: "stories", label: "典故与故事", icon: BookOpen },
  { id: "system", label: "制度与兴亡", icon: Landmark },
];

export function HistoryDeepDive() {
  const [view, setView] = useState<HistoryView>("timeline");

  return (
    <section className="history-section" id="history">
      <div className="section-heading light">
        <div>
          <span className="index">03</span>
          <p className="section-label">HISTORY IN CONTEXT</p>
          <h2>秦：不只记“统一”，<br />要看懂一个帝国怎样被造出来</h2>
        </div>
        <p>阅读约 55 分钟<br />年代、人物、制度、故事四条线</p>
      </div>

      <div className="history-rail">
        {dynasties.map((item, index) => (
          <div key={item.name} className={index === 0 ? "selected" : ""}>
            <span className="dot" />
            <b>{item.name}</b>
            <small>{item.years}</small>
          </div>
        ))}
      </div>

      <div className="qin-intro">
        <div>
          <span>先建立总认识</span>
          <h3>秦朝只有十五年，<br />秦国的崛起却用了百余年</h3>
        </div>
        <p>
          如果只从前221年秦始皇统一六国讲起，就会错过真正重要的部分。秦的优势来自商鞅变法后持续运转的官僚、
          军功、税收和基层控制体系；统一后的失败，则来自国家动员能力被使用得过猛，却缺乏吸收反对意见和调整政策的机制。
          秦亡了，但郡县制、皇帝制度和统一标准被汉朝继承，中国此后两千年的政治骨架由此成形。
        </p>
      </div>

      <div className="history-view-tabs" role="tablist" aria-label="秦史阅读主题">
        {views.map(({ id, label, icon: Icon }) => (
          <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id)} role="tab">
            <Icon size={17} /><span>{label}</span>
          </button>
        ))}
      </div>

      {view === "timeline" ? (
        <div className="qin-timeline">
          {qinTimeline.map((item) => (
            <article key={item.year}>
              <time>{item.year}</time>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      ) : null}

      {view === "rulers" ? (
        <div className="history-rulers">
          <div className="ruler-list">
            {qinRulers.map((ruler, index) => (
              <article key={ruler.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><small>{ruler.years} · {ruler.role}</small><h3>{ruler.name}</h3><p>{ruler.text}</p></div>
              </article>
            ))}
          </div>
          <div className="figures-panel">
            <h3>八个必须认识的人</h3>
            {qinFigures.map(([name, text]) => (
              <div key={name}><b>{name}</b><p>{text}</p></div>
            ))}
          </div>
        </div>
      ) : null}

      {view === "stories" ? (
        <div className="history-stories">
          {qinStories.map((story, index) => (
            <article key={story.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{story.source}</small>
              <h3>{story.name}</h3>
              <p>{story.story}</p>
              <div><b>它真正说明什么</b><p>{story.meaning}</p></div>
            </article>
          ))}
        </div>
      ) : null}

      {view === "system" ? (
        <div className="history-system">
          <div className="system-columns">
            <article>
              <Landmark />
              <h3>秦留下了什么</h3>
              <dl>
                <div><dt>皇帝制度</dt><dd>最高权力从“王”升级为超越诸侯的皇帝，中央权威获得新的政治语言。</dd></div>
                <div><dt>郡县制</dt><dd>地方官由中央任免，不再把大片土地世袭分封给宗室，强化垂直行政控制。</dd></div>
                <div><dt>统一标准</dt><dd>小篆、度量衡、货币和车轨降低跨地区交易与行政成本，推动市场和帝国整合。</dd></div>
                <div><dt>法律与文书</dt><dd>依靠户籍、律令、考核和文书治理基层，使庞大疆域可以被持续统计与动员。</dd></div>
              </dl>
            </article>
            <article>
              <Swords />
              <h3>秦为什么迅速灭亡</h3>
              <dl>
                <div><dt>动员过度</dt><dd>长城、驰道、宫殿、陵墓和边疆战争同时进行，徭役与赋税超过社会承受能力。</dd></div>
                <div><dt>刑罚严酷</dt><dd>高压可以让命令快速执行，却会在危机中把普通违法者推向“反正都是死”的集体反抗。</dd></div>
                <div><dt>继承失败</dt><dd>始皇没有建立稳定透明的继承安排；沙丘政变后，胡亥、赵高迅速清洗宗室和重臣。</dd></div>
                <div><dt>缺少纠错</dt><dd>地方不敢上报坏消息，中央也容不下公开反对。强大的执行机器失去判断方向的能力。</dd></div>
              </dl>
            </article>
          </div>
          <div className="world-parallel">
            <span>同一时期的世界</span>
            <h3>秦汉之际，不是“世界史的空白”</h3>
            <div>
              <p><b>地中海：</b>罗马共和国在第二次布匿战争中对抗迦太基，汉尼拔于前218年翻越阿尔卑斯山。</p>
              <p><b>南亚：</b>孔雀王朝在阿育王之后逐渐衰落；印度次大陆仍保留庞大的贸易与宗教网络。</p>
              <p><b>中亚：</b>希腊化诸国延续亚历山大东征后的政治文化遗产，欧亚大陆的交流通道逐步成形。</p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="history-recall">
        <b>读完请合上页面回答：</b>
        <span>为什么商鞅死后新法没有被废？</span>
        <span>秦统一天下的能力，为什么也会成为它迅速灭亡的原因？</span>
      </div>
    </section>
  );
}
