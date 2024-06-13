import { Black1 } from "./buttons-gallery/Black1";
import { Black2 } from "./buttons-gallery/Black2";
import { Black3 } from "./buttons-gallery/Black3";
import { Black4 } from "./buttons-gallery/Black4";
import { Black5 } from "./buttons-gallery/Black5";
import { Black6 } from "./buttons-gallery/Black6";
import { Black7 } from "./buttons-gallery/Black7";
import { Black8 } from "./buttons-gallery/Black8";
import { Black9 } from "./buttons-gallery/Black9";
import { Black10 } from "./buttons-gallery/Black10";
import { Black11 } from "./buttons-gallery/Black11";
import { Black12 } from "./buttons-gallery/Black12";
import { Black13 } from "./buttons-gallery/Black13";
import { Black14 } from "./buttons-gallery/Black14";

import { BlackIcon1 } from "./buttons-gallery/BlackIcon1";
import { BlackIcon2 } from "./buttons-gallery/BlackIcon2";
import { BlackIcon3 } from "./buttons-gallery/BlackIcon3";
import { BlackIcon4 } from "./buttons-gallery/BlackIcon4";
import { BlackIcon5 } from "./buttons-gallery/BlackIcon5";
import { BlackIcon6 } from "./buttons-gallery/BlackIcon6";
import { BlackIcon7 } from "./buttons-gallery/BlackIcon7";
import { BlackIcon8 } from "./buttons-gallery/BlackIcon8";
import { BlackIcon9 } from "./buttons-gallery/BlackIcon9";
import { BlackIcon10 } from "./buttons-gallery/BlackIcon10";
import { BlackIcon11 } from "./buttons-gallery/BlackIcon11";

export const Button1 = () => {
  return (
    <button className="group h-8 select-none rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
      <span className="block group-active:[transform:translate3d(0,1px,0)]">
        Click me
      </span>
    </button>
  );
};

export default function Buttons() {
  return (
    <div className="space-y-7">
      <div className="black buttons flex flex-wrap gap-4">
        <Button1 />
        <Black1 />
        <Black2 />
        <Black3 />
        <Black4 />
        <Black5 />
        <Black6 />
        <Black7 />
        <Black8 />
        <Black9 />
        <Black10 />
        <Black11 />
        <Black12 />
        <Black13 />
        <Black14 />
      </div>
      <div className="blackIcons buttons flex flex-wrap gap-4">
        <BlackIcon1 />
        <BlackIcon2 />
        <BlackIcon3 />
        <BlackIcon4 />
        <BlackIcon5 />
        <BlackIcon6 />
        <BlackIcon7 />
        <BlackIcon8 />
        <BlackIcon9 />
        <BlackIcon10 />
        <BlackIcon11 />
      </div>
    </div>
  );
}
