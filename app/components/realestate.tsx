import React from 'react'
import Image from 'next/image'

export default function Realestate() {
  return (
        <section className="max-w-[80rem] flex flex-col">
                <h2 className="text-2xl text-center mb-10"><u>Real Estate Project</u></h2>
                <div className="border-2 rounded m-3 p-4 border-slate-600">
                        <Image 
                        className="border-2 border-slate-600" 
                        src="/assets/realestate.png" 
                        alt="Real Estate Project" 
                        width="1920"
                        height="1080"
                        />

                        <p className="mb-2 mt-2"><b>What this project is about?</b></p>
                        <p className="mb-2">The client is seeking to create a Real Estate based Website with a Membership Subscripion system made for Brokers, Property Owners and Construction Companies with suitable Subscripion plan for each category.</p>

                        <p>The product is currently in development and its official name has not been finalized yet, so we are temporarily referring to it as <b>Real Estate</b></p>

                        <p className="mt-2 mb-2"><b>What are the features?</b></p>

                        <p className="mb-2">The user is able to register as <b>Buyer</b>, <b>Broker</b> and <b>Property Owner</b> each having their own distinctive features and perks. There is also an in-built support ticket system, which allows user of any category to raise a support ticket to the admin.</p>

                        <p className="mb-2">The product features a sophisticated subscription system, along with a robust billing and invoicing system integrated through the Razorpay API. Users also have access to their individual Company pages, where properties uploaded by Brokers and Construction Companies are showcased. These custom company pages include a Rate & Review System, a Contact Form, a Bio section, and the user company logo.</p>

                        <p className="mt-2 mb-2"><b>Features of Admin?</b></p>

                        <p className="mb-2">Admin system has multiple authorization levels blocked with access control - Meaning once the First user which is also known as <b>Super Admin</b> is registered, no other admin registration will be allowed and if any one wants to join the admin then the admin has the ability to add new admins only then a person can join the admin team.</p>

                        <p className="mb-2">Admin system also has built-in role management system i.e Super admin can assign the roles and the features will be restricted according to the role assigned by the super admin.</p>

                        <p className="mb-2">The admin system also includes a feature to block specific users when suspicious activity is detected.</p>

                        <p className="mb-2">The admin and the team can also provide assistance to brokers and property owners in selling their properties.</p>

                        <p className="mt-2 mb-2"><b>Features of Buyer?</b></p>

                        <p className="mb-2">The buyer system is straightforward yet includes two standout features. Firstly, buyers can conveniently shortlist properties and save them. This allows buyers to easily revisit and purchase a property they are interested in. It is important to note that shortlisting a property does not reserve it exclusively, rather, it provides buyers with the opportunity to make decisions after consulting with their family or partners.</p>

                        <p className="mb-2">Buyers are presented with properties within their specific postal code or pincode area, aiding them in finding properties located nearby for their convenience.</p>


                        <p className="mt-2 mb-2"><b>Tech Stack used in this project?</b></p>

                        <ul>
                                <li className="mb-2">CodeIgniter 4 +</li>
                                <li className="mb-2">Bootstrap based Admin LTE 3 Template (Customized)</li>
                                <li className="mb-2">Custom Bootstrap 4 Template</li>
                                <li className="mb-2">Razorpay API for Checkout, Billing and Invoicing</li>
                                <li className="mb-2">Databased - MySQL</li>
                        </ul>

                        <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                                <a
                                href="https://realestate.digiforge.in/"
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
