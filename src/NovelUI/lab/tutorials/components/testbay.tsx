import "../testbay.css";

export const DubcoGradient = () => {
  return (
    <div>
      <div className="r1"></div>
      <div className="r2"></div>
      <div className="r3"></div>
    </div>
  );
};

export const GradientBorder1 = () => {
  return (
    <div>
      <style>
        {`
          .test-bay{
            color:gray;
          }
        `}
      </style>
      <div className="test-bay relative min-h-[350px] bg-gradient-to-b from-gray-100 to-white p-[50px]">
        <div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg className="absolute inset-0 h-full w-full">
            <defs>
              <pattern
                id="grid-pattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>
        <div className="gradient-box relative aspect-[2/1] w-[200px] rounded-sm border-[#2323] bg-gray-300 p-3 shadow-md shadow-blue-200">
          <>
            <div className="absolute bottom-[100%] right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div className="-mb-px flex h-[3px] w-[70px] -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </>
          hello
        </div>
      </div>
    </div>
  );
};

export const FeatherNav = () => {
  return (
    <>
      <header className="relative">
        <div className="bg-conic-gradient absolute inset-0 opacity-20 blur"></div>
        <nav className="relative flex justify-between bg-[#fafafa] p-2 text-12px">
          <p className="">Logo</p>
          <div className="flex items-center gap-2 text-accent">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Services</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default function TestBay() {
  return (
    <div className="">
      <FeatherNav />
      <GradientBorder1 />
      {/* <DubcoGradient /> */}
    </div>
  );
}
