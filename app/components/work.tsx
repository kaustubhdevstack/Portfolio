import React from 'react'
import { workData } from '../lib/data'

export default function Work() {
  return (
        <section className="max-w-[80rem] flex flex-col mt-10">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">Professional Details</h2>
        {workData.map((work, index) => (
                <div className="border-2 rounded m-3 p-4 border-slate-600" key={index}>
                        <h2 className="text-2xl font-medium capitalize mb-5"><center>{work.icon}</center></h2>
                        <h2 className="text-2xl font-medium capitalize">{work.type}</h2>
                        <p className="mt-2">{work.cname}</p>
                        <p className="mt-2">{work.location}</p>
                        <p className="mt-2">{work.date}</p>
                        <p className="mt-2 mb-5"><b>Tech Stack - </b>{work.tech}</p>
                        <p className="mt-2 mb-5">{work.description}</p>
                </div>
        ))}
        </section>
  )
}
