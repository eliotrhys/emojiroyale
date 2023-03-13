import Image from "next/image";
import Link from "next/link";
import emojiLogo from "../public/images/emoji_logo.png";

export default function Page() {
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center intro-page">
            <div className="container mx-auto px-4">
                <div className="w-1/2 mx-auto">
                    <div className="text-center">
                        <div>
                            <Image alt="Emoji Royale Logo" src={emojiLogo} className="mx-auto" />
                        </div>
                        {/* <h1 className="text-6xl lg:text-9xl mb-6 lg:mb-10 text-white">Emoji Royale</h1> */}
                        <h2 className="text-lg lg:text-3xl mb-20 text-white">An emoji guessing game!</h2>
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto">
                        <Link href="/game" className="text-xl lg:text-3xl flex justify-center items-center border-4 border-black bg-red-500 hover:bg-red-900 rounded-full py-3 lg:py-5 w-100 text-white whitespace-nowrap animate-bounce w-full">Start the game!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}