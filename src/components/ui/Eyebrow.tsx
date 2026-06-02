interface EyebrowProps {
  text: string;
}

export default function Eyebrow({ text }: EyebrowProps) {
  return (
    <span className="inline-block py-1.5 px-3 rounded-full bg-[#e8f5f3] text-[#1a5f6a] text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm border border-[#c4e4df]">
      {text}
    </span>
  );
}