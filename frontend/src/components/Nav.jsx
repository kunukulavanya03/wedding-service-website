import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-secondary py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  )
}