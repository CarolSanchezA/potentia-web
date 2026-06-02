import { MdDoneAll } from 'react-icons/md'; 

interface BubbleProps {
  type: 'in' | 'out';
  text: string;
  time: string;
}

export default function Bubble({ type, text, time }: BubbleProps) {
  const isOut = type === "out";
  return (
    <div className={`flex flex-col max-w-[85%] ${isOut ? "self-end items-end" : "self-start items-start"}`}>
      <div className={`p-3 rounded-2xl shadow-sm relative text-[15px] leading-snug ${isOut ? "bg-[#d9fdd3] text-[#111b21] rounded-tr-none" : "bg-white text-[#111b21] rounded-tl-none border border-gray-100"}`}>
        {text}
        <div className={`absolute top-0 w-3 h-3 ${isOut ? "-right-2 bg-[#d9fdd3]" : "-left-2 bg-white border-l border-t border-gray-100"}`} style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}></div>
      </div>
      <div className="flex items-center gap-1 mt-1 px-1">
        <span className="text-[11px] text-gray-500 font-medium">{time}</span>
        {isOut && <MdDoneAll className="w-4 h-4 text-[#53bdeb]" />}
      </div>
    </div>
  );
}