import { useEffect, useRef } from "react";
import { FaBehance, FaDollarSign, FaPaypal, FaStripeS } from "react-icons/fa6";

export const Icon = () => {
  return <div></div>;
};

export default function MagicTooltip() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      const logos = cardRef.current.querySelectorAll(".tooltipLogo");
      console.log(logos);

      logos.forEach((logo, index) => {
        logo.addEventListener("mouseenter", () => {
          const name = logo.getAttribute("id");
          tooltipRef.current.textContent = name;

          let newPosition =
            logo.getBoundingClientRect().left -
            logo.parentNode.getBoundingClientRect().left;
          console.log(logo.parentNode.getBoundingClientRect().left);

          if (index === 0) {
            tooltipRef.current.style.transform = "translateX(0%)";
          } else if (index === logos.length - 1) {
            newPosition += logo.offsetWidth;
            tooltipRef.current.style.transform = "translateX(-100%)";
          } else {
            newPosition += logo.offsetWidth / 2;
            tooltipRef.current.style.transform = "translateX(50%)";
          }

          tooltipRef.current.style.left = newPosition + "px";

          const color = logo.getAttribute("tooltipLogo");
          tooltipRef.current.style.backgroundColor = `color-mix(in srgb, ${color} 20%, white)`;
          tooltipRef.current.style.color = color;
        });
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="toolTipWrapper rounded-[24px] border-[3px] p-4"
    >
      <p
        ref={tooltipRef}
        className="tooltipText mb-3 max-w-max rounded-lg bg-gray-200 p-2 text-[14px] text-gray-500"
      >
        Follower
      </p>
      <div className="iconGroup flex gap-3">
        <div
          id="Stripe"
          className="tooltipLogo rounded-xl bg-purple-600 p-2 text-white"
        >
          <FaStripeS size={30} />
        </div>
        <div
          id="Paypal"
          className="tooltipLogo rounded-xl bg-blue-600 p-2 text-white"
        >
          <FaPaypal size={30} />
        </div>
        <div
          id="Money"
          className="tooltipLogo rounded-xl bg-green-600 p-2 text-white"
        >
          <FaDollarSign size={30} />
        </div>
        <div
          id="Behance"
          className="tooltipLogo rounded-xl bg-black p-2 text-white"
        >
          <FaBehance size={30} />
        </div>
      </div>
    </div>
  );
}
