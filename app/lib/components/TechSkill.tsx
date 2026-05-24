export default function TechSkill({ icon, title }: { icon: string, title: string }) {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <div className="rounded-lg border-2 border-(--border) p-4.5 py-3 bg-white">
        <img src={icon} alt={title + ' Icon'} className="w-10 h-10 object-contain rounded-lg" />
      </div>
      <div className="text-center font-medium text-(--text-sec) text-[13px]">{title}</div>
    </div>
  );
}