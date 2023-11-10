import React from 'react'
import Bio from '@/app/components/bio'
import Work from '@/app/components/work'
import Extra from '@/app/components/extra'

export default function About() {
  return (
    <main className="flex flex-col items-center px-4">
        <Bio/>
        <Extra/>
        <Work/>
    </main>
  )
}
