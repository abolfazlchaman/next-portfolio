import { getDictionary } from "@/get-dictionary";
import Link from "next/link";
import { InspirationImage } from "./inspiration-skeleton";

export function Inspirations({
  inspiration,
  quotes,
}: {
  inspiration: Awaited<ReturnType<typeof getDictionary>>["inspiration"];
  quotes: Awaited<ReturnType<typeof getDictionary>>["quotes"];
}) {
  return (
    <section
      id="inspiration"
      className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-5 font-bold flex justify-center">{inspiration.title}</h2>
        {/*TODO <div className="text-sm text-nowrap flex my-2 justify-center">
          <Link
            href={isFarsi ? '/fa/inspirations' : '/inspirations'}
            className="text-muted-foreground hover:underline mx-4"
          >
            {inspirations.seeAllInspirations}
          </Link>
        </div> */}
        <p className="text-lg mb-6 text-muted-foreground text-justify">{inspiration.description}</p>

        <div className="flex flex-col gap-20">
          {quotes.map((quote, index) => {
            const isReversed = index === 1;
            return (
              <div
                key={index}
                className={`relative bg-background p-6 rounded-2xl shadow-[0px_4px_30px_0px_var(--custom-shadow)] flex flex-col sm:flex-row ${
                  isReversed ? "sm:flex-row-reverse" : ""
                } gap-6 items-center sm:items-start transition-transform`}>
                <div className="absolute inset-0 w-full h-full">
                  <InspirationImage
                    src={quote.image}
                    alt={quote.author}
                    reversed={isReversed}
                  />
                </div>

                {/* Text content */}
                <div className="relative rtl:text-right z-10 w-full text-left sm:text-left p-6">
                  <Link
                    href={quote.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:decoration-0">
                    <p className="text-xl font-bold mb-2 text-muted-foreground drop-shadow-lg  underline underline-offset-2">
                      {quote.author}
                    </p>
                  </Link>
                  <blockquote className="text-xl italic text-foreground drop-shadow-lg">
                    {quote.quote}
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
