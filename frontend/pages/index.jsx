import { Header, Nav, HeroSection, Card, Button, Form } from '../components'

export default function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      <HeroSection />
      <section className="bg-light py-12">
        <div className="container mx-auto flex justify-center items-center">
          <Card title="Wedding Event 1" description="This is a wedding event" image="/image1.jpg" />
          <Card title="Wedding Event 2" description="This is another wedding event" image="/image2.jpg" />
        </div>
      </section>
      <section className="bg-primary py-12">
        <div className="container mx-auto flex justify-center items-center">
          <Form />
        </div>
      </section>
    </>
  )
}