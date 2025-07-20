"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerItem } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type IProps = {
  item: DrawerItem;
};

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const SidebarItem = ({ item }: IProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = pathname === `/dashboard/${item.path}`;

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="mb-1">
      <div
        className={classNames(
          "flex items-center justify-between px-4 py-2 rounded-md cursor-pointer",
          isActive ? "bg-muted text-primary" : "hover:bg-muted"
        )}
        onClick={() => hasChildren && setOpen(!open)}
      >
        <Link href={`/dashboard/${item.path}`} className="flex items-center gap-2">
          {item.icon && <item.icon className="w-5 h-5" />}
          <span className="text-sm font-medium">{item.title}</span>
        </Link>

        {hasChildren &&
          (open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
      </div>

      {hasChildren && open && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children!.map((child) => (
            <Link
              key={child.path}
              href={`/dashboard/${child.path}`}
              className={classNames(
                "block px-3 py-1 rounded-md text-sm",
                pathname === `/dashboard/${child.path}`
                  ? "bg-muted text-primary"
                  : "hover:bg-muted"
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
