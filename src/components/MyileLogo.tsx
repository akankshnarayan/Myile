import React from "react";

interface MyileLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "auto";
}

export const MyileLogo: React.FC<MyileLogoProps> = ({
  className = "",
  showText = true,
  size = "auto"
}) => {
  // Spacing and dimensions based on sizes
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-24 h-24",
    lg: "w-48 h-48",
    xl: "w-72 h-72",
    auto: "w-full h-full"
  };

  const selectedSizeClass = sizeClasses[size];

  // Feathers data: angle, paddle body color, and central rib quill color
  const feathersData = [
    { angle: -80, bodyColor: "#D1F4EF", quillColor: "#96E5D9" },
    { angle: -60, bodyColor: "#A6EEE1", quillColor: "#76D3C4" },
    { angle: -40, bodyColor: "#76D3C4", quillColor: "#3BAEA3" },
    { angle: -20, bodyColor: "#3BAEA3", quillColor: "#0A5C56" },
    { angle: 0,   bodyColor: "#035A56", quillColor: "#01413E" },
    { angle: 20,  bodyColor: "#3BAEA3", quillColor: "#0A5C56" },
    { angle: 40,  bodyColor: "#76D3C4", quillColor: "#3BAEA3" },
    { angle: 60,  bodyColor: "#A6EEE1", quillColor: "#76D3C4" },
    { angle: 80,  bodyColor: "#D1F4EF", quillColor: "#96E5D9" }
  ];

  return (
    <div className={`flex flex-col items-center justify-center ${selectedSizeClass} ${className}`} id="myile-custom-logo-wrapper">
      <svg
        viewBox={showText ? "0 0 200 215" : "0 0 200 162"}
        className="w-full h-full select-none"
        xmlns="http://www.w3.org/2000/svg"
        id="myile-brand-logo-vector"
      >
        {/* Background is transparent to fit both light & dark themes seamlessly */}
        
        {/* 1. FANNING TAIL FEATHERS */}
        <g id="peacock-tail-feathers">
          {feathersData.map((feather, index) => (
            <g
              key={index}
              transform={`rotate(${feather.angle}, 100, 118)`}
              id={`feather-group-${index}`}
            >
              {/* Back Quill Support Line */}
              <line
                x1="100"
                y1="118"
                x2="100"
                y2="35"
                stroke={feather.quillColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />
              
              {/* Slender Leaf Paddle Body */}
              <path
                d="M 100 98 C 95 84, 94.5 56, 100 42 C 105.5 56, 105 84, 100 98 Z"
                fill={feather.bodyColor}
              />
              
              {/* Foreground Quill Line (cuts through the leaf paddle) */}
              <line
                x1="100"
                y1="118"
                x2="100"
                y2="40"
                stroke={feather.quillColor}
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              
              {/* Golden Diamond Arrowhead Tip */}
              <polygon
                points="100,24 103.5,31 100,38 96.5,31"
                fill="#D4A343"
              />
            </g>
          ))}
        </g>

        {/* 2. PEACOCK LEGS */}
        <g id="peacock-legs">
          {/* Left Leg */}
          <line x1="96" y1="134" x2="94" y2="152" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="94" y1="152" x2="90" y2="156" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="94" y1="152" x2="94" y2="158" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="94" y1="152" x2="98" y2="156" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />

          {/* Right Leg */}
          <line x1="104" y1="134" x2="106" y2="152" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="106" y1="152" x2="102" y2="156" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="106" y1="152" x2="106" y2="158" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="106" y1="152" x2="110" y2="156" stroke="#0C468A" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* 3. PEACOCK DEEP BLUE BODY */}
        <g id="peacock-main-body">
          <ellipse cx="100" cy="118" rx="14.5" ry="22" fill="#0C468A" />
        </g>

        {/* 4. PEACOCK TEAL NECK & HEAD */}
        <g id="peacock-neck-head">
          {/* Seamless Neck Segment */}
          <path d="M 96 110 L 96 84 C 96 84, 104 84, 104 84 L 104 110 Z" fill="#035A56" />
          {/* Rounded Head circle */}
          <circle cx="100" cy="82" r="10.8" fill="#035A56" />
        </g>

        {/* 5. GOLDEN CROWN / CREST */}
        <g id="peacock-crown">
          {/* Stems */}
          <line x1="100" y1="72" x2="100" y2="62" stroke="#D4A343" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="98" y1="72.5" x2="94.5" y2="64.5" stroke="#D4A343" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="102" y1="72.5" x2="105.5" y2="64.5" stroke="#D4A343" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Diamond Tips */}
          <polygon points="100,57 102.5,60.5 100,64 97.5,60.5" fill="#D4A343" />
          <polygon points="94.5,59.5 97,63 94.5,66.5 92,63" fill="#D4A343" />
          <polygon points="105.5,59.5 108,63 105.5,66.5 103,63" fill="#D4A343" />
        </g>

        {/* 6. FACIAL DETAILS (BEAK & EYE) */}
        <g id="peacock-face">
          {/* Golden Yellow Beak */}
          <polygon points="109,79.5 116.5,82 109,84.5" fill="#D4A343" />
          {/* White Sclera */}
          <circle cx="104.5" cy="80.5" r="2.4" fill="#FFFFFF" />
          {/* Dark Blue Pupil */}
          <circle cx="105.2" cy="80.5" r="1.2" fill="#0C468A" />
        </g>

        {/* 7. WORDMARK BRANDING */}
        {showText && (
          <g id="myile-text-branding">
            {/* Left accent line */}
            <line x1="28" y1="172" x2="44" y2="172" stroke="#D4A343" strokeWidth="1" opacity="0.4" />
            
            {/* "MYILE" Wordmark */}
            <text
              x="100"
              y="178"
              textAnchor="middle"
              fill="#5EAFE1"
              fontSize="24"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontWeight="bold"
              letterSpacing="2"
              className="tracking-widest"
            >
              MYILE
            </text>

            {/* Right accent line */}
            <line x1="156" y1="172" x2="172" y2="172" stroke="#D4A343" strokeWidth="1" opacity="0.4" />

            {/* "WITH YOU TILL THE LAST MILE." tagline */}
            <text
              x="100"
              y="194"
              textAnchor="middle"
              fill="#5EAFE1"
              fontSize="8"
              fontFamily="'Inter', 'Helvetica Neue', sans-serif"
              fontWeight="600"
              letterSpacing="0.5"
            >
              WITH YOU TILL THE LAST MILE.
            </text>

            {/* "For you, the extra mile." sub-tagline */}
            <text
              x="100"
              y="207"
              textAnchor="middle"
              fill="#C18C41"
              fontSize="7.5"
              fontFamily="'Inter', sans-serif"
              fontStyle="italic"
              fontWeight="500"
            >
              For you, the extra mile.
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
