export function Grids() {
  return (
    <div className="relative flex h-[20rem] w-full items-center justify-center bg-[#f8f8f8] bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#f8f8f8] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Grid Backgrounds
      </p>
    </div>
  );
}

// TODO: make more robust variants! delete Grids component

interface GridDotProp {
  type: "grid" | "dot";
}

export default function GridAndDots({ type }: GridDotProp) {
  let variant;
  if (type == "grid") {
    variant = "bg-grid-black/[0.2]";
  } else {
    variant = "bg-dot-black/[0.2]";
  }
  return (
    <div
      className={`relative flex h-[20rem] w-full items-center justify-center !bg-[#fff] dark:bg-black ${variant} `}
      // dark:bg-grid-white/[0.2] bg-grid-black/[0.2] "
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center !bg-[#fff] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Grid Backgrounds
      </p>
    </div>
  );
}
