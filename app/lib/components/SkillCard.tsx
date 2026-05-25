export default function SkillCard({ title, icon, level }: { title: string, icon: string, level: "Intermediate" | "Beginning" | "Advanced" }) {
  return (
    <div className="bg-(--card-bg) border-2 border-(--border) rounded-xl p-4 py-5 flex gap-3 transition-all duration-400 hover:scale-[102.5%] cursor-pointer">
      <img src={icon} alt={title + ' Skill Icon'} className="w-13 max-h-13 object-contain rounded-lg" />
      <div className="">
        <h3 className="text-lg text-(--text-main) font-semibold">{title}</h3>
        <p className="text-(--text-sec)">{level}</p>
      </div>
    </div>
  )
}