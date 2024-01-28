import StatsDisplay from "@/components/stats/StatsDisplay";
import { Bytes, CO2, Renewable } from "@/components/symbols";
import WebsiteStats from "@/model/WebsiteStats";
import { formatDecimal, formatThousands } from "@/util/format";

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

    return <main className="grid grid-cols-2 place-items-center h-full">
        <StatsDisplay { ...stats } />
    </main>
}