import { FaBehance, FaDollarSign, FaPaypal, FaStripeS } from "react-icons/fa6";

export const Icon = () => {
  return <div></div>;
};

export default function MagicTooltip() {
  return (
    <div className="rounded-[24px] border-[3px] p-4">
      <p className="mb-3 max-w-max rounded-lg bg-gray-200 p-2 text-[14px] text-gray-500">
        Follower
      </p>
      <div className="flex gap-3">
        <div className="rounded-xl bg-purple-600 p-2 text-white">
          <FaStripeS size={30} />
        </div>
        <div className="rounded-xl bg-blue-600 p-2 text-white">
          <FaPaypal size={30} />
        </div>
        <div className="rounded-xl bg-green-600 p-2 text-white">
          <FaDollarSign size={30} />
        </div>
        <div className="rounded-xl bg-black p-2 text-white">
          <FaBehance size={30} />
        </div>
      </div>
    </div>
  );
}
