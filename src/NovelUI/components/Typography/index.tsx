import { LuTimer, LuUserCheck } from "react-icons/lu";

export const Paragraph = () => {
  return (
    <div className="flex flex-col gap-2 items-start font-[Poppins]">
      <div className="text-[13px] flex justify-center gap-[6px]">
        <LuTimer size={20} className="text-gray-400 pb-[1px]" />
        <div className="">24/hr service</div>
      </div>
      <div className="text-[13px] flex justify-center gap-[6px]">
        <LuUserCheck size={20} className="text-gray-400 pb-[1px]" />
        <div className="">Unbeatable customer service</div>
      </div>
    </div>
  );
};

export function TypographyUI() {
  return (
    <div className="">
      <Paragraph />
    </div>
  );
}
