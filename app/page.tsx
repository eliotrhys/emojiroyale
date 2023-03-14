import Image from "next/image";
import Link from "next/link";
import emojiLogo from "../public/images/emoji_logo.png";

export default function Page() {
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center intro-page">
            <div className="container mx-auto px-4">
                <div className="w-full lg:w-1/2 mx-auto">
                    <div className="text-center">
                        <div>
                            <Image alt="Emoji Royale Logo" src={emojiLogo} className="mx-auto" />
                        </div>
                        <h2 className="text-lg lg:text-3xl mb-20 text-white">An emoji trivia game!</h2>
                    </div>
                    <div className="w-full lg:w-3/4 mx-auto">
                        <Link href="/game" className="text-xl lg:text-2xl flex justify-center items-center border-4 border-black ease-in-out duration-100 bg-red-500 hover:bg-red-900 rounded-full py-3 lg:py-5 w-100 text-white whitespace-nowrap animate-bounce w-full">Start the game!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}