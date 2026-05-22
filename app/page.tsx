"use client";

import { boldFont, headingsFont, mainFont } from "./lib/fonts";
import { useRouter } from "next/navigation";
import { BrainCircuit, MoveRight } from "lucide-react";
import '@/app/globals.css';
import { get_repository, get_repository_content } from "./lib/functions/getGithubInfo";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  /*useEffect(() => {
    get_repository("algorithms").then((response) => console.log("Repository:", response));
    get_repository_content("algorithms", "tasks/codeforces/1100/1490C.cpp").then((response) => {
      const content = Buffer.from(response.data.content, response.data.encoding).toString("utf-8");
      const lang = response.data.name.split(".")[1];
      console.log("lang:", lang, "\n\nrepository file:\n", content);
    });
  }, []);*/

  return (
    <main className={`${mainFont.className} min-h-screen w-4/5 bg-(--bg-sec) overflow-y-auto`}>
      <section className="flex gap-4 items-center mt-12 ml-10">
        <div className="flex-1/2 max-w-1/2 flex flex-col">
          <p className="text-3xl"><b>Hello, I'm</b></p>
          <h1 className={`text-8xl font-extrabold ${boldFont.className}`}>Lino<span className="text-(--btn-grad-to)">Les</span></h1>
          <p className="text-[#5b5d66] text-xl mt-3">Developer, Problem Solver, Creator.</p>
          <p className="text-(--text-sec) text-lg mt-3">I try to build efficient, scalable and beautiful solutions<br /> with clean code and thoughtful design.</p>
          <div className="flex gap-4 mt-6">
            <div onClick={() => router.push("/projects")} className="btn bg-linear-90 text-white from-(--btn-grad-from) to-(--btn-grad-to) hover:brightness-110">
              <p>View my works</p>
              <MoveRight color="white" size={25} strokeWidth={1.5} />
            </div>
            <div onClick={() => router.push("/projects")} className="btn bg-linear-90 text-(--text-main) border-2 border-(--border) bg-[#F7F7FB] hover:brightness-90">
              <p>What can I do?</p>
              <BrainCircuit color="var(--text-main)" size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <img src="/logo.png" alt="Logo half screen" className="w-1/2 flex-1/2 h-auto" />
      </section>
      <div className="flex gap-10 items-center ml-10 mt-8">
        <div className="flex flex-col">
          <p className="text-(--text-main) text-xl">2+</p>
          <p className="text-(--text-sec) text-sm">Years Experience</p>
        </div>
        <div className="flex flex-col">
          <p className="text-(--text-main) text-xl">8+</p>
          <p className="text-(--text-sec) text-sm">Projects Completed</p>
        </div>
        <div className="flex flex-col">
          <p className="text-(--text-main) text-xl">50+</p>
          <p className="text-(--text-sec) text-sm">Problems Solved</p>
        </div>
        <div className="flex flex-col">
          <p className="text-(--text-main) text-xl">5+</p>
          <p className="text-(--text-sec) text-sm">Technologies</p>
        </div>
      </div>
      <section className="mt-12 pt-8 border-t-2 border-(--border) h-max px-10">
        <div className="flex justify-between w-full">
          <h2 className="font-bold text-2xl text-(--text-main)">Featured Projects</h2>
          <div className="flex gap-2 cursor-pointer transition-all duration-200 hover:translate-x-1" onClick={() => router.push("/projects")}>
            <p className="text-(--btn-grad-to) font-semibold">View all projects</p>
            <MoveRight color="var(--btn-grad-to)" size={25} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {/* Yeah, i could use component, but i consider here too much info */}
          <div className="card bg-(--bg-main) cursor-pointer transition-all duration-200 hover:scale-[102.5%]" onClick={() => router.push("/project?id=0")}>
            <div className="flex justify-between items-center">
              <p className="text-(--text-main) font-bold">Algorithms</p>
              <p className="rounded-xl bg-(--bg-violet) text-(--text-violet) py-0.5 px-3 font-semibold">Study</p>
            </div>
            <p className="text-(--text-sec) text-sm">Here you can find a lot of different algorithms, data structures and solved tasks.</p>
            <div className="badges flex gap-2">
              <img src="/github.png" alt="GitHub" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
              <img src="/codeforces.png" alt="Codeforces" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
            </div>
            <p className="text-(--text-sec) font-semibold">Live Demo</p>
          </div>
          <div className="card bg-(--bg-main) cursor-pointer transition-all duration-200 hover:scale-[102.5%]" onClick={() => router.push("/project?id=1")}>
            <div className="flex justify-between items-center">
              <p className="text-(--text-main) font-bold">STHelp</p>
              <p className="rounded-xl bg-(--bg-violet) text-(--text-violet) py-0.5 px-3 font-semibold">Web App</p>
            </div>
            <p className="text-(--text-sec) text-sm">Pet-project for helping other to study best way: smart ML search, imported resources.</p>
            <div className="badges flex gap-2">
              <img src="/nextjs.png" alt="Next.js" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
              <img src="/python.png" alt="Python" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
            </div>
            <p className="text-(--text-sec) font-semibold">Live Demo</p>
          </div>
          <div className="card bg-(--bg-main) cursor-pointer transition-all duration-200 hover:scale-[102.5%]" onClick={() => router.push("/project?id=2")}>
            <div className="flex justify-between items-center">
              <p className="text-(--text-main) font-bold">StarsHub</p>
              <p className="rounded-xl bg-(--bg-violet) text-(--text-violet) py-0.5 px-3 font-semibold">Full stack</p>
            </div>
            <p className="text-(--text-sec) text-sm">Closed telegram bot with web-app and some interesting azart games.</p>
            <div className="badges flex gap-2">
              <img src="/nextjs.png" alt="Next.js" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
              <img src="/telegram.png" alt="Telegram" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
            </div>
            <p className="text-(--text-sec) font-semibold">Live Demo</p>
          </div>
          <div className="card bg-(--bg-main) cursor-pointer transition-all duration-200 hover:scale-[102.5%]" onClick={() => router.push("/project?id=3")}>
            <div className="flex justify-between items-center">
              <p className="text-(--text-main) font-bold">Portfolio</p>
              <p className="rounded-xl bg-(--bg-violet) text-(--text-violet) py-0.5 px-3 font-semibold">Frontend</p>
            </div>
            <p className="text-(--text-sec) text-sm">Yeah, this project :) Here you can see my skills, projects and expirience.</p>
            <div className="badges flex gap-2">
              <img src="/nextjs.png" alt="Next.js" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
              <img src="/github.png" alt="Github" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
            </div>
            <p className="text-(--text-sec) font-semibold">Live Demo</p>
          </div>
        </div>
      </section>
    </main>
  );
}