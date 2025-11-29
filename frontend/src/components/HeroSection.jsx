import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto flex justify-center items-center">
        <Image src="/hero.jpg" alt="Hero Image" width={1200} height={600} />
      </div>
    </section>
  )
}