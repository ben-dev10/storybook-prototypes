import "@/utils/styles/themeTokens.css"
import {gradientText} from "@/utils/ui-helpers"

export const BentoContent1 = () => {
  return <div>
    
    <div className="w-[60%]">
      <p className="text-[12px] text-accent  mb-2">Quick facts</p>
      <p>My name is Bernard and I'm Ghanian 🎌, <span style={gradientText("linear-gradient(to right, blue, black)")}>Akwaaba</span></p>
    </div>
    
    
    </div>;
};
export const BentoContent2 = () => {
  return <div>BentoContent 2</div>;
};
export const BentoContent3 = () => {
  return <div>BentoContent 3</div>;
};
export const BentoContent4 = () => {
  return <div className="bg-black/80 text-white h-full p-4">BentoContent 4</div>;
};
export const BentoContent5 = () => {
  return <div className="">BentoContent 5</div>;
};

export default function VercelBento() {
  return (
    <div className="wrapper bg-gray-50 p-10 ">
      <div className="relative mx-auto max-w-[550px] bg-white grid grid-cols-3 grid-rows-3 border border-gray-300 text-[13px]">
        <>
          <img
            className="plus-1 absolute -left-[5px] -top-[5px]"
            src="plus.svg"
            alt="plus"
          />
          <img
            className="plus-2 absolute -right-[6px] -top-[5px]"
            src="plus.svg"
            alt="plus"
          />
        </>
        <div className="1 col-span-3 border-b border-gray-300 p-2">
          <BentoContent1 />
        </div>
        <div className="2-1 mini:col-span-1 mini:border-r relative col-span-3 border-b border-gray-300 p-3">
          <>
            <img
              className="plus-3 mini:block absolute -right-[5.5px] -top-[4.8px] hidden"
              src="plus.svg"
              alt="plus"
            />
            <img
              className="plus-4 mini:block absolute -bottom-[6.5px] -right-[6px] hidden"
              src="plus.svg"
              alt="plus"
            />
          </>
          <BentoContent2 />
        </div>
        <div className="2-2 mini:border-b mini:col-span-2 col-span-3 border-gray-300 p-3">
          <BentoContent3 />
        </div>
        <div className="3-1 mini:col-span-2 mini:border-b-0 mini:border-t-0 mini:border-r col-span-3 border-b border-t border-gray-300">
          <BentoContent4 />
        </div>
        <div className="3-2 mini:col-span-1 relative col-span-3 p-3">
          <img
            className="plus-5 mini:block absolute -left-[5.7px] -top-[5px] hidden"
            src="plus.svg"
            alt="plus"
          />
          <BentoContent5 />
        </div>
        <>
          <img
            className="plus-6 absolute -bottom-[6.5px] -left-[5px]"
            src="plus.svg"
            alt="plus"
          />
          <img
            className="plus-7 absolute -bottom-[6.5px] -right-[6px]"
            src="plus.svg"
            alt="plus"
          />
        </>
      </div>
    </div>
  );
}
