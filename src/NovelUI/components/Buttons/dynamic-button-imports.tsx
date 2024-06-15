import React from "react";

const buttonComponents = [
  "Black1",
  "Black2",
  "Black3",
  "Black4",
  "Black5",
  "Black6",
  "Black7",
  "Black8",
  "Black9",
  "Black10",
  "Black11",
  "Black12",
  "Black13",
  "Black14",
];

export default function DynamicButtons() {
  return (
    <div className="space-y-7 border border-dashed border-red-500">
      <div className="black buttons flex flex-wrap gap-4">
        {buttonComponents.map((ButtonName, index) => {
          const ButtonComponent = React.lazy(
            () => import(`./buttons-gallery/${ButtonName}`),
          );
          return (
            <React.Suspense fallback={<div>Loading...</div>} key={index}>
              <ButtonComponent />
            </React.Suspense>
          );
        })}
      </div>
    </div>
  );
}
