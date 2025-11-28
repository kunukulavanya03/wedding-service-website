import Link from 'next/link';
export default function Header() {
  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>Wedding Service Website</a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}