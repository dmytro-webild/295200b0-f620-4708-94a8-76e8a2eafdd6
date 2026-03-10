import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  fill?: string;
  strokeWidth?: number;
  stroke?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 700,
  letterSpacing = 0,
  fill = 'currentColor',
  strokeWidth = 0,
  stroke = 'none',
}) => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 400, height: 200 });

  React.useEffect(() => {
    if (svgRef.current) {
      const bbox = svgRef.current.getBBox();
      setDimensions({
        width: bbox.width + 20,
        height: bbox.height + 20,
      });
    }
  }, [text]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y={fontSize + 10}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        dominantBaseline="hanging"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
