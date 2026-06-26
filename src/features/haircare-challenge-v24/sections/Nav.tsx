export function Nav() {
  return (
    <header className="v24-nav">
      <div className="v24-container v24-nav__row">
        <a className="v24-nav__logo" href="/">
          <img
            src="https://placehold.co/160x40/FBE7DE/D86B4A?text=Hairqare"
            width={160}
            height={40}
            alt="Hairqare wordmark logo"
          />
        </a>
        <nav className="v24-nav__links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#challenge">The challenge</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}