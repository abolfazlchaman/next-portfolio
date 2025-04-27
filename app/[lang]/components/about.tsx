import Image from "next/image";

import img from "../../../public/images/about.webp";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/get-dictionary";

export function About({
  dictionary,
  language,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
  language: Awaited<ReturnType<typeof getDictionary>>["language"];
}) {
  const { title, description, buttonTextEn, buttonTextFa } = dictionary;
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex lg:flex-row flex-col-reverse items-center justify-center mt-24">
      <div className="space-y-2 flex text-justify flex-col justify-center items-center md:mx-10 md:max-w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>

        <p
          className="text-lg mb-4 text-justify"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="flex flex-row justify-center gap-2 mt-5">
          <Button
            variant="outline"
            size="sm"
            asChild>
            <a
              href="https://www.canva.com/design/DAGlPFpIzXE/YbsJ7SQxp1lziZM7JTuJ6A/edit?utm_content=DAGlPFpIzXE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer">
              {buttonTextEn}
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
            </a>
          </Button>

          {language === "fa" && (
            <Button
              variant="outline"
              size="sm"
              asChild>
              <a
                href="https://www.canva.com/design/DAGlPNcrp6k/rngftrUqx0EOZ414RjdLPg/edit?utm_content=DAGlPNcrp6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer">
                {buttonTextFa}
                <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
      <Image
        src={img}
        alt="About Image"
        className="h-auto w-full md:w-1/2 rounded-[3px] overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.20)] dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.20)] transition-transform transform m-10 flex"
      />
      {/* <div className="relative w-full h-[500px] md:w-1/2 rounded-[3px] overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.20)] dark:shadow-[0px_4px_30px_0px_rgba(255,255,255,0.20)] transition-transform transform m-10">
        <Image
          src={img.src}
          alt="Abolfazl Chaman"
          layout="fill"
          className="object-cover"
          priority
        />
      </div> */}
    </section>
  );
}
