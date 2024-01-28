"use client"
 
import { useRouter } from "next/navigation"
import { useEffect } from "react"
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    const router = useRouter();
    const toHome = () => {
        router.push("/")
    }
    useEffect(() => {
        console.error(error)
    }, [error])
 
    return (
        <main className="flex min-h-96 flex-col items-center justify-between p-24 flex-1">
            <div className="hero min-h-96 glass">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold my-8">Something went wrong</h1>
                        <p className="mb-4">We&apos;re not sure what exactly happened, but there might be data missing or the query might be malformed. <br/>Sorry for the inconvenience, hopefully it doesn&apos;t happen again.</p>
                        <button className="btn btn-wide btn-neutral" onClick={reset}>Try again</button>
                        <div className="divider">OR</div>
                        <button className="btn btn-wide btn-primary" onClick={toHome}>To Home</button>
                    </div>
                </div>
            </div>

        </main>
    )
}