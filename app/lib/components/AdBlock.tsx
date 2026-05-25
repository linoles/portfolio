import { MoveRight } from "lucide-react";

export default function AdBlock({ title, desc, btnText, btnSrc, router }: { title: string, desc: string, btnText: string, btnSrc: string, router: any }) {
  return (
    <div className="mt-10 flex justify-between rounded-xl items-center bg-linear-90 from-(--block-gr-from) to-(--block-gr-to) p-10 px-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold text-2xl">{title}</h2>
        <p className="text-white">{desc}</p>
      </div>
      <div className="btn h-fit flex gap-4 bg-white w-fit hover:brightness-110 hover:scale-105" onClick={() => router.push(btnSrc)}>
        <p className="text-(--block-gr-to) text-sm font-medium">{btnText}</p>
        <MoveRight size={25} color="var(--block-gr-to)" strokeWidth={1.5} />
      </div>
    </div>
  )
}