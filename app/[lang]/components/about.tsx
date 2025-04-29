import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/get-dictionary";
import { AboutImage } from "./about-skeleton";
import Link from "next/link";

export function About({
  dictionary,
  language,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
  language: Awaited<ReturnType<typeof getDictionary>>["language"];
}) {
  const { title, description, buttonTextEn, buttonTextFa } = dictionary;
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex lg:flex-row flex-col-reverse items-center justify-between mt-24 space-12">
      <div className="space-y-2 h-full flex text-justify flex-col justify-between items-center mt-6 md:mx-10 md:mb-0 md:mt-0 md:max-w-1/2">
        <h2 className="text-3xl font-bold mb-4 mt-4">{title}</h2>

        <p
          className="text-lg mb-4 text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="flex flex-row justify-center gap-4 mt-5 w-full flex-wrap">
          <Button
            size="lg"
            className="w-full"
            asChild>
            <Link
              href="https://www.canva.com/design/DAGlPFpIzXE/YbsJ7SQxp1lziZM7JTuJ6A/edit?utm_content=DAGlPFpIzXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer">
              {buttonTextEn}
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
            </Link>
          </Button>

          {language === "fa" && (
            <Button
              size="lg"
              className="w-full"
              asChild>
              <Link
                href="https://www.canva.com/design/DAGlPNcrp6k/rngftrUqx0EOZ414RjdLPg/edit?utm_content=DAGlPNcrp6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer">
                {buttonTextFa}
                <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="h-100 w-full md:h-140 md:w-1/2 rounded-[3px] overflow-hidden shadow-[0px_4px_30px_0px_var(--custom-shadow)] flex mt-4">
        <AboutImage />
      </div>
    </section>
  );
}
