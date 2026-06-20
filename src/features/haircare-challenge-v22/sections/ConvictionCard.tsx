type Props = {
  initial: string;
  name: string;
  descriptor: string;
  tag: string;
  quote: string;
  bhcId: string;
};

export function ConvictionCard({ initial, name, descriptor, tag, quote, bhcId }: Props) {
  return (
    <section className="v22-conviction-wrap">
      <div className="v22-container">
        <figure className="v22-conviction" data-bhc-id={bhcId}>
          <span className="v22-conviction__mark" aria-hidden="true">&ldquo;</span>
          <blockquote className="v22-conviction__quote">{quote}</blockquote>
          <figcaption className="v22-conviction__foot">
            <div className="v22-conviction__who">
              <span className="v22-conviction__avatar" aria-hidden="true">{initial}</span>
              <span className="v22-conviction__id">
                <span className="v22-conviction__name">{name}</span>
                <span className="v22-conviction__desc">{descriptor}</span>
              </span>
            </div>
            <div className="v22-conviction__meta">
              <span className="v22-conviction__stars" aria-label="5 out of 5">★★★★★</span>
              <span className="v22-conviction__verified">Verified · Day 14</span>
            </div>
          </figcaption>
          <span className="v22-conviction__tag">{tag}</span>
        </figure>
      </div>
    </section>
  );
}

export default ConvictionCard;