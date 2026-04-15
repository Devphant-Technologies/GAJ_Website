const shapes = [
  // Left side — large gear
  {
    type: "gear",
    size: 180,
    x: "-6%",
    y: "10%",
    color: "#2E3A63",
    opacity: 0.07,
    duration: 28,
    delay: 0,
  },
  // Left side — small hex
  {
    type: "hex",
    size: 70,
    x: "2%",
    y: "60%",
    color: "#5FA6B3",
    opacity: 0.09,
    duration: 20,
    delay: 4,
  },
  // Left side — nut
  {
    type: "nut",
    size: 90,
    x: "-2%",
    y: "80%",
    color: "#8FC5CF",
    opacity: 0.08,
    duration: 35,
    delay: 2,
  },
  // Right side — large gear
  {
    type: "gear",
    size: 220,
    x: "92%",
    y: "5%",
    color: "#5FA6B3",
    opacity: 0.07,
    duration: 40,
    delay: 6,
  },
  // Right side — medium circle ring
  {
    type: "ring",
    size: 110,
    x: "88%",
    y: "55%",
    color: "#2E3A63",
    opacity: 0.08,
    duration: 22,
    delay: 1,
  },
  // Right side — small nut
  {
    type: "nut",
    size: 60,
    x: "94%",
    y: "78%",
    color: "#8FC5CF",
    opacity: 0.1,
    duration: 18,
    delay: 8,
  },
  // Top center-left — tiny hex
  {
    type: "hex",
    size: 45,
    x: "20%",
    y: "5%",
    color: "#5FA6B3",
    opacity: 0.06,
    duration: 25,
    delay: 3,
  },
  // Bottom center-right — small ring
  {
    type: "ring",
    size: 80,
    x: "75%",
    y: "88%",
    color: "#2E3A63",
    opacity: 0.07,
    duration: 30,
    delay: 5,
  },
];

// SVG paths for each shape type
const GearSVG = ({ size, color, opacity }: { size: number; color: string; opacity: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <path
      d="M43.3 5.8l-2.1 7.9a35 35 0 00-8.5 3.5l-7.5-3.5-9.4 9.4 3.5 7.5a35 35 0 00-3.5 8.5l-7.9 2.1v13.3l7.9 2.1a35 35 0 003.5 8.5l-3.5 7.5 9.4 9.4 7.5-3.5a35 35 0 008.5 3.5l2.1 7.9h13.3l2.1-7.9a35 35 0 008.5-3.5l7.5 3.5 9.4-9.4-3.5-7.5a35 35 0 003.5-8.5l7.9-2.1V43.3l-7.9-2.1a35 35 0 00-3.5-8.5l3.5-7.5-9.4-9.4-7.5 3.5a35 35 0 00-8.5-3.5l-2.1-7.9H43.3z"
      stroke={color}
      strokeWidth="4"
      fill="none"
    />
    <circle cx="50" cy="50" r="16" stroke={color} strokeWidth="4" fill="none" />
    <circle cx="50" cy="50" r="6" fill={color} />
  </svg>
);

const HexSVG = ({ size, color, opacity }: { size: number; color: string; opacity: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      stroke={color}
      strokeWidth="5"
      fill="none"
    />
    <polygon
      points="50,20 78,35 78,65 50,80 22,65 22,35"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

const NutSVG = ({ size, color, opacity }: { size: number; color: string; opacity: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <polygon
      points="50,4 93,27 93,73 50,96 7,73 7,27"
      stroke={color}
      strokeWidth="5"
      fill="none"
    />
    <circle cx="50" cy="50" r="20" stroke={color} strokeWidth="4" fill="none" />
    <circle cx="50" cy="50" r="8" stroke={color} strokeWidth="3" fill="none" />
  </svg>
);

const RingSVG = ({ size, color, opacity }: { size: number; color: string; opacity: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="5" fill="none" strokeDasharray="12 6" />
    <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="3" fill="none" />
    <circle cx="50" cy="50" r="10" stroke={color} strokeWidth="4" fill="none" />
  </svg>
);

const ShapeComponent = ({ shape }: { shape: typeof shapes[0] }) => {
  const style: React.CSSProperties = {
    position: "absolute",
    left: shape.x,
    top: shape.y,
    animation: `spin-${shape.type === "gear" || shape.type === "nut" ? "slow" : "float"} ${shape.duration}s linear infinite`,
    animationDelay: `${shape.delay}s`,
    pointerEvents: "none",
    zIndex: 0,
  };

  const props = { size: shape.size, color: shape.color, opacity: shape.opacity };

  return (
    <div style={style}>
      {shape.type === "gear" && <GearSVG {...props} />}
      {shape.type === "hex" && <HexSVG {...props} />}
      {shape.type === "nut" && <NutSVG {...props} />}
      {shape.type === "ring" && <RingSVG {...props} />}
    </div>
  );
};

const AnimatedBackground = () => (
  <>
    <style>{`
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-12px) rotate(8deg); }
        66% { transform: translateY(8px) rotate(-5deg); }
      }
    `}</style>
    {shapes.map((shape, i) => (
      <ShapeComponent key={i} shape={shape} />
    ))}
  </>
);

export default AnimatedBackground;
