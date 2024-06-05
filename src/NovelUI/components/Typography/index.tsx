import { Text } from "@/NovelUI/ui/text/text";
import { LuTimer, LuUserCheck } from "react-icons/lu";

export const Paragraph = () => {
  return (
    <div className="flex flex-col items-start gap-2 font-[Poppins]">
      <div className="flex justify-center gap-[6px] text-[13px]">
        <LuTimer size={20} className="pb-[1px] text-gray-400" />
        <div className="">24/hr service</div>
      </div>
      <div className="flex justify-center gap-[6px] text-[13px]">
        <LuUserCheck size={20} className="pb-[1px] text-gray-400" />
        <div className="">Unbeatable customer service</div>
      </div>
    </div>
  );
};

export const TextComponent = () => {
  return (
    <div>
      <Text as="i" className="text-gray-500" size={"sm"}>
        as the man took flight, the guard stood some distance behind and took
        aim through his{" "}
        <Text as="b" size={12}>
          AK47
        </Text>
        , ready to fire away at the escaping convict
      </Text>
    </div>
  );
};

export function TypographyUI() {
  return (
    <div className="space-y-5">
      <Paragraph />
      <TextComponent />
    </div>
  );
}
