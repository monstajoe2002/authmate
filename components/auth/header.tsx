import { cn } from "@/lib/utils";
import { Gabarito } from "next/font/google";

const font = Gabarito({ subsets: ["latin"], weight: "600" });

interface HeaderProps {
  label: string;
}
import React from "react";

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        🔐Authmate
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
