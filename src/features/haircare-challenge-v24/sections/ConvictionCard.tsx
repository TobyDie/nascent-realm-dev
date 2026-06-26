type Props = {
  avatar: string;
  name: string;
  descriptor: string;
  quote: string;
  bhcId: string;
};

function avatarUrl(file: string, w = 96) {
  return `https://pub.hairqare.co/cdn-cgi/image/width=${w},quality=80,format=auto/glow/${file}`;
}

export function ConvictionCard({ avatar, name, descriptor, quote, bhcId }: Props) {
  return (
    <section className="v24-conviction-wrap">
      <div className="v24-container">
        <figure className="v24-conviction" data-bhc-id={bhcId}>
          <span className="v24-conviction__mark" aria-hidden="true">&ldquo;</span>
          <blockquote className="v24-conviction__quote">{quote}</blockquote>
          <figcaption className="v24-conviction__foot">
            <img
              className="v24-conviction__avatar"
              src={avatarUrl(avatar, 96)}
              srcSet={`${avatarUrl(avatar, 96)} 1x, ${avatarUrl(avatar, 192)} 2x`}
              width={36}
              height={36}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span className="v24-conviction__id">
              <span className="v24-conviction__name">{name}</span>
              <span className="v24-conviction__desc">{descriptor}</span>
            </span>
            <span className="v24-conviction__stars" aria-label="5 out of 5">★★★★★</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ConvictionCard;