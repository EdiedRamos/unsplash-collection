"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const OPTIONS = [
  {
    id: "54daa298-e855-4203-aa07-50fad997fcac",
    value: "Home",
    to: "/",
  },
  {
    id: "6be2be8b-1fa8-41d1-bf2c-45f69176894c",
    value: "Collections",
    to: "/collections",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {OPTIONS.map((link) => (
        <Link
          key={link.id}
          href={link.to}
          className={`px-5 py-2 ${
            pathname === link.to
              ? "bg-cc-gray-100 rounded-md"
              : "text-cc-gray-200"
          }`}
        >
          {link.value}
        </Link>
      ))}
    </nav>
  );
};
