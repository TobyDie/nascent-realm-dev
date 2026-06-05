/* HairQare sales page — app assembly */

function App() {
  const scrollToStart = () => {
    const el = document.getElementById("start");
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <TopBar onCta={scrollToStart} />
      <AgeStripe />
      <Hero onCta={scrollToStart} />
      <VideoTestimonials />
      <Recognition />
      <Science />
      <FailedSolutions onCta={scrollToStart} />
      <SocialProof onCta={scrollToStart} />
      <SolutionReframe onCta={scrollToStart} />
      <HowItWorks onCta={scrollToStart} />
      <ResultsIn2Weeks onCta={scrollToStart} />
      <WhatsIncluded onCta={scrollToStart} />
      <Founder onCta={scrollToStart} />
      <NotAboutHair onCta={scrollToStart} />
      <SelfQualifier onCta={scrollToStart} />
      <Faq onCta={scrollToStart} />
      <FinalCta onCta={scrollToStart} />
      <Footer />
      <StickyCta onCta={scrollToStart} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
