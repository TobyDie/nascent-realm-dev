export function Footer() {
  return (
    <footer className="v27-footer" id="contact">
      <div className="v27-container">
        <h3 className="v27-footer__h">Glow from within isn't a product.</h3>
        <p className="v27-footer__sub">Sign up for what the industry won't tell you.</p>
        <form
          className="v27-footer__form"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Email signup"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="v27-footer__input"
            aria-label="Email address"
          />
          <button type="submit" className="v27-footer__btn">Subscribe</button>
        </form>
        <p className="v27-footer__trust">Loved by 250,000+ women in 149 countries</p>
        <nav className="v27-footer__links" aria-label="Legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Return Policy</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Terms</a>
          <a href="#">Guarantee</a>
          <a href="#">Contact</a>
        </nav>
        <div className="v27-footer__logo">
          <img
            src="https://placehold.co/160x40/FBE7DE/D86B4A?text=Hairqare"
            width={160}
            height={40}
            alt="Hairqare wordmark"
          />
        </div>
      </div>
    </footer>
  );
}
