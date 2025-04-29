"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
      {!loaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg bg-sidebar-ring" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        unoptimized
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
