import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { LuFile, LuGitFork, LuSearch } from "react-icons/lu";

export const ToolTipIcon = ({
  children,
  tooltip,
}: {
  children: ReactNode;
  tooltip: string;
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button>{children}</button>
        </Tooltip.Trigger>
        <Tooltip.Content
          side="right"
          sideOffset={10}
          className="rounded-md border bg-white p-2 text-sm shadow-md"
        >
          <Tooltip.Arrow className="fill-white stroke-slate-500 shadow-md" />
          <p>{tooltip}</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

// TODO: fix trigger zones, animations, tooltip-border

export default function VSCodeSidebar() {
  return (
    <div className="sidebar flex flex-col rounded-sm bg-gray-100 pb-5 pt-1 shadow-sm">
      <div className="border-l-[3px] border-l-orange-400 bg-gray-300/60 px-2 py-1 pt-2">
        <ToolTipIcon
          children={<LuFile size={25} className="hover:text-orange-600" />}
          tooltip="File Explorer"
        />
      </div>
      <div className="px-2 py-2 pl-3 pt-3 hover:bg-gray-300/60">
        <ToolTipIcon
          children={<LuSearch size={25} className="hover:text-orange-600" />}
          tooltip="Search"
        />
      </div>
      <div className="px-2 py-3 pb-1 pl-3 hover:bg-gray-300/60">
        <ToolTipIcon
          children={<LuGitFork size={25} className="hover:text-orange-600" />}
          tooltip="Source Control"
        />
      </div>
    </div>
  );
}
