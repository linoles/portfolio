export default function LangCard({ title, level, progress, icon }: { title: string, level: "Advanced" | "Intermediate" | "Beginning", progress: number, icon: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-(--border) bg-(--card-bg) p-4 flex-1">
      <div className="flex gap-2">
        <img src={icon} alt={title + ' Lang Icon'} className="h-13 rounded-lg" />
        <div>
          <h3 className="text-lg text-(--text-main) font-medium">{title}</h3>
          <p className="text-(--text-sec) text-sm">{level}</p>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <div className="lang-progress-cont w-full">
          <div className="lang-progress-fill" style={{ width: progress + '%' }}></div>
        </div>
        <p className="text-(--text-sec) text-xs">{progress}%</p>
      </div>
    </div>
  );
}