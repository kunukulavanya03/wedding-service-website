import { Header, Nav } from '../components'

export default function AboutPage() {
  return (
    <>
      <Header />
      <Nav />
      <section className="bg-light py-12">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-2">About Us</h1>
          <p className="text-lg mb-4">This is the about page</p>
        </div>
      </section>
    </>
  )
}