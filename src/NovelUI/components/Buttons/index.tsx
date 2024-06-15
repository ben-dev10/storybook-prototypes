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

import { Shadow1 } from "./buttons-gallery/Shadow1";
import { Shadow2 } from "./buttons-gallery/Shadow2";
import { Shadow3 } from "./buttons-gallery/Shadow3";
import { Shadow4 } from "./buttons-gallery/Shadow4";

import { Letters1 } from "./buttons-gallery/Letters1";
import { Letters2 } from "./buttons-gallery/Letters2";
import { Letters3 } from "./buttons-gallery/Letters3";
import { Letters4 } from "./buttons-gallery/Letters4";

import { Link1 } from "./buttons-gallery/Link1";
import { Link2 } from "./buttons-gallery/Link2";
import { Link3 } from "./buttons-gallery/Link3";
import { Link4 } from "./buttons-gallery/Link4";
import { Link5 } from "./buttons-gallery/Link5";
import { Link6 } from "./buttons-gallery/Link6";
import { Link7 } from "./buttons-gallery/Link7";
import { Link8 } from "./buttons-gallery/Link8";

import { SubtleSkeuomorphic1 } from "./buttons-gallery/SubtleSkeuomorphic1";
import { SubtleSkeuomorphic2 } from "./buttons-gallery/SubtleSkeuomorphic2";
import { SubtleSkeuomorphic3 } from "./buttons-gallery/SubtleSkeuomorphic3";
import { SubtleSkeuomorphic4 } from "./buttons-gallery/SubtleSkeuomorphic4";
import { SubtleSkeuomorphic5 } from "./buttons-gallery/SubtleSkeuomorphic5";
import { SubtleSkeuomorphic6 } from "./buttons-gallery/SubtleSkeuomorphic6";
import { SubtleSkeuomorphic7 } from "./buttons-gallery/SubtleSkeuomorphic7";
import { SubtleSkeuomorphic8 } from "./buttons-gallery/SubtleSkeuomorphic8";
import { SubtleSkeuomorphic9 } from "./buttons-gallery/SubtleSkeuomorphic9";
import { SubtleSkeuomorphic10 } from "./buttons-gallery/SubtleSkeuomorphic10";
import { SubtleSkeuomorphic11 } from "./buttons-gallery/SubtleSkeuomorphic11";
import { SubtleSkeuomorphic12 } from "./buttons-gallery/SubtleSkeuomorphic12";
import { SubtleSkeuomorphic13 } from "./buttons-gallery/SubtleSkeuomorphic13";
import { SubtleSkeuomorphic14 } from "./buttons-gallery/SubtleSkeuomorphic14";
import { SubtleSkeuomorphic15 } from "./buttons-gallery/SubtleSkeuomorphic15";
import { SubtleSkeuomorphic16 } from "./buttons-gallery/SubtleSkeuomorphic16";
import { SubtleSkeuomorphic17 } from "./buttons-gallery/SubtleSkeuomorphic17";

export const Button1 = () => {
  return (
    <div className="flex gap-3">
      <button className="group h-8 select-none rounded-full bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-4 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>

      <button className="group select-none rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 p-1 px-6 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_1.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
        <span className="block group-active:[transform:translate3d(0,1px,0)]">
          Click me
        </span>
      </button>
    </div>
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
      <div className="buttons flex flex-wrap gap-4">
        <Shadow1 />
        <Shadow2 />
        <Shadow3 />
        <Shadow4 />
      </div>
      <div className="letters buttons flex flex-wrap gap-4">
        <Letters1 />
        <Letters2 />
        <Letters3 />
        <Letters4 />
      </div>
      <div className="links buttons flex flex-wrap gap-4">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
      </div>
      <div className="skeuomorphic buttons flex flex-wrap gap-4">
        <SubtleSkeuomorphic1 />
        <SubtleSkeuomorphic2 />
        <SubtleSkeuomorphic3 />
        <SubtleSkeuomorphic4 />
        <SubtleSkeuomorphic5 />
        <SubtleSkeuomorphic6 />
        <SubtleSkeuomorphic7 />
        <SubtleSkeuomorphic8 />
        <SubtleSkeuomorphic9 />
        <SubtleSkeuomorphic10 />
        <SubtleSkeuomorphic11 />
        <SubtleSkeuomorphic12 />
        <SubtleSkeuomorphic13 />
        <SubtleSkeuomorphic14 />
        <SubtleSkeuomorphic15 />
        <SubtleSkeuomorphic16 />
        <SubtleSkeuomorphic17 />
      </div>
    </div>
  );
}
