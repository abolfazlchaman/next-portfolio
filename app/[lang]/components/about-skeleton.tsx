"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import img from "public/images/about.webp";

export function AboutImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full rounded-[8px] shadow-[0px_4px_30px_0px_var(--custom-shadow)]">
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[3px] bg-sidebar-ring" />
      )}
      <Image
        src={img}
        alt="About Image"
        fill
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-500 rounded-sm ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        priority
      />
    </div>
  );
}
