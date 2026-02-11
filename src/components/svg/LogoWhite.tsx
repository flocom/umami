import type { SVGProps } from 'react';

const SvgLogoWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <image href="/logo.png" width={20} height={20} preserveAspectRatio="xMidYMid meet" />
  </svg>
);
export default SvgLogoWhite;
