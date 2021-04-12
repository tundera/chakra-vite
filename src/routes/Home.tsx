import CallToAction from 'components/CallToAction'
import MainLayout from 'layouts/MainLayout'

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
