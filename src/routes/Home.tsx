import MainLayout from 'layouts/MainLayout'
import CallToAction from 'blocks/CallToAction'

function Home() {
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

export default Home
