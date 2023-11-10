import React from 'react'
import Image from 'next/image'

export default function Wordpress() {
  return (
        <section className="max-w-[50rem] flex flex-col">
                <h2 className="text-3xl font-medium capitalize mt-10 mb-5 text-center">WordPress Projects</h2>
                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/rgmctmc.png" 
                        alt="Real Estate Project" 
                        width="1920"
                        height="192"
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">RGMC & CSMH - Government Hospital (TMC)</h2>
                        <p>Complete website redesigned in Elementor and WordPress and moved to a new domain with <b>.edu.in</b> as TLD. The project is still under my managemenet.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://rgmctmc.edu.in"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Project
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/prince.png" 
                        alt="Prince International Pre-School"
                        width="1920"
                        height="1080" 
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Prince International Pre-School</h2>
                        <p>Client requested new website for their newly opened pre-school. The Website is made using Elementor and WordPress. This website is not under my management now.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://princeinternationalpreschool.co.in/"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Project
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/icyhotwords.png" 
                        alt="Real Estate Project" 
                        width="1920"
                        height="192"
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Icy Hot Words</h2>
                        <p>The client is a content writer Mehak Kalra, desired a personalized blog where she can showcase her writing skills and content writing + Copywriting work to her client. This website is still under my management.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://icyhotwords.com/"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Project
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/isl.png" 
                        alt="Indian Shopping Limited"
                        width="1920"
                        height="1080" 
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Indian Shopping Limited</h2>
                        <p>The client sought a WordPress + WooCommerce-based e-commerce website tailored for the UK audience, complete with activated shipping functionality. This website is not under my management.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://indianshopping.co.uk/"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Project
                                </a>
                        </div>
                </div>

                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        src="/assets/sba.png" 
                        alt="Sweet Boutique by Aditi" 
                        width="1920"
                        height="192"
                        />
                        <h2 className="text-2xl font-medium capitalize mt-2 mb-2">Sweet Boutique by Aditi</h2>
                        <p>The client, Chef Aditi Garware, a prominent Social Media Influencer and renowned Cake Master in India, sought a new website to represent her and I delivered it. This website is still under my managemenet.</p>
                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://sweetboutiquebyaditi.com/"
                                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                                target="_blank"
                                >
                                View Project
                                </a>
                        </div>
                </div>
        </section>
  )
}
