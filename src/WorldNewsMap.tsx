import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

const places = [
  {
    id: "hormuz",
    label: "霍尔木兹海峡",
    subtitle: "全球能源咽喉",
    coordinates: [56.3, 26.5] as [number, number],
    detail: "位于伊朗与阿曼之间，连接波斯湾和阿曼湾。波斯湾主要产油国的海运出口需要经过这里，因此狭窄航道一旦受阻，风险溢价会迅速进入国际油价。",
  },
  {
    id: "europe",
    label: "欧洲",
    subtitle: "能源进口与通胀",
    coordinates: [10, 50] as [number, number],
    detail: "欧洲总体能源进口依赖较高。油气价格上涨会进入交通、化工、供暖和制造业成本，同时削弱居民实际购买力，使欧洲央行面对增长与通胀的两难。",
  },
  {
    id: "east-asia",
    label: "东亚制造带",
    subtitle: "出口、供应链与需求",
    coordinates: [121, 34] as [number, number],
    detail: "中国、韩国、日本及东南亚连接成密集制造网络。能源成本影响工厂利润，欧美需求影响出口，而AI资本开支又会拉动芯片、服务器与电子零部件贸易。",
  },
  {
    id: "usa",
    label: "美国",
    subtitle: "美元、利率与资产定价",
    coordinates: [-100, 38] as [number, number],
    detail: "美联储利率决定全球最重要的无风险利率之一。美元资产收益率变化，会通过汇率、资本流动和估值折现影响世界各地的债券、股票与黄金。",
  },
];

const highlighted = new Set(["840", "156", "392", "410", "276", "250", "380", "724", "682", "364", "784", "512"]);
const countries = feature(
  worldData as never,
  (worldData as unknown as { objects: { countries: never } }).objects.countries,
) as unknown as GeoJSON.FeatureCollection;
const projection = geoNaturalEarth1().fitExtent([[20, 20], [990, 646]], countries);
const pathGenerator = geoPath(projection);
const projectedPlaces = places.map((place) => ({
  ...place,
  point: projection(place.coordinates) ?? [0, 0],
}));

export function WorldNewsMap() {
  const [selected, setSelected] = useState(places[0]);

  return (
    <section className="geo-section" id="geography">
      <div className="geo-copy">
        <span className="index">04</span>
        <p className="section-label">GEOGRAPHY OF THE NEWS</p>
        <h2>先找到地方，<br />再理解因果</h2>
        <p>
          今天的新闻从霍尔木兹海峡出发，沿能源航线影响欧洲和东亚，再通过通胀、利率与美元传到全球资产市场。
          点击地图标记，查看每个地点在因果链中的作用。
        </p>
        <div className="geo-reading">
          <span><b>1</b> 看位置与距离</span>
          <span><b>2</b> 看资源和航道</span>
          <span><b>3</b> 看贸易与金融联系</span>
        </div>
      </div>

      <div className="world-map-shell">
        <div className="world-map-title">
          <div><MapPin size={16} /><span>今日新闻地理坐标</span></div>
          <small>点击红色标记阅读</small>
        </div>
        <svg className="world-map" viewBox="0 0 1010 666" role="img" aria-label="标注霍尔木兹海峡、欧洲、东亚和美国的世界地图">
          <g className="countries">
            {countries.features.map((country, index) => (
              <path
                key={`${String(country.id ?? country.properties?.name ?? "country")}-${index}`}
                id={`country-${country.id}`}
                d={pathGenerator(country) ?? ""}
                className={highlighted.has(String(country.id).padStart(3, "0")) ? "country highlighted" : "country"}
              >
                <title>{String(country.properties?.name ?? country.id)}</title>
              </path>
            ))}
          </g>
          <g className="map-routes" aria-hidden="true">
            <path d={`M${projectedPlaces[0].point.join(" ")} Q575 280 ${projectedPlaces[1].point.join(" ")}`} className="route-line energy" />
            <path d={`M${projectedPlaces[0].point.join(" ")} Q720 290 ${projectedPlaces[2].point.join(" ")}`} className="route-line energy" />
            <path d={`M${projectedPlaces[1].point.join(" ")} Q350 200 ${projectedPlaces[3].point.join(" ")}`} className="route-line finance" />
            <path d={`M${projectedPlaces[2].point.join(" ")} Q505 470 ${projectedPlaces[3].point.join(" ")}`} className="route-line finance" />
          </g>
          {projectedPlaces.map((place) => (
            <g
              key={place.id}
              className={selected.id === place.id ? "place-marker selected" : "place-marker"}
              transform={`translate(${place.point[0]} ${place.point[1]})`}
              onClick={() => setSelected(place)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setSelected(place);
              }}
              aria-label={place.label}
            >
              <circle r="12" className="marker-halo" />
              <circle r="5" className="marker-core" />
              <text x="15" y="-8">{place.label}</text>
              <text x="15" y="8" className="marker-subtitle">{place.subtitle}</text>
            </g>
          ))}
        </svg>
        <div className="map-detail">
          <div>
            <span>当前坐标</span>
            <h3>{selected.label}</h3>
            <small>{selected.subtitle}</small>
          </div>
          <p>{selected.detail}</p>
          <ArrowRight size={18} />
        </div>
        <div className="map-legend">
          <span><i className="legend-country" />重点国家与地区</span>
          <span><i className="legend-energy" />能源传导</span>
          <span><i className="legend-finance" />金融传导</span>
          <small>世界边界数据：Natural Earth / world-atlas</small>
        </div>
      </div>
    </section>
  );
}
