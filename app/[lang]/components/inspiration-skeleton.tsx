"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export function InspirationImage({
  src,
  alt,
  reversed,
}: {
  src: string;
  alt: string;
  reversed?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full">
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl bg-sidebar-ring" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`rounded-2xl object-cover opacity-40 transition-opacity duration-500 ${
          loaded ? "opacity-40" : "opacity-0"
        } ${reversed ? "-scale-x-100" : ""}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
