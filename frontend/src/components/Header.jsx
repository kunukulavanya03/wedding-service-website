import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>Wedding Service Website</a>
        </Link>
        <nav>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}