import React from 'react'
import { BsArrowRight} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Image from 'next/image';

export default function Hero() {
  return (
        <section className="mb-20 max-w-[50rem] text-center flex flex-col">
                <div className="flex items-center justify-center">
                        <div className="relative">
                                <Image
                                        className="h-28 w-28 rounded-full border-[0.35rem] border-white shadow-xl"
                                        src="/assets/kaustubh.jpg"
                                        alt="Kaustubh Shinde"
                                        width="192"
                                        height="192"
                                />
                                <span className="absolute bottom-0 right-0 text-4xl">👋</span>
                        </div>
                </div>
                <h1 className="mb-5 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hello, I am Kaustubh.</span> I am a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">8 years of experience. I enjoy
                building</span> <span>Utility web tools</span>.
                </h1>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <a
                href="/contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                >
                Hire Me{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>

                <a
                href="https://drive.google.com/file/d/1si0QAfwXs1AdGoD4UbnitWiLp2zumhU_/view?usp=sharing"
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                target="_blank"
                >
                Check Resume{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
                </div>
        </section>

  )
}
