import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div>
                    <div className="text-center">
                        <h1 className="text-6xl lg:text-9xl mb-6 lg:mb-10">Emoji Royale</h1>
                        <h2 className="text-lg lg:text-5xl mb-20">An emoji guessing game!</h2>
                    </div>
                    <div className="col-2">
                        <Link href="/game" className="text-xl lg:text-3xl flex justify-center items-center bg-red-500 hover:bg-red-900 rounded-md py-3 lg:py-5 w-100 text-white">Start the game!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}