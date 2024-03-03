import React from "react";
import { UserButton, SignUpButton, currentUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Logo } from "../branding/logo";
import { LogoWithText } from "../branding/logo-with-text";
import { ThemeToggle } from "../theme-toggle";

export const Header = async () => {
  const user = await currentUser();
  return (
    <header className="w-full h-16 sticky top-0 left-0 right-0 flex justify-between items-center px-2 md:px-4 lg:px-6 border-b-2 bg-background">
      <Logo className="md:hidden" />
      <LogoWithText className="hidden md:flex" />

      <div className="flex justify-center items-center gap-4">
        <ThemeToggle />
        {!user ? (
          <SignUpButton mode="modal">
            <Button>Sign up</Button>
          </SignUpButton>
        ) : (
          <UserButton afterSignOutUrl="/" />
        )}
      </div>
    </header>
  );
};
