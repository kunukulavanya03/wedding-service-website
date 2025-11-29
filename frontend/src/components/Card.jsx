import Image from 'next/image'

export default function Card({ title, description, image }) {
  return (
    <div className="bg-light py-4 shadow-md">
      <Image src={image} alt={title} width={400} height={200} />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
    </div>
  )
}