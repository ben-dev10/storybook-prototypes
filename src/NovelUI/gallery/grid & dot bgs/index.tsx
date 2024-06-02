export function Grids() {
  return (
    <div
      className="h-[20rem] bg-[#f8f8f8] w-full dark:bg-black dark:bg-grid-white/[0.2] 
    bg-grid-black/[0.2] relative flex items-center justify-center"
    >
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center
       dark:bg-black bg-[#f8f8f8] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      ></div>
      <p
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent 
      bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
      >
        Grid Backgrounds
      </p>
    </div>
  );
}

// TODO: make more robust variants! delete Grids component

interface GridDotProp {
  type: "grid" | "dot";
}

export function GridAndDots({ type }: GridDotProp) {
  let variant;
  if (type == "grid") {
    variant = "bg-grid-black/[0.2]";
  } else {
    variant = "bg-dot-black/[0.2]";
  }
  return (
    <div
      className={`h-[20rem] bg-[#f8f8f8] w-full dark:bg-black relative flex items-center justify-center 
      ${variant} `}
      // dark:bg-grid-white/[0.2] bg-grid-black/[0.2] "
    >
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center
       dark:bg-black bg-[#f8f8f8] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"
      ></div>
      <p
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent 
      bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
      >
        Grid Backgrounds
      </p>
    </div>
  );
}
