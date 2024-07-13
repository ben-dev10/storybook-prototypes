import "./styles/css-filters.css";

const FILTERS = [
  "blur",
  "brightness",
  "contrast",
  "sepia",
  "saturate",
  "opacity",
  "invert",
  "grayscale",
  "drop-shadow",
];

export default function CSSFilters() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {FILTERS.map((classes, index) => (
        <div
          key={`${index}`}
          className={`${classes} filter-box size-20 bg-blue-500`}
        />
      ))}
    </div>
  );
}
