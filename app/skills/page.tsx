"use client";

import { MoveRight } from "lucide-react";
import LangCard from "../lib/components/LangCard";
import Navbar from "../lib/components/Navbar";
import SkillCard from "../lib/components/SkillCard";
import { mainFont } from "../lib/fonts";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useRouter } from "next/navigation";
import AdBlock from "../lib/components/AdBlock";
// I didn't used Recharts.js before

const chartData = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 75, fullMark: 100 },
  { subject: 'Tools', A: 70, fullMark: 100 },
  { subject: 'Databases', A: 75, fullMark: 100 },
  { subject: 'Languages', A: 85, fullMark: 100 },
  { subject: 'Problem Solving', A: 95, fullMark: 100 },
];

export default function SkillsPage() {
  const router = useRouter();

  return (
    <>
      <Navbar curPage="skills" />
      <main className={`${mainFont.className} w-4/5 h-full overflow-y-scroll bg-(--bg-sec) p-10 pt-14`}>
        <h1 className="text-3xl text-(--text-main) font-semibold">My skills</h1>
        <p className="text-(--text-sec) mt-1">Here are listed technologies and tools in different areas<br></br> in which I am strong and have some experience.</p>
        <div className="flex flex-col mt-6 gap-6">
          <section>
            <h2 className="text-(--text-main) text-xl font-semibold">Languages</h2>
            <div className="mt-2 flex gap-2">
              <LangCard title="JavaScript" icon="/js.png" level="Advanced" progress={95} />
              <LangCard title="Python" icon="/python.png" level="Intermediate" progress={70} />
              <LangCard title="C++" icon="/cpp.png" level="Advanced" progress={90} />
              <LangCard title="PHP" icon="/php.png" level="Intermediate" progress={75} />
            </div>
          </section>
          <section>
            <h2 className="text-(--text-main) text-xl font-semibold">Frontend</h2>
            <div className="grid grid-cols-3 grid-row-2 gap-1.5 mt-2">
              <SkillCard title="React" icon="/react.png" level="Advanced" />
              <SkillCard title="Next.js" icon="/nextjs.png" level="Intermediate" />
              <SkillCard title="Tailwind CSS" icon="/tailwind.png" level="Advanced" />
              <SkillCard title="HTML & CSS" icon="/html.png" level="Advanced" />
              <SkillCard title="TypeScript" icon="/ts.png" level="Intermediate" />
              <SkillCard title="Bootstrap" icon="/bootstrap.png" level="Beginning" />
            </div>
          </section>
          <section>
            <h2 className="text-(--text-main) text-xl font-semibold">Backend</h2>
            <div className="grid grid-cols-3 grid-row-2 gap-1.5 mt-2">
              <SkillCard title="Node.js" icon="/nodejs.png" level="Advanced" />
              <SkillCard title="PHP" icon="/php.png" level="Intermediate" />
              <SkillCard title="Laravel 10" icon="/laravel.png" level="Advanced" />
              <SkillCard title="Python" icon="/python.png" level="Intermediate" />
              <SkillCard title="FastAPI" icon="/fastapi.png" level="Beginning" />
              <SkillCard title="MySQL" icon="/mysql.png" level="Intermediate" />
            </div>
          </section>
          <section>
            <h2 className="text-(--text-main) text-xl font-semibold">Tools & Others</h2>
            <div className="grid grid-cols-3 grid-row-2 gap-1.5 mt-2">
              <SkillCard title="Git" icon="/git.png" level="Advanced" />
              <SkillCard title="Github" icon="/github.png" level="Advanced" />
              <SkillCard title="Telegram Bots" icon="/telegram.png" level="Advanced" />
              <SkillCard title="VS Code" icon="/vscode.png" level="Intermediate" />
              <SkillCard title="Figma" icon="/figma.png" level="Beginning" />
              <SkillCard title="Google Fonts" icon="/fonts.png" level="Intermediate" />
            </div>
          </section>
          <section className="bg-(--card-bg) border-2 border-(--border) rounded-xl p-5">
            <h2 className="text-(--text-main) text-xl font-semibold">Skills Overview</h2>
            <div className="flex gap-8 mt-3">
              <div className="w-1/2 border-t-2 border-r-2 border-(--border) p-2 h-100">
                <ResponsiveContainer width={'100%'} height={'100%'}>
                  <RadarChart cx={'50%'} cy={'50%'} outerRadius={'80%'} data={chartData}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="subject" fontSize={14} color="var(--text-main)" />
                    <Radar
                      name="A"
                      dataKey="A"
                      stroke="#9166F5"
                      fill="#312671"
                      fillOpacity={0.6}
                      strokeWidth={2}
                      dot={true}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 flex-1" title="I'm studying it now every day!">
                  <p className="text-(--text-main) w-2/5">Problem Solving</p>
                  <div className="lang-progress-cont w-full">
                    <div className="lang-progress-fill" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-(--text-sec)">95%</p>
                </div>
                <div className="flex items-center gap-4 flex-1" title="One of my main fields">
                  <p className="text-(--text-main) w-2/5">Frontend</p>
                  <div className="lang-progress-cont w-full">
                    <div className="lang-progress-fill" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-(--text-sec)">90%</p>
                </div>
                <div className="flex items-center gap-4 flex-1" title="The basic of Programming">
                  <p className="text-(--text-main) w-2/5">Languages</p>
                  <div className="lang-progress-cont w-full">
                    <div className="lang-progress-fill" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-(--text-sec)">85%</p>
                </div>
                <div className="flex items-center gap-4 flex-1" title="Very interesting field">
                  <p className="text-(--text-main) w-2/5">Backend</p>
                  <div className="lang-progress-cont w-full">
                    <div className="lang-progress-fill" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-(--text-sec)">75%</p>
                </div>
                <div className="flex items-center gap-4 flex-1" title="How to work in Backend without knowledge of databases?">
                  <p className="text-(--text-main) w-2/5">Databases</p>
                  <div className="lang-progress-cont w-full">
                    <div className="lang-progress-fill" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-(--text-sec)">75%</p>
                </div>
                <div className="flex items-center gap-4 flex-1" title="I rarely learn new ones, but I often use them">
                  <p className="text-(--text-main) w-2/5">Tools</p>
                  <div className="lang-progress-cont w-full">
                    <div className="lang-progress-fill" style={{ width: '70%' }}></div>
                  </div>
                  <p className="text-(--text-sec)">70%</p>
                </div>
              </div>
            </div>
          </section>
          <AdBlock title="Always learning means always improwing" desc="I believe in continuous learning and building better every day. Now I put a strong emphasis on algorithms." btnText="View my Projects" btnSrc="/projects" router={router} />
        </div>
      </main>
    </>
  )
}