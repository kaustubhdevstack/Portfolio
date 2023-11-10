import React from 'react'
import Image from 'next/image'

export default function Dev() {
  return (
        <section className="max-w-[50rem] flex flex-col">
                <h2 className="text-3xl font-medium capitalize mb-2 text-center">Projects</h2>
                <p className="text-2l text-center mb-5"><b>Note: </b>Not all the projects are diclosed here due to privacy pact with clients.</p>
                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/realestate.png" 
                        alt="Real Estate Project" 
                        width="1920"
                        height="1080" 
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Real Estate Project</h2>
                        <p>Real Estate Website with Monthly & Annual Subscription System Made with CodeIgniter 4 Bootstrap 4 and Razorpay.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://realestate.digiforge.in/"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Demo
                                </a>

                                <a
                                href="/realestate_details"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                >
                                Read More
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/ecommerce.png" 
                        alt="Ecommerce Project" 
                        width="1920"
                        height="1080" 
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Sab Bazaar Ecommerce (Demo not live)</h2>
                        <p>Ecommerce Website with Made with CodeIgniter 4, Bootstrap 4 and Razorpay Checkout and a complete Wholesale system makes it perfect for B2B.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="#"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Demo
                                </a>

                                <a
                                href="/ecommerce_details"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                >
                                Read More
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/customgpt.png" 
                        alt="Custom GPT" 
                        width="1920"
                        height="1080" 
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Custom GPT Project</h2>
                        <p>Custom GPT is a SaaS Boilerplate consisting of 30 AI Toolkits for Coding and Digital Marketing and Complete user management system with build in Security features.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://www.youtube.com/watch?v=AozAlTwaQdY&t=3s"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Demo Video
                                </a>

                                <a
                                href="https://github.com/kaustubhdevstack/customgpt"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                Read More on GitHub
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/stackui.png" 
                        alt="Real Estate Project" 
                        width="1920"
                        height="1080" 
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Stack UI Project</h2>
                        <p>Stack UI is a Freeform Open UI Library which helps you to craft interactive user interfaces instantly, with Zero Installation and No Documentation Hurdles.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://stackui.co"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Project
                                </a>

                                <a
                                href="/stackui_details"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                >
                                Read More
                                </a>
                        </div>
                </div>
        </section>
  )
}
