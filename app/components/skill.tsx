import React from 'react'
import { skillsData } from '../lib/data'

export default function Skill() {
  return (
    <section className="max-w-[53rem] scroll-mt-28 text-center sm:mb-20">
        <h2 className="text-3xl font-medium capitalize mb-1 text-center">My Skills</h2>
        <p className="text-center 2x text-gray-800 mb-8">I am loaded with skills these are all the technologies I use in my work.</p>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                        <li key={index} className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
                                {skill}
                        </li>
                ))}
        </ul>
    </section>
  )
}
