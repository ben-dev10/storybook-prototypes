import usePageVisibility from "@/utils/hooks/usePageVisibility";
export default function DynamicMetaTitle() {
  usePageVisibility();
  return (
    <div>
      <b>Dynamic Meta Title</b>
    </div>
  );
}
