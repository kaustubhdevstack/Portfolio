import React from 'react'
import Dev from '@/app/components/dev'
import Wordpress from '@/app/components/wordpress'

export default function Project() {
  return (
    <main className="flex flex-col items-center px-4">
      <Dev/>
      <Wordpress/>
    </main>
  )
}
