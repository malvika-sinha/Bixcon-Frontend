export default function ServicesBox({ title, children, subtitle, width }) {
  return (
    <a
      href="#"
      className={`flex flex-col gap-16 ${width} relative top-[52px] left-[28%] h-[253%] p-8 bg-gray-200 rounded-xl`}
    >
      
      <h1 className="text-black text-xl font-semibold uppercase">{title}</h1>
      <div className="flex flex-wrap gap-4 relative top-[-15%] left-[0%]">
        <div className="flex flex-row flex-wrap gap-4">{children}</div>
        <h1 className="text-black font-semibold uppercase text-[22px] italic relative top-[23%]">{subtitle}</h1>
      </div>
    </a>
  );
}
