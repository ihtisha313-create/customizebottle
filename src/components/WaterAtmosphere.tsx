export default function WaterAtmosphere() {
  return (
    <div className="water-world" aria-hidden="true">
      <div className="water-world-glow" />
      <div className="water-world-caustics" />
      <div className="water-world-ripples water-world-ripples-one" />
      <div className="water-world-ripples water-world-ripples-two" />
      <svg className="water-world-waves" viewBox="0 0 1440 240" preserveAspectRatio="none">
        <path className="water-world-wave water-world-wave-back" d="M0 115 C160 54 270 182 440 122 S735 60 900 119 1200 185 1440 91 V240 H0Z" />
        <path className="water-world-wave water-world-wave-front" d="M0 148 C180 205 290 80 470 140 S760 220 940 145 1240 75 1440 154 V240 H0Z" />
      </svg>
    </div>
  );
}
