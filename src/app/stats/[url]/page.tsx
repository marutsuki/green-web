import Rating, { MAX_RATING_VALUE } from "@/components/common/Rating";
import ComparisonDisplay from "@/components/stats/ComparisonDisplay";
import StatsDisplay from "@/components/stats/StatsDisplay";
import { Search } from "@/components/symbols";
import WebsiteStats from "@/model/WebsiteStats";
import { WEBSITE_CARBON_API_ENDPOINT } from "@/util/environment";
import { formatPercentage } from "@/util/format";

async function getWebsiteStats(url: string): Promise<WebsiteStats> {
    const endpoint = WEBSITE_CARBON_API_ENDPOINT.concat("/site?url=" + url);
    console.info("Sending request for data to", endpoint)
    const res = await fetch(endpoint);
    const data = await res.json();
    console.info("Received payload from", endpoint);
    console.debug("Data:", data);
    return data as WebsiteStats;
}

export default async function Page({ params }: { params: { url : string } }) {
    const stats = await getWebsiteStats(decodeURIComponent(params.url));
    
    return <main className="flex flex-col p-8 flex-1">
        <div className="grid place-items-center m-24">
            <h1 className="text-2xl">Green Rating</h1>
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