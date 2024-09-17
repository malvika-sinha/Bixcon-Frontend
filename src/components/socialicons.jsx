export default function SocialIcons({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex justify-center items-center text-black border-2 
            border-black rounded-full aspect-square mx-4 hover:bg-[pink] hover:border-black transition-all duration-500 scale-105"
    >
      {children}
    </a>
  );
}
