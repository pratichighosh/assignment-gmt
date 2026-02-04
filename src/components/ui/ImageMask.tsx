import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageMaskProps {
  src: string;
  alt: string;
  mask?: "arched-window" | "circle" | "none";
  className?: string;
  priority?: boolean;
}

export const ImageMask: React.FC<ImageMaskProps> = ({
  src,
  alt,
  mask = "none",
  className,
  priority = false,
}) => {
  const maskStyles = {
    "arched-window": "clip-arched-window",
    circle: "rounded-full",
    none: "",
  };

  return (
    <div className={cn("relative overflow-hidden", maskStyles[mask], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
