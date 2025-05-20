"use client";

import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { DashboardNav } from "../components/dashboard-nav";
import { UserNav } from "../components/user-nav";
import { ModeToggle } from "../components/mode-toggle";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";

export default function MainLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 sm:max-w-sm">
                <div className="px-2 py-6">
                  <DashboardNav />
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/dashboard" className="flex items-center gap-2">
              <span className="text-2xl font-bold">취약점 관리 포털</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <form className="hidden lg:block">
              <div className="relative">
                <Input
                  placeholder="검색..."
                  className="w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 border-r border-[hsl(var(--border))] md:sticky md:block">
          <div className="h-full flex flex-col overflow-hidden py-6 pr-6">
            <DashboardNav />
          </div>
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
