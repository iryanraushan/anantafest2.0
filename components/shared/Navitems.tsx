"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navitems = () => {
  const pathName = usePathname();

  return (
    <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row py-5">
      {headerLinks.map((links) => {
        const isActive = pathName === links.route;
        return (
          <li key={links.route}>
            <Link href={links.route}>{links.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitems;
