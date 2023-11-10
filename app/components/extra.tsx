import React from 'react'
import { extraData } from '../lib/data'

export default function Extra() {
  return (
        <section className="max-w-[80rem] flex flex-col mt-10">
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">Something to know more</h2>
        {extraData.map((extra, index) => (
                <div className="border-2 rounded m-3 p-4 border-slate-600" key={index}>
                        <h2 className="text-2xl font-medium capitalize mb-5"><center>{extra.icon}</center></h2>
                        <p className="text-2xl font-medium capitalize mt-2">{extra.title}</p>
                        <p className="mt-2">{extra.organization}</p>
                        <p className="mt-2">{extra.date}</p>
                        <p className="mt-2 mb-5">{extra.description}</p>
                </div>
        ))}
        </section>
  )
}
