import { useId } from "react";

type Props = {
  label?: string;
  caption?: string;
  compact?: boolean;
};

const bottlePath = "M145 145H235V177C235 194 245 205 262 217C283 232 293 255 293 281V600C293 635 269 660 235 665H145C111 660 87 635 87 600V281C87 255 97 232 118 217C135 205 145 194 145 177Z";

export default function WaterBottleVisual({
  label = "APNAAB",
  caption = "500 ML · CUSTOM-LABELLED WATER",
  compact = false,
}: Props) {
  const id = useId().replace(/:/g, "");
  const pet = `${id}-pet`;
  const water = `${id}-water`;
  const cap = `${id}-cap`;
  const labelFill = `${id}-label`;
  const clip = `${id}-clip`;

  return (
    <div className={compact ? "water-product-stage apnaab-product-stage is-compact" : "water-product-stage apnaab-product-stage"} role="img" aria-label="APNAAB realistic clear 500 millilitre PET drinking-water bottle illustration">
      <span className="apnaab-stage-halo" aria-hidden="true" />
      <svg className="apnaab-bottle-svg" viewBox="0 0 380 710" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={pet} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#dffaff" stopOpacity=".72"/>
            <stop offset=".12" stopColor="#8ad2df" stopOpacity=".16"/>
            <stop offset=".32" stopColor="#f5ffff" stopOpacity=".54"/>
            <stop offset=".56" stopColor="#72bed0" stopOpacity=".12"/>
            <stop offset=".82" stopColor="#eaffff" stopOpacity=".42"/>
            <stop offset="1" stopColor="#8ac9d7" stopOpacity=".24"/>
          </linearGradient>
          <linearGradient id={water} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8ee9ec" stopOpacity=".62"/>
            <stop offset=".42" stopColor="#31b7d0" stopOpacity=".52"/>
            <stop offset="1" stopColor="#0a6387" stopOpacity=".72"/>
          </linearGradient>
          <linearGradient id={cap} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#063b50"/>
            <stop offset=".2" stopColor="#116d80"/>
            <stop offset=".5" stopColor="#0a536d"/>
            <stop offset=".82" stopColor="#0b3c52"/>
            <stop offset="1" stopColor="#062e43"/>
          </linearGradient>
          <linearGradient id={labelFill} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff"/>
            <stop offset=".58" stopColor="#e9f9fb"/>
            <stop offset="1" stopColor="#ccecf0"/>
          </linearGradient>
          <clipPath id={clip}><path d={bottlePath}/></clipPath>
        </defs>

        <ellipse cx="190" cy="681" rx="105" ry="16" fill="#00374d" opacity=".18"/>
        <path d={bottlePath} fill={`url(#${pet})`} stroke="#efffff" strokeWidth="5"/>
        <path d="M145 145H235V177C235 194 245 205 262 217C283 232 293 255 293 281V600C293 635 269 660 235 665H145C111 660 87 635 87 600V281C87 255 97 232 118 217C135 205 145 194 145 177Z" fill="none" stroke="#75c1d2" strokeOpacity=".52" strokeWidth="2"/>

        <g clipPath={`url(#${clip})`}>
          <path d="M86 385C135 369 235 403 294 381V680H86Z" fill={`url(#${water})`}/>
          <path className="apnaab-water-surface" d="M86 385C135 369 235 403 294 381" fill="none" stroke="#e0ffff" strokeOpacity=".95" strokeWidth="4"/>
          <path d="M87 413C144 397 237 429 293 407" fill="none" stroke="#d8ffff" strokeOpacity=".3" strokeWidth="2"/>
          <path d="M92 515H288M92 529H288M92 544H288" stroke="#eaffff" strokeOpacity=".14" strokeWidth="2"/>
          <circle cx="124" cy="490" r="4" fill="#e5ffff" opacity=".44"/>
          <circle cx="257" cy="473" r="3" fill="#e5ffff" opacity=".5"/>
          <circle cx="145" cy="554" r="2.5" fill="#e5ffff" opacity=".42"/>
        </g>

        <path d="M105 270C105 243 117 227 140 211C158 198 168 184 168 164V145" fill="none" stroke="#ffffff" strokeOpacity=".78" strokeWidth="5" strokeLinecap="round"/>
        <path d="M276 276C276 248 264 229 244 215C227 203 213 190 213 164V145" fill="none" stroke="#64b6c9" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round"/>
        <path d="M109 285V590C109 615 120 636 142 645" fill="none" stroke="#ffffff" strokeOpacity=".72" strokeWidth="8" strokeLinecap="round"/>
        <path d="M272 290V596C272 620 260 639 241 648" fill="none" stroke="#ffffff" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round"/>

        <path d="M90 583C122 595 258 595 290 583M91 600C125 613 255 613 289 600M101 622C137 635 243 635 279 622" fill="none" stroke="#eaffff" strokeOpacity=".32" strokeWidth="3"/>
        <path d="M110 642C133 661 247 661 270 642" fill="none" stroke="#f4ffff" strokeOpacity=".8" strokeWidth="4"/>

        <path d="M144 142H236V177H144Z" fill="#d9f5f7" fillOpacity=".45" stroke="#eaffff" strokeOpacity=".74" strokeWidth="3"/>
        <path d="M159 136V176M221 136V176" stroke="#ffffff" strokeOpacity=".45" strokeWidth="3"/>
        <rect x="151" y="37" width="78" height="62" rx="12" fill={`url(#${cap})`} stroke="#b9e8ef" strokeWidth="3"/>
        {Array.from({length: 12}, (_, i) => <path key={i} d={`M${158 + i * 5.6} 43V91`} stroke="#c5f4f6" strokeOpacity=".3" strokeWidth="1.6"/> )}
        <rect x="151" y="94" width="78" height="13" rx="4" fill="#0c536a" stroke="#d9f7f8" strokeOpacity=".65" strokeWidth="2"/>
        <path d="M159 107H221V143H159Z" fill={`url(#${pet})`} stroke="#eaffff" strokeOpacity=".7" strokeWidth="2"/>
        <path d="M165 112V138M215 112V138" stroke="#ffffff" strokeOpacity=".5" strokeWidth="2"/>

        <rect x="98" y="319" width="184" height="139" rx="10" fill={`url(#${labelFill})`} stroke="#ffffff" strokeWidth="4"/>
        <rect x="105" y="326" width="170" height="125" rx="7" fill="none" stroke="#0b7d91" strokeOpacity=".22" strokeWidth="1.5"/>
        <path d="M113 344H267" stroke="#12a5ab" strokeOpacity=".26" strokeWidth="2"/>
        <image href="/apnaab-symbol.svg" x="170" y="344" width="40" height="31" preserveAspectRatio="xMidYMid meet"/>
        <text x="190" y="405" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="800" letterSpacing="1.2" fill="#073a50">{label}</text>
        <text x="190" y="426" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="800" letterSpacing="2.2" fill="#087e8b">CUSTOM DRINKING WATER</text>
        <path d="M135 438H245" stroke="#0e9fa7" strokeOpacity=".45" strokeWidth="1.5"/>
        <text x="190" y="448" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="700" letterSpacing="1.4" fill="#527987">YOUR IDENTITY · YOUR LABEL</text>
        <text x="260" y="623" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="800" fill="#efffff" stroke="#0b5975" strokeOpacity=".34" strokeWidth=".6">500 ml</text>
      </svg>
      <div className="water-stage-caption"><span>{caption}</span><i /></div>
    </div>
  );
}
