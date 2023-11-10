import React from "react"
import Hero from "./components/hero"
import Skill from "./components/skill"
import Social from "./components/social"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero/>
      <Skill/>
      <Social/>
    </main>
  )
}
