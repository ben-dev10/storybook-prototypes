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
      <div className="test-bay bg-gray-100 p-[50px]">
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

export default function TestBay() {
  return (
    <div>
      <GradientBorder1 />
      {/* <DubcoGradient /> */}
    </div>
  );
}
