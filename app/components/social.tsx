import React from 'react'
import { devSocial } from '../lib/data'

export default function Social() {
  return (

        <section className="mb-5 max-w-[53rem] scroll-mt-10 text-center sm:mb-20">
                <h2 className="text-3xl font-medium capitalize mb-1 text-center">Developer Socials</h2>
                <p className="text-center 2x text-gray-800 mb-8">You can find me on following handles on the internet</p>

                     <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                        {devSocial.map((dev, index) => (
                                <li key={index} className="bg-gray-900 borderBlack rounded-full px-5 py-3 text-white">
                                        <a target="_blank" href={dev.link}>{dev.title}</a>
                                </li>
                        ))}
                </ul>
        </section>
   
  )
}
