"use client";

import * as React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDictionary } from "@/get-dictionary";

export function ThemeToggler({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["theme"];
}) {
  const { setTheme, theme } = useTheme();
  const { light, dark, system, toggle } = dictionary;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon">
          <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{toggle}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaSun className="h-4 w-4" />
            {light}
          </div>
          {theme === "light" && <span className="text-primary">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaMoon className="h-4 w-4" />
            {dark}
          </div>
          {theme === "dark" && <span className="text-primary">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MdDesktopMac className="h-4 w-4" />
            {system}
          </div>
          {theme === "system" && <span className="text-primary">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
