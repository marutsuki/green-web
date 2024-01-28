"use client";

import { Stats } from "./symbols";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Header(): React.ReactNode {
    const router = useRouter();
    const toStatsPage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const url = formData.get("url")?.toString();
        if (url === undefined) {
            throw new Error();
        }
        const searchParams = new URLSearchParams({
            url
        });
        router.push("/stats?" + searchParams);
    }
    
    const toHomePage = () => {
        router.push("/");
    }

    return <header>
        <div className="relative navbar bg-base-100">
            <div className="flex-none">
                <Stats className="ml-2"/>
            </div>
            <div className="flex-1">
                <button className="btn btn-ghost text-xl" onClick={toHomePage}>Green Web</button>
            </div>
            <form className="absolute form-control left-1/2" onSubmit={toStatsPage}>
                <input name="url" type="text" placeholder="Search" className="input input-bordered md:w-auto -translate-x-1/2 !w-96" />
            </form>
            <div className="flex-none">
                <h3></h3>
            </div>
        </div>
    </header>
}