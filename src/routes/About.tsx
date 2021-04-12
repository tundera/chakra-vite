import React from 'react'

import CallToAction from 'components/CallToAction'
import MainLayout from 'layouts/MainLayout'

function About() {
  return (
    <MainLayout>
      <CallToAction
        title="Vite Starter"
        subtitle="Chakra UI + React"
        description="A blazing fast starter template built with Vite"
      />
    </MainLayout>
  )
}

export default About
