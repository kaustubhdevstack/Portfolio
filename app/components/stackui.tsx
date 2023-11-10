import React from 'react'
import Image from 'next/image'

export default function Stackui() {
  return (
        <section className="max-w-[80rem] flex flex-col">
        <h2 className="text-2xl text-center mb-10"><u>Stack UI Project</u></h2>
        <div className="border-2 rounded m-3 p-4 border-slate-600">
                <Image 
                className="border-2 border-slate-600" 
                src="/assets/stackui.png" 
                alt="Real Estate Project" 
                width="1920"
                height="1080"
                />

                <p className="mb-2 mt-5"><b>What this project is about?</b></p>
                <p className="mb-2"><b>Stack UI - </b> This is my open-source project, comprising freeform and reusable UI elements and components. It does not require any installation or documentation to use. Essentially, it simplifies the process of crafting user interfaces by allowing you to easily copy and paste necessary UI components. This ultimately results in a highly refined and optimized user interface that appears sleek and clean.</p>

                <p className="mb-2">Developers can selectively choose the necessary components for their projects, enabling them to create a customized front-end stack tailored to each project requirements. This approach grants developers complete control over the UI components, allowing them to modify them as needed.</p>

                <p className="mt-2 mb-2"><b>Why I decided to create this UI Library?</b></p>

                <p className="mb-2">While front end frameworks like Bootstrap and Tailwind are popular and widely used frameworks, they have their downsides. Developers are required to download the framework files for every update, which can be time-consuming. Additionally, they need to study the new documentation with every new update and make changes to their projects accordingly, which can be cumbersome.</p>

                <p className="mb-2">Moreover, if a developer wants to implement interface functionality that goes beyond the capabilities of the chosen framework, it can be challenging to achieve. This limitation restricts the creative possibilities and flexibility of developers.</p>

                <p className="mt-2 mb-2"><b>The decision</b></p>

                <p className="mb-2">Recognizing these challenges, I realized that there is a need for a middle-ground solution. I wanted to create a framework that offers everything a developer needs, without the need for installation and documentation. With Stack UI, developers can directly access the code and make modifications as required. They do not have to spend time studying extensive documentation for every update because any developer can easily understand the code and use it accordingly.</p>

                <p className="mt-2 mb-2"><b>Goal and Vision</b></p>

                <p className="mb-2">By creating Stack UI, my goal is to provide a UI Library that combines the convenience of pre-existing frameworks with the freedom and flexibility to customize and extend the UI according to specific project requirements, which can give more freedom and control to the user to develop powerful user interfaces. I believe that this approach will empower developers to create unique and powerful user interfaces with ease.</p>


                <p className="mt-2 mb-2"><b>New Features are coming!</b></p>

                <ul>
                        <li className="mb-2">Component Selector</li>
                        <li className="mb-2">React JS Components</li>
                        <li className="mb-2">Vue JS Components</li>
                        <li className="mb-2">HTMX Components</li>
                        <li className="mb-2">Tutorials, Templates and UI Blocks</li>
                </ul>

                <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                        <a
                        href="https://stackui.co"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        >
                        View Project
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
