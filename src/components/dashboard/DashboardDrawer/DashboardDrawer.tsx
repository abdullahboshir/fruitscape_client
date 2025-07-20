"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Bell, Utensils } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Link from "next/link";


// import { useGetSingleUserQuery } from "@/redux/api/userApi";
// import Spinner from "@/components/Shared/Spinner/Spinner";

import SideBar from "../Sidebar/Sidebar";
import AccountMenu from "../DashboardHeader/AccountMenus";

const drawerWidth = 240;

export default function DashboardDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

//   const { data, isLoading, refetch } = useGetSingleUserQuery({});

//   useEffect(() => {
//     refetch();
//   }, [data, refetch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

  return (
    <div className="flex min-h-screen bg-muted">
      
      {/* ========== Sidebar ========== */}
      <div className="hidden sm:flex flex-col w-[240px] border-r min-h-screen bg-white">
        <SideBar />
      </div>

      {/* ========== Mobile Drawer ========== */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="sm:hidden fixed top-4 left-4 z-50"
            size="icon"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0">
          <SideBar />
        </SheetContent>
      </Sheet>


      {/* ========== Main Content ========== */}
      <div
        className="flex-1 p-4 sm:pl-6"
        style={{ width: `calc(100% - ${drawerWidth}px)` }}
      >
        {/* ========== Topbar ========== */}
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm border mb-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Hey, {'data?.fullName'}
            </p>
            <p className="font-semibold">Welcome to Nazrul Hall</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification */}
            <Link href={`/dashboard/${'data?.user?.role'}/notifications`}>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Badge className="absolute -top-1 -right-1 px-1 py-0.5 text-[10px]">
                  2
                </Badge>
              </Button>
            </Link>

            {/* Dining link */}
            {!["moderator", "student"].includes('data?.user?.role') && (
              <Link href="/dining">
                <Button variant="outline" className="rounded-full p-2">
                  <Utensils className="w-6 h-6" />
                </Button>
              </Link>
            )}

            {/* Avatar and Account */}
            <div className="flex items-center gap-2">
              <Avatar>
                <img src={'data?.profileImg'} alt="User" />
              </Avatar>
              <div className="text-sm leading-tight">
                <div>{'data?.fullName'}</div>
                <div className="text-muted-foreground text-xs capitalize">
                  {'data?.designation'} — {'data?.role'}
                </div>
              </div>
              <AccountMenu />
            </div>
          </div>
        </div>


        {/* ========== Page Content ========== */}
        <div>{children}</div>
      </div>
    </div>
  );
}
