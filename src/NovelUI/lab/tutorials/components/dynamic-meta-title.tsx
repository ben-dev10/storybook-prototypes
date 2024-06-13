import usePageVisibility from "@/utils/hooks/usePageVisibility";
export default function DynamicMetaTitle() {
  usePageVisibility();
  return (
    <div>
      <h1 className="text-lg font-bold">Dynamic Meta Title</h1>
      <p className="text-[13px] text-gray-500">
        To see the effect, click on "Open Canvas in new tab" options at the top
        bar
      </p>
    </div>
  );
}
