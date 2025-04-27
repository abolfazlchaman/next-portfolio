"use client";

import { useEffect, useState } from "react";
import Crossfire from "react-canvas-confetti/dist/presets/crossfire";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Snow from "react-canvas-confetti/dist/presets/snow";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiGmail, SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";
import img from "../../../public/images/AbolfazlChamanFormal.jpg";
import { getDictionary } from "@/get-dictionary";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  github: SiGithub,
  email: SiGmail,
  linkedin: SiLinkedin,
  telegram: SiTelegram,
  whatsapp: IoLogoWhatsapp,
};
const birthday = { day: 8, month: 4, year: 2003 };
const nowruz = { day: 20, month: 3 };
const christmas = { day: 25, month: 12 };
// TODO const adoptCatDay = { day: XX, month: XX, year: XXXX };
// TODO const emigrationDay = { day: XX, month: XX, year: XXXX };

export function Hero({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) {
  const { fullName, profession, experience, location } = dictionary.developerInfo;
  const socialLinks = dictionary.socialLinks || [];

  const [celebration, setCelebration] = useState<"birthday" | "nowruz" | "christmas" | null>(null);

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthday.year;

  useEffect(() => {
    const today = new Date();
    function isWithinRange(start: Date, days: number): boolean {
      const end = new Date(start);
      end.setDate(start.getDate() + days - 1);
      return today >= start && today <= end;
    }

    const birthdayStart = new Date(currentYear, birthday.month - 1, birthday.day);
    const nowruzStart = new Date(currentYear, nowruz.month - 1, nowruz.day);
    const christmasStart = new Date(currentYear, christmas.month - 1, christmas.day);

    if (isWithinRange(birthdayStart, 7)) {
      setCelebration("birthday");
    } else if (isWithinRange(nowruzStart, 13)) {
      setCelebration("nowruz");
    } else if (isWithinRange(christmasStart, 15)) {
      setCelebration("christmas");
    }
    // Future Easter Eggs:
    // if (today.getDate() === adoptCatDay.day && today.getMonth() + 1 === adoptCatDay.month && today.getFullYear() === adoptCatDay.year) {
    //   setCelebration("adoptCat");
    // }

    // if (today.getDate() === emigrationDay.day && today.getMonth() + 1 === emigrationDay.month && today.getFullYear() === emigrationDay.year) {
    //   setCelebration("emigration");
    // }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container space-8 min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center mt-16 relative overflow-hidden">
      {/* 🎉 Confetti Canvas */}
      {celebration === "birthday" && <Fireworks autorun={{ speed: 0.2 }} />}
      {celebration === "nowruz" && <Crossfire autorun={{ speed: 1 }} />}
      {celebration === "christmas" && <Snow autorun={{ speed: 30 }} />}

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-shadow">
        {fullName}
        <span className="animate-pulse [animation-duration:0.5s] [animation-iteration-count:infinite] [animation-timing-function:steps(1,start)]">
          {" "}
          _
        </span>
      </h1>

      {/* 👤 Profile image */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-[0px_4px_30px_0px_var(--custom-shadow)]">
        <Image
          src={img.src}
          alt={fullName}
          fill
          className="object-cover aspect-square object-[left_55%_bottom_90%]"
          priority
        />
      </div>
      <h2 className="text-xl text-muted-foreground mt-4 justify-center text-center">
        {profession}
      </h2>

      <div className="flex flex-wrap-reverse mt-4 md:flex-nowrap justify-center gap-2">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.key];
          if (!Icon) return null;
          return (
            <Button
              key={link.label}
              variant="outline"
              size="sm"
              asChild
              className="gap-2">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}>
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
      <Button
        asChild
        size="lg"
        className="my-4 w-full">
        <Link
          onClick={handleClick}
          href="#"
          className="font-semibold">
          {dictionary.developerInfo.CTAButtonText}
        </Link>
      </Button>
      <div className="w-full space-y-2 flex flex-col justify-center items-center text-center">
        <p className="text-muted-foreground w-full ">{experience}</p>
        {celebration && (
          <div className="mt-6 p-4 rounded-2xl border shadow-md bg-background text-foreground max-w-md">
            <h3 className="text-2xl font-bold mb-2">
              {dictionary.celebrations[celebration].title}
            </h3>

            {celebration === "birthday" && (
              <>
                <p
                  dangerouslySetInnerHTML={{
                    __html: dictionary.celebrations.birthday.line1.replace("{age}", age.toString()),
                  }}
                />
                <p className="mt-2">{dictionary.celebrations.birthday.line2}</p>
                <p className="mt-2 italic text-sm">{dictionary.celebrations.birthday.footer}</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  <a
                    href="https://birth.carbalad.com/1382/1/19/male/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground">
                    <span className="font-semibold">IV・VIII・MMIII</span>
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href="https://lunaf.com/lunar-calendar/2003/04/08/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground">
                    {dictionary.language === "fa" ? "ماه این روز 🌙" : "This days moon 🌙"}
                  </a>
                </p>
              </>
            )}

            {celebration === "nowruz" && (
              <>
                <p>{dictionary.celebrations.nowruz.line1}</p>
                <p className="mt-2 text-lg">{dictionary.celebrations.nowruz.emojiLine}</p>
                <p className="mt-2 italic text-sm">{dictionary.celebrations.nowruz.footer}</p>
              </>
            )}

            {celebration === "christmas" && (
              <>
                <p>{dictionary.celebrations.christmas.line1}</p>
                <p className="mt-2 italic text-sm">{dictionary.celebrations.christmas.footer}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
// TODO make a youtube video about easter eggs
