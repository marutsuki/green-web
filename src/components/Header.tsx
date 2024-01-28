import { toStatsPage } from "@/app/actions";
import { Stats } from "./symbols";

export default function Header(): React.ReactNode {
    return <header>
        <div className="relative navbar bg-base-100">
            <div className="flex-none">
                <Stats className="ml-2"/>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Green Web</a>
            </div>
            <form className="absolute form-control left-1/2" action={toStatsPage}>
                <input name="url" type="text" placeholder="Search" className="input input-bordered md:w-auto -translate-x-1/2 !w-96" />
            </form>
            <div className="flex-none">
                <h3></h3>
            </div>
        </div>
    </header>
}