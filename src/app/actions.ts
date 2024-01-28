"use server";

import { redirect } from "next/navigation";

export async function toStatsPage(formData: FormData) {
    const url = formData.get("url")?.toString();
    console.log(formData);
    if (url === undefined) {
        throw new Error();
    }
    const searchParams = new URLSearchParams({
        url
    });
    redirect("/stats?" + searchParams);
}