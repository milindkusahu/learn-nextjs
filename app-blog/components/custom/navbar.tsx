"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const { data } = useSession();

  return (
    <nav className="flex bg-muted justify-around items-center p-4">
      <h3>Blogify</h3>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/admin">Admin</Link>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center text-sm gap-2">
                {data.user.image && (
                  <Image
                    className="rounded-full"
                    src={data.user.image}
                    height={30}
                    width={30}
                    alt={data.user.name}
                  />
                )}
                <p className="text-primary font-extralight">{data.user.name}</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            className="bg-primary text-secondary text-sm px-2 py-1 rounded-sm font-extralight"
            href="/signin"
          >
            Signin
          </Link>
        )}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
