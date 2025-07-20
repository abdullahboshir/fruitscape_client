/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { drawerItems } from "@/config/drawerItems";
import SidebarItem from "./SidebarItems";
import { USER_ROLE } from "@/constant/role";

const SideBar = () => {
  const [userRole, setUserRole] = useState("") as any;

  useEffect(() => {
    // const { role } = getUserInfo() as any;
    const role = 'superAdmin'
    setUserRole(role);
  }, []);

  return (
    <div className="w-full">
      <Link
        href={userRole === "student" ? "/" : "/dining"}
        className="flex items-center justify-center gap-2 py-4"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/bn/b/b2/%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE_%E0%A6%AD%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%9F%E0%A7%8B%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE_%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF_%E0%A6%95%E0%A6%B2%E0%A7%87%E0%A6%9C%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.png"
          width={40}
          height={40}
          alt="versity logo"
        />
        <h1 className="text-lg font-semibold">Hall Management</h1>
      </Link>

      <ul className="space-y-1 px-2">
        {drawerItems(USER_ROLE.admin as any).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
