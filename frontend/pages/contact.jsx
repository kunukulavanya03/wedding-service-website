import { Header, Nav } from '../components'

export default function ContactPage() {
  return (
    <>
      <Header />
      <Nav />
      <section className="bg-light py-12">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg mb-4">This is the contact page</p>
        </div>
      </section>
    </>
  )
}