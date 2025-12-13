import React from "react";
import { Link } from "@/i18n/navigation";

interface FooterLinksProps {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white tracking-wider">
        {title}
      </h2>
      <ul className="text-gray-600 dark:text-gray-400 font-medium space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-primary transition-colors duration-300 flex items-center group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
