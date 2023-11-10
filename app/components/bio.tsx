import React from 'react'
import { educationData } from '../lib/data'

export default function Bio() {
  return (
    <section className="max-w-[80rem] flex flex-col">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Education Details</h2>
      {educationData.map((education, index) => (
        <div className="border-2 rounded m-3 p-4 border-slate-600" key={index}>
                <h2 className="text-2xl font-medium capitalize mb-5"><center>{education.icon}</center></h2>
                <h2 className="text-2xl font-medium capitalize">{education.title}</h2>
                <p className="mt-2">{education.institute}</p>
                <p className="mt-2">{education.location}</p>
                <p className="mt-2">{education.date}</p>
                <p className="mt-2 mb-5">{education.description}</p>
        </div>
      ))}
    </section>
  )
}