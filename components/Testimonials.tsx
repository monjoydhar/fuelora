export function Testimonials() {
  const reviews = [
    { quote: "“Clean, simple and easy to make part of my routine.”", name: "Rafi", rating: 5 },
    { quote: "“The flavor actually tastes good in a daily shake.”", name: "Nadia", rating: 4 },
    { quote: "“I wanted a straightforward protein brand. This gets it.”", name: "Arman", rating: 5 },
    { quote: "“Great post-training staple.”", name: "Sami", rating: 4 },
  ];

  const avatarColors = ["var(--brown)", "var(--green)", "var(--ink)"];

  function Stars({ rating }: { rating: number }) {
    return (
      <div className="text-2xl tracking-[2px]">
        <span className="text-[var(--brown)]">{"★".repeat(rating)}</span>
        <span className="text-[var(--line)]">{"★".repeat(5 - rating)}</span>
      </div>
    );
  }

  const rows = [reviews, reviews.slice().reverse()];

  return (
    <section className="overflow-hidden py-28">
      <div className="px-5 md:px-10">
        <p className="text-xs font-black uppercase tracking-[.25em] text-[var(--green)]">
          Field notes
        </p>
        <h2 className="display mt-3 text-5xl font-black md:text-7xl">
          Built for real people.
        </h2>
      </div>

      {rows.map((row, idx) => (
        <div key={idx} className="marquee-row mt-10">
          <div className={`marquee-track flex gap-5 ${idx ? "reverse" : ""}`}>
            {[...row, ...row].map(({ quote, name, rating }, i) => (
              <div
                key={i}
                className="w-[300px] flex-shrink-0 rounded-3xl border border-[var(--line)] p-6 md:w-[390px]"
              >
                <Stars rating={rating} />
                <p className="mt-5 text-lg leading-7">{quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-[var(--cream)]"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {name[0]}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-[var(--muted)]">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}