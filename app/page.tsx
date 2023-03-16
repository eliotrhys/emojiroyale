"use client"

import Image from "next/image";
import Link from "next/link";
import emojiLogo from "../public/images/emoji_logo.png";

import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    showing: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const animationItem = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    showing: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            type: "spring", 
            bounce: 0.4
        }
    }
}

export default function Page() {
    return (
        <div className="min-h-screen min-w-screen intro-page">
            <div className="container mx-auto px-4">
                <motion.div 
                    animate={{ y: [-800, 0]} } 
                    transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                    className="w-full lg:w-1/2 mx-auto pt-10"
                >
                    <div className="text-center">
                        <div>
                            <Image alt="Emoji Royale Logo" src={emojiLogo} height={140} className="mx-auto" />
                        </div>
                        <h2 className="text-lg lg:text-2xl mb-4 lg:mb-10 text-white">An emoji trivia game!</h2>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1">
                    <div className="mb-4 lg:mb-6">
                        <h3 className="text-md lg:text-2xl mb-4 text-center">How to play</h3>
                        <h3 className="text-4xl text-center">👇</h3>
                    </div>
                </div>
                <motion.div 
                    initial="hidden"
                    whileInView="showing"
                    variants={variants}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
                    <motion.div variants={animationItem} className="">
                        <div className="grid gap-4 grid-cols-12 bg-white border-black border-4 rounded-md p-4 lg:text-center h-full">
                            <div className="col-span-4 lg:col-span-12 lg:mb-2">
                                <img src="https://media0.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=ecf05e4772tr6m81jyn7i894cj1xgpawr4osepvzi5oba3wy&rid=giphy.gif&ct=g" className="w-full rounded-md" alt="" />
                            </div>
                            <div className="col-span-8 lg:col-span-12 flex items-center justify-start lg:justify-center">
                                <div>
                                    <h3 className="text-lg sm:text-2xl lg:text-2xl">☝️ Step 1</h3>
                                    <p className="text-sm sm:text-md lg:text-lg">Look at the emojis!</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={animationItem} className="">
                        <div className="grid gap-4 grid-cols-12 bg-white border-black border-4 rounded-md p-4 lg:text-center h-full">
                            <div className="col-span-4 lg:col-span-12 lg:mb-2">
                                <img src="https://media0.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=ecf05e4772tr6m81jyn7i894cj1xgpawr4osepvzi5oba3wy&rid=giphy.gif&ct=g" className="w-full rounded-md" alt="" />
                            </div>
                            <div className="col-span-8 lg:col-span-12 flex items-center justify-start lg:justify-center">
                                <div>
                                    <h3 className="text-lg sm:text-2xl lg:text-2xl">✌️ Step 2</h3>
                                    <p className="text-sm lg:text-lg">Look at the category!</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={animationItem} className="">
                        <div className="grid gap-4 grid-cols-12 bg-white border-black border-4 rounded-md p-4 lg:text-center h-full">
                            <div className="col-span-4 lg:col-span-12 lg:mb-2">
                                <img src="https://media0.giphy.com/media/elhmwUMsAUbScKLLzl/giphy.gif?cid=ecf05e4772tr6m81jyn7i894cj1xgpawr4osepvzi5oba3wy&rid=giphy.gif&ct=g" className="w-full rounded-md" alt="" />
                            </div>
                            <div className="col-span-8 lg:col-span-12 flex items-center justify-start lg:justify-center">
                                <div>
                                    <h3 className="text-lg sm:text-2xl lg:text-2xl">☘️ Step 3</h3>
                                    <p className="text-sm lg:text-lg">Type your answer and hit Enter!</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="grid grid-cols-3">
                    <div className="col-span-full lg:col-start-2 lg:col-span-1">
                        <Link href="/game" className="text-xl lg:text-2xl flex justify-center items-center border-4 border-black ease-in-out duration-100 bg-red-500 hover:bg-red-900 rounded-full py-3 lg:py-5 w-100 text-white whitespace-nowrap animate-bounce w-full">Start the game!</Link>
                    </div>
                </div>
                <div>
                <Link href={"https://twitter.com/eliotrhys"} target="_blank" className="flex items-center justify-center ease-in-out duration-100 hover:scale-105 py-6">
                    <div>
                        <img src="/images/twitter.png" className="mr-4" style={{ height: "24px" }} alt="" />
                    </div>
                    <div>
                        <div className="text-xs text-white">Follow me on twitter</div>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
}