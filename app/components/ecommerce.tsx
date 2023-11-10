import React from 'react'
import Image from 'next/image'

export default function Ecommerce() {
  return (
        <section className="max-w-[80rem] flex flex-col">
        <h2 className="text-2xl text-center mb-2"><u>Sab Bazaar Ecommerce Project</u></h2>
        <p className="text-2xl text-center font-bold mb-5">Demo is not live yet</p>
        <div className="border-2 rounded m-3 p-4 border-slate-600">
                <Image 
                className="border-2 border-slate-600" 
                src="/assets/ecommerce.png" 
                alt="Ecommerce Project" 
                width="1920"
                height="1080" 
                />

                <p className="mb-2 mt-2"><b>What this project is about?</b></p>
                <p className="mb-2">The client is seeking to develop a wholesale-focused e-commerce application tailored for the Indian market, akin to <a href="https://www.alibaba.com/">Alibaba</a> This project is internally referred to as <b>Sab Bazaar</b>.</p>

                <p className="mt-2 mb-2"><b>What are the features?</b></p>

                <p className="mb-2">Users are offered the option to register as Buyers, Traders, or Sellers. Registration approval is contingent upon the successful verification of their KYC documentation; users whose KYC is not verified will not gain access to the dashboard. Each user dashboard is tailored to their specific category and offers distinctive features and benefits. Moreover, an integrated support ticket system allows users from any category to raise support requests with the admin.</p>

                <p className="mb-2">The product features a sophisticated order, billing, and invoicing system powered by the Razorpay API. Furthermore, it seamlessly integrates the Shiprocket API to manage the shipping process efficiently. Users are provided with personalized shop pages, where the products they upload are displayed alongside their company logo.</p>

                <p className="mt-2 mb-2"><b>Features of Admin?</b></p>

                <p className="mb-2">The admin system incorporates multiple authorization levels that are protected by access control. Specifically, once the initial user, known as the Super Admin, is registered, no additional admin registrations will be permitted. Instead, individuals seeking to join the admin team must be added by the existing admin.</p>

                <p className="mb-2">Furthermore, the admin system features an integrated role management system. The Super Admin possesses the authority to assign roles, and the system will restrict access and features based on the roles assigned by the Super Admin.</p>

                <p className="mb-2">The admin system also includes a feature to block specific users when suspicious activity is detected.</p>

                <p className="mb-2">The admin and the team can also provide assistance to brokers and property owners in selling their properties.</p>

                <p className="mt-2 mb-2"><b>Features of Traders?</b></p>

                <p className="mb-2">Since this is a wholesale-focus ecommerce system, this has something more extravagant than traditional buyer/customer system. Traders are allowed to setup their own Shop and add their own Products, they get their own <b>Shop Home Page</b> with all the details</p>

                <p className="mb-2">Trader system also comes with Built-in KYC System i.e Traders can upload their license and other necessary government documents to create shop, Once its uploaded, Admin panel will be notified, and once its confirmed by Admin team, that trader account is allowed to setup their own shop.</p>

                <p className="mb-2">Because of this trader system is also implemented with Razorpay Invoicing and Shiprocket shipping API.</p>

                <p className="mb-2">Trader system also comes with Built-in Support ticket system. In other words traders can raise their own support tickets.</p>

                <p className="mb-2">Trader accounts will also allow user to purchase/buy products as a trader from other sellers.</p>

                <p className="mt-2 mb-2"><b>Features of Sellers?</b></p>

                <p className="mb-2">All the features described in the Trader system can be used in Seller system as well. However, Seller account would be able to purchase/buy products from other sellers.</p>

                <p className="mt-2 mb-2"><b>Tech Stack used in this project?</b></p>

                <ul>
                        <li className="mb-2">CodeIgniter 4 +</li>
                        <li className="mb-2">Bootstrap based Admin LTE 3 Template (Customized)</li>
                        <li className="mb-2">Ogani - Bootstrap based HTML Template (Customized)</li>
                        <li className="mb-2">Razorpay API for Checkout, Billing and Invoicing</li>
                        <li className="mb-2">Shiprocket API for Shiping management</li>
                        <li className="mb-2">Databased - MySQL</li>
                </ul>

                <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                        <a
                        href="#"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        >
                        View Demo
                        </a>

                        <a
                        href="/contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        >
                        Hire Me
                        </a>
                </div>
        </div>
        </section>
  )
}
