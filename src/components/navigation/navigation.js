import Link from "next/link";

const Navigation = _ => {
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <Link href="/" passHref>
          <a className="navigation__link">Home</a>
        </Link>
        <Link href="/films" passHref>
          <a className="navigation__link">Films</a>
        </Link>
        <Link href="/about" passHref>
          <a className="navigation__link">About</a>
        </Link>
      </div>

      <span className="navigation__line"></span>
    </nav>
  );
};

export default Navigation;
