import Rating, { MAX_RATING_VALUE } from "@/components/common/Rating";
import ComparisonDisplay from "@/components/stats/ComparisonDisplay";
import StatsDisplay from "@/components/stats/StatsDisplay";
import { Bytes, CO2, Renewable, Search } from "@/components/symbols";
import WebsiteStats from "@/model/WebsiteStats";
import { formatDecimal, formatPercentage, formatThousands } from "@/util/format";
import { Doughnut } from "react-chartjs-2";

async function getWebsiteStats(url: string): Promise<WebsiteStats> {
    /** 
     * Dummy data
     * 
     * Taken from https://api.websitecarbon.com/
     */ 
    return Promise.resolve({
        url: "https://marutsuki.github.io/maru-github-viewer/",
        green: true,
        bytes: 443854,
        cleanerThan: 0.83,
        statistics: {
            adjustedBytes: 335109.77,
            energy: 0.0005633320052642376,
            co2: {
                grid: {
                    grams: 0.26758270250051286,
                    litres: 0.14882949913078525
                },
                renewable: {
                    grams: 0.24250694721722435,
                    litres: 0.13488236404222018
                }
            }
        }
    });
}

export default async function Page({ searchParams }: { searchParams: Record<string, string | string[] | undefined>}) {
    if (searchParams.url === undefined && !Array.isArray(searchParams.url)) {
        throw new Error("Invalid target url")
    }

    const stats = await getWebsiteStats(searchParams.url as string);

    return <main className="flex flex-col p-8">
        <div className="grid place-items-center m-24">
            <Rating rating={stats.cleanerThan * MAX_RATING_VALUE}/>
        </div>
        <div className="divider">Overview</div>
        <div className="grid grid-cols-2 place-items-center h-full">
            <div>
                <h2 className="text-2xl mb-4 text-end">From this URL.</h2>
                <div className="flex flex-row items-center mb-28 input input-bordered max-w-full">
                    
                    <Search className="mr-4"/>
                    <input disabled type="text" className="!text-black bg-transparent w-full max-w-full" value={ stats.url }/>
                </div>
                
                <h2 className="text-2xl mb-4 text-end">Every time the page is loaded...</h2>
                <StatsDisplay { ...stats } />
            </div>
            
            <div className="flex flex-col items-center">
                <h2 className="text-2xl mb-4">This page is cleaner than <b className="text-accent">{formatPercentage(stats.cleanerThan) + "%"}</b> other websites.</h2>
                <ComparisonDisplay label="Cleaner Than" proportion={stats.cleanerThan}/>
            </div>
        </div>
    </main>
}