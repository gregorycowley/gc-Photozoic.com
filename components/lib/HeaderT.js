import Link from "next/link";

/**
 * Page Header T Layout
 * @param {*} props 
 */

export default function HeaderT(props) {

  return (
    <header className={`header ${props.className}`}>
      <Link href="/">
        <img src="/icons/gc-logo-opt-5.svg" className="logo" alt="logo" />
      </Link>
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <h1>
            Testsite
          </h1>
        </Link>
        <h2>Artist Gregory Cowley b.1970</h2>
        <ul>
          <li>
            <Link href="/about">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>PROJECT</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>BIO</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>CV</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
