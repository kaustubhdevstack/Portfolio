import React from 'react'
import { stackData } from '../lib/data'

function Tech() {
  return (
        <section className="max-w-[80rem] flex flex-col">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">My Tech Stack</h2>
        {stackData.map((stack, index) => (
                <div className="border-2 rounded m-3 p-4 border-slate-600" key={index}>
                        <h2 className="text-2xl font-medium capitalize">{stack.title}</h2>
                        <p className="mt-2"><b>From: </b>{stack.date}</p>
                        <p className="mt-2"><b>Tech Stack: </b>{stack.tech}</p>
                        <p className="mt-2"><b>Frameworks: </b>{stack.frameworks}</p>
                        <p className="mt-2"><b>Learning: </b>{stack.learning}</p>
                        <p className="mt-2"><b>Projects: </b>{stack.projects}</p>
                </div>
        ))}
        </section>
  )
}

export default Tech