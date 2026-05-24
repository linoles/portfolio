"use client";

import { useRouter } from "next/navigation";
import { headingsFont, mainFont } from "../fonts";
import { Box, BriefcaseBusiness, ChartNoAxesCombined, CircleUserRound, Home, Sun } from 'lucide-react';
import "@/app/globals.css";

export default function Navbar({ curPage }: { curPage: string }) {
  const router = useRouter();

  return (
    <aside className="w-1/5 flex flex-col gap-12 p-8 bg-(--main-bg) border-r-2 border-(--border) h-screen">
      <div className="flex gap-4 items-center">
        <p className={`rounded-lg bg-[#191C43] p-1 text-center w-10 h-10 text-(--text-bright) text-2xl ${headingsFont.className}`}>P</p>
        <h2 className={`${mainFont.className} text-(--text-main) font-semibold text-xl`}>Portfolio</h2>
      </div>
      <nav className={`flex flex-col gap-5 ${mainFont.className}`}>
        <div className={"navbar-link " + (curPage == "home" ? "active" : "")} onClick={() => router.push("/")}>
          <Home color={curPage == "home" ? "var(--btn-active)" : "var(--text-main)"} size={30} />
          <p>Home</p>
        </div>
        <div className={"navbar-link " + (curPage == "skills" ? "active" : "")} onClick={() => router.push("/skills")}>
          <ChartNoAxesCombined color={curPage == "skills" ? "var(--btn-active)" : "var(--text-main)"} size={30} />
          <p>Skills</p>
        </div>
        <div className={"navbar-link " + (curPage == "projects" ? "active" : "")} onClick={() => router.push("/projects")}>
          <Box color={curPage == "projects" ? "var(--btn-active)" : "var(--text-main)"} size={30} />
          <p>Projects</p>
        </div>
        <div className={"navbar-link " + (curPage == "exp" ? "active" : "")} onClick={() => router.push("/exp")}>
          <BriefcaseBusiness color={curPage == "exp" ? "var(--btn-active)" : "var(--text-main)"} size={30} />
          <p>Expirience</p>
        </div>
        <div className={"navbar-link " + (curPage == "about" ? "active" : "")} onClick={() => router.push("/about")}>
          <CircleUserRound color={curPage == "about" ? "var(--btn-active)" : "var(--text-main)"} size={30} />
          <p>About</p>
        </div>
      </nav>
      <div className="mt-auto flex gap-3 items-center cursor-pointer transition-all duration-300 hover:brightness-90 change-theme-btn">
        <Sun color="var(--text-main)" size={40} className="rounded-full bg-[#F4F5F5] p-2 icon" /> {/* TODO: change */}
        <p className={`${mainFont.className}`}>Theme</p>
      </div>
    </aside>
  );
}