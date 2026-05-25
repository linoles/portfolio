"use client";

import { boldFont, headingsFont, mainFont } from "./lib/fonts";
import { useRouter } from "next/navigation";
import { BrainCircuit, Code, Focus, MoveRight } from "lucide-react";
import '@/app/globals.css';
import { get_repository_content } from "./lib/functions/getGithubInfo";
import { useEffect, useState } from "react";
import TechSkill from "./lib/components/TechSkill";
import Navbar from "./lib/components/Navbar";
import AdBlock from "./lib/components/AdBlock";

export default function HomePage() {
  const router = useRouter();
  const [solvedTasks, setSolvedTasks] = useState<Number>(0);

  useEffect(() => {
    get_repository_content("algorithms", "tasks/codeforces/").then((response) => {
      // const content = Buffer.from(response.data.content, response.data.encoding).toString("utf-8");
      // const lang = response.data.name.split(".")[1];
      response.data.forEach((bigDir: any) => {
        get_repository_content("algorithms", bigDir.path).then((file: any) => {
          if (bigDir.name == "rounds") {
            file.data.forEach((dir: any) => {
              get_repository_content("algorithms", dir.path).then((roundFile: any) => {
                setSolvedTasks(prev => prev + roundFile.data.length - 1);
                console.log(roundFile.data.length - 1, solvedTasks);
              });
            });
          } else {
            setSolvedTasks(prev => prev + file.data.length - 1);
            console.log(file.data.length - 1, solvedTasks);
          }
        });
      });
    });
  }, []);

  return (
    <>
      <Navbar curPage="home" />
      <main className={`${mainFont.className} h-screen w-4/5 bg-(--bg-sec) overflow-y-scroll pb-10`}>
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
              <div onClick={() => router.push("/skills")} className="btn bg-linear-90 text-(--text-main) border-2 border-(--border) bg-[#F7F7FB] hover:brightness-90">
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
            <p className="text-(--text-main) text-xl cursor-pointer" title="Only the quantity from algorithms/tasks is taken here" onClick={() => window.open("https://github.com/linoles/algorithms/")}>{solvedTasks + ''}+</p>
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
              <p className="text-(--text-sec) text-sm">Yeah, this project :) Here you can see my skills, projects and experience.</p>
              <div className="badges flex gap-2">
                <img src="/nextjs.png" alt="Next.js" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
                <img src="/github.png" alt="Github" className="rounded-lg bg-(--bg-sec) border-2 border-(--border) p-1.5" width={35} height={35} />
              </div>
              <p className="text-(--text-sec) font-semibold">Live Demo</p>
            </div>
          </div>
        </section>
        <section className="mt-12 pt-8 border-t-2 border-(--border) h-max px-10 flex gap-40">
          <div className="flex flex-col gap-2 max-w-[35%]">
            <h2 className="text-(--text-main) text-2xl font-bold">About me</h2>
            <p className="text-(--text-sec) text-sm">
              I'm beginning developer who loves building modern dynamic web-projects.
              I enjoy solving complex problems and turning ideas into clear, unique and efficient solutions,
              but sometimes my solutions may match with the official ones.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="bg-(--bg-violet) rounded-lg p-1 h-fit w-fit">
                <Focus size={25} color="var(--text-violet)" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-(--text-main)">Focused in</h3>
                <div className="text-(--text-sec) text-sm font-medium">Web Development and now especially Competetive Programming</div>
              </div>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="bg-(--bg-violet) rounded-lg p-1 h-fit w-fit">
                <Focus size={25} color="var(--text-violet)" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-(--text-main)">Currently learning</h3>
                <div className="text-(--text-sec) text-sm font-medium">Backend in PHP Laravel 10, algorithms and data structures in C++</div>
              </div>
            </div>
            <div className="btn mt-5 flex gap-4 bg-(--btn-active) w-fit p-2! px-5! hover:brightness-110 hover:scale-105" onClick={() => router.push("/skills")}>
              <p className="text-white text-sm font-medium">More about Me</p>
              <MoveRight size={25} color="white" strokeWidth={1.5} />
            </div>
          </div>
          <div className="w-[65%] rounded-lg bg-(--bg-gray) p-4">
            <div className="bg-(--bg-main) p-3 py-5 relative">
              {/* Yeah, i wrote it manually :( */}
              <p className="text-(--text-main)">
                <span className="font-semibold text-(--text-chosen)">const</span> developer = {"{"}<br />
                &emsp;&emsp;<span className="font-semibold text-(--text-violet)">name</span>: <span className="text-(--text-green)">"Linoles"</span>,<br />
                &emsp;&emsp;<span className="font-semibold text-(--text-violet)">skills</span>: {"["}<span className="text-(--text-green)">"JavaScript"</span>, <span className="text-(--text-green)">"TypeScript"</span>, <span className="text-(--text-green)">"Python"</span>, <span className="text-(--text-green)">"C++"</span>, <span className="text-(--text-green)">"PHP"</span>{"]"},<br />
                &emsp;&emsp;<span className="font-semibold text-(--text-violet)">passion</span>: <span className="text-(--text-green)">"Building useful applications and other things"</span>,<br />
                &emsp;&emsp;<span className="font-semibold text-(--text-violet)">focus</span>: <span className="text-(--text-green)">"Clean Code & Performance"</span>,<br />
                {"}"};<br /><br />
                <span className="font-semibold text-(--text-chosen)">function</span> <span className="text-(--text-orange)">solve</span>(<i>problem</i>) {"{"}<br />
                &emsp;&emsp;<span className="font-semibold text-(--text-violet)">while</span> (problem.exists) {"{"}<br />
                &emsp;&emsp;&emsp;&emsp;problem.<span className="text-(--text-orange)">breakdown</span>();<br />
                &emsp;&emsp;&emsp;&emsp;problem.<span className="text-(--text-orange)">solve</span>();<br />
                &emsp;&emsp;{"}"}<br />
                &emsp;&emsp;<span className="font-semibold text-(--text-violet)">return</span> <span className="text-(--text-green)">"Better World 🌍"</span>;<br />
                {"}"}<br />
              </p>
              <div className="rounded-full bg-(--bg-violet) p-3 absolute top-[45%] h-fit w-fit right-8">
                <Code color="var(--text-violet)" size={30} />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 pt-8 border-t-2 border-(--border) h-max px-10">
          <h2 className="text-(--text-main) text-2xl font-bold">Tech stack</h2>
          <div className="flex mt-4 gap-1 flex-wrap">
            {/* Web frontend */}
            <TechSkill icon="/html.png" title="HTML" />
            <TechSkill icon="/css.png" title="CSS" />
            <TechSkill icon="/js.png" title="JavaScript" />
            <TechSkill icon="/ts.png" title="TypeScript" />
            <TechSkill icon="/react.png" title="React" />
            <TechSkill icon="/nextjs.png" title="Next.js" />
            {/* Backend */}
            <TechSkill icon="/php.png" title="PHP" />
            <TechSkill icon="/laravel.png" title="Laravel" />
            <TechSkill icon="/mysql.png" title="MySQL" />
            {/* Other */}
            <TechSkill icon="/python.png" title="Python" />
            <TechSkill icon="/nodejs.png" title="Node.js" />
            <TechSkill icon="/git.png" title="Git" />
          </div>
          <AdBlock title="Let's build something amazing together" desc="I'm always open to new opportunities and interesting projects" btnText="See my Works" btnSrc="/projects" router={router} />
        </section>
      </main>
    </>
  );
}