import { Icon } from "@/components/Icons";

type Props = {
  label?: string;
  caption?: string;
  compact?: boolean;
};

export default function WaterBottleVisual({
  label = "YOUR BRAND",
  caption = "500 ml · CUSTOM LABEL",
  compact = false,
}: Props) {
  return (
    <div className={compact ? "water-product-stage is-compact" : "water-product-stage"} aria-label="Stylised animated water bottle illustration">
      <div className="water-stage-halo" />
      <span className="water-stage-ring water-stage-ring-one" />
      <span className="water-stage-ring water-stage-ring-two" />
      <span className="water-stage-spark water-stage-spark-one" />
      <span className="water-stage-spark water-stage-spark-two" />
      <div className="water-bottle-art">
        <span className="water-bottle-cap" />
        <span className="water-bottle-neck" />
        <span className="water-bottle-shoulder" />
        <span className="water-bottle-body">
          <span className="water-bottle-water" />
          <span className="water-bottle-waterline" />
          <span className="water-bottle-glint" />
          <span className="water-bottle-label">
            <Icon name="droplet" size={compact ? 18 : 23} />
            <strong>{label}</strong>
            <small>PURE PRESENTATION</small>
          </span>
          <span className="water-bottle-volume">500 ml</span>
        </span>
        <span className="water-bottle-base" />
      </div>
      <div className="water-stage-caption">
        <span>{caption}</span>
        <i />
      </div>
    </div>
  );
}
