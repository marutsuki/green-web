import WebsiteStats from "@/model/WebsiteStats";
import { Bytes, CO2, Renewable } from "../symbols";
import { formatDecimal, formatThousands } from "@/util/format";

export default function StatsDisplay(props: WebsiteStats): React.ReactNode {
    return <div className="stats shadow">
        <div className="stat">
            <div className="stat-figure text-primary">
                <CO2 className="fill-primary"/>
            </div>
            <div className="stat-title">CO2 produced</div>
            <div className="stat-value text-primary">{ formatDecimal(props.statistics.co2.grid.grams) + "g" }</div>
            <div className="stat-desc">Using the national grid</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
                <Renewable className="fill-secondary"/>
            </div>
            <div className="stat-title">CO2 produced</div>
            <div className="stat-value text-secondary">{ formatDecimal(props.statistics.co2.renewable.grams) + "g" }</div>
            <div className="stat-desc">If the energy is renewable</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure">
                <Bytes/>
            </div>
            <div className="stat-title">Bytes</div>
            <div className="stat-value">{ formatThousands(props.bytes) + "K" }</div>
            <div className="stat-desc">Loaded on every visit</div>
        </div>
    </div>
}