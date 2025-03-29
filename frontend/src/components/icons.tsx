import { IconSvgProps } from "@/types";
import { SVGProps } from "react";

interface OnlyChambasLogoProps extends SVGProps<SVGSVGElement> {
  primaryColor?: string;
  secondaryColor?: string;
}

export const Logo: React.FC<IconSvgProps> = ({ size = 36, width, height, ...props }) => (
  <svg
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 331.89584 258.22772"
    width="36"
    height="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="layer1" transform="translate(0,-5.174602)">
      <path
        id="path5"
        fill="#ff8810"
        d="M 125,13.404297 A 124.99982,124.99982 0 0 0 0,138.40234 a 124.99982,124.99982 0 0 0 125,125 124.99982,124.99982 0 0 0 125,-125 A 124.99982,124.99982 0 0 0 125,13.404297 Z m 0,87.501953 a 37.499931,37.499931 0 0 1 37.5,37.5 37.499931,37.499931 0 0 1 -37.5,37.5 37.499931,37.499931 0 0 1 -37.5,-37.5 37.499931,37.499931 0 0 1 37.5,-37.5 z"
      />
    </g>
    <g fill="#ffa430" id="g5" transform="matrix(-0.28930596,-0.42967053,0.42967053,-0.28930596,138.22125,281.284)">
      <g id="g2-1" fill="#ffa430" transform="rotate(12.283331,162.60807,238.83371)">
        <g id="g1" fill={"#ffa430"}>
          <path
            d="M 39.092692,-36.58054 173.79554,311.94268 108.3442,337.23954 c -7.50263,2.90075 -11.234041,11.33366 -8.33553,18.83814 l 41.95831,108.55994 c 18.71701,48.4271 60.67742,84.08828 111.48874,94.75493 l 41.78391,8.77065 c 7.11425,1.49318 14.4408,-1.33852 18.70213,-7.22932 l 25.02431,-34.59196 c 30.43296,-42.06649 37.50075,-96.67895 18.78307,-145.10777 L 315.79084,272.6742 c -2.89904,-7.5033 -11.33365,-11.23405 -18.83813,-8.33554 L 231.50138,289.63553 96.816319,-58.841676 Z"
            id="path1-7"
            fill="#ffa430"
          />
        </g>
      </g>
    </g>
  </svg>
);

const OnlyChambasLogo = ({ primaryColor = "#ff8810", secondaryColor = "#ffa430", ...props }: OnlyChambasLogoProps) => (
  <svg
    id="Layer_1"
    x={0}
    y={0}
    height={32}
    width={128}
    xmlSpace="preserve"
    viewBox="0 0 2122.878 287.584"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="layer1"
      style={{
        display: "inline",
      }}
      transform="translate(0 -4.179)"
    >
      <path
        id="path5"
        style={{
          display: "inline",
          fill: primaryColor,
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.00424,
          strokeLinejoin: "round",
          strokeDasharray: "7.05837,7.05837",
          strokeDashoffset: 8.82297,
          paintOrder: "stroke fill markers",
        }}
        d="M125 13.404A125 125 0 0 0 0 138.402a125 125 0 0 0 125 125 125 125 0 0 0 125-125A125 125 0 0 0 125 13.404Zm0 87.502a37.5 37.5 0 0 1 37.5 37.5 37.5 37.5 0 0 1-37.5 37.5 37.5 37.5 0 0 1-37.5-37.5 37.5 37.5 0 0 1 37.5-37.5z"
      />
    </g>
    <g
      style={{
        display: "inline",
        fill: secondaryColor,
        fillOpacity: 1,
        stroke: "none",
        strokeOpacity: 1,
      }}
      id="g5"
      transform="rotate(-123.953 144.23 104.357) scale(.51799)"
    >
      <g
        id="g2-1"
        style={{
          fill: secondaryColor,
          fillOpacity: 1,
          stroke: "none",
          strokeOpacity: 1,
        }}
        transform="rotate(12.283 162.608 238.834)"
      >
        <g
          id="g1"
          style={{
            fill: secondaryColor,
            fillOpacity: 1,
            stroke: "none",
            strokeOpacity: 1,
          }}
        >
          <path
            d="m39.093-36.58 134.703 348.523-65.452 25.297c-7.502 2.9-11.234 11.333-8.335 18.838l41.958 108.56c18.717 48.427 60.677 84.088 111.489 94.755l41.784 8.77a18.413 18.413 0 0 0 18.702-7.23l25.024-34.591c30.433-42.067 37.5-96.679 18.783-145.108l-41.958-108.56c-2.9-7.503-11.334-11.234-18.838-8.335L231.5 289.636 96.816-58.842Z"
            id="path1-7"
            style={{
              fill: secondaryColor,
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 1.29226,
              strokeOpacity: 1,
            }}
          />
        </g>
      </g>
    </g>
    <path
      style={{
        fontSize: "279.261px",
        fontFamily: "Gardenia-ExtraBold",
        letterSpacing: 0,
        wordSpacing: 0,
        fill: primaryColor,
        strokeWidth: 2.90897,
        strokeLinejoin: "round",
        strokeDasharray: "20.4458,20.4458",
        strokeDashoffset: 25.5574,
        paintOrder: "stroke fill markers",
      }}
      d="M494.835 37.08c-14.958 19.269-22.437 45.546-22.437 78.537 0 33.284 7.48 59.56 22.17 78.539 14.692 18.977 35.26 28.612 61.436 28.612 26.177 0 46.745-9.635 61.436-28.612 14.69-18.978 22.17-45.255 22.17-78.539 0-32.991-7.48-59.268-22.17-78.538-14.959-18.977-35.526-28.612-61.436-28.612-25.91 0-46.477 9.635-61.169 28.612zm23.506 78.537c0-46.13 12.555-69.195 37.663-69.195 25.108 0 37.663 23.065 37.663 69.195 0 46.13-12.555 69.196-37.663 69.196-25.108 0-37.663-23.065-37.663-69.196zm228.38-61.02c-15.225 0-32.053 9.927-40.867 24.817l-4.007-14.89c-9.616-6.131-26.444-6.131-37.129 0v148.025c5.076 3.212 12.02 4.964 20.835 4.964 9.082 0 16.294-1.752 21.37-4.964V110.946c5.341-12.554 14.423-19.853 23.238-19.853 9.349 0 14.69 7.299 14.69 19.853v101.603c5.61 3.212 12.555 4.964 20.836 4.964 8.814 0 16.026-1.752 21.636-4.964V103.94c0-29.488-16.294-49.342-40.601-49.342zM872.799 184.23c-2.137.876-4.274 1.46-6.41 1.46-4.541 0-6.678-3.212-6.678-9.635V4.964C854.635 1.751 847.423 0 838.608 0s-16.027 1.752-21.102 4.963v174.594c0 25.985 14.691 43.21 36.327 43.21 10.418 0 18.698-3.21 25.109-9.634 1.068-2.336 1.602-5.255 1.602-8.467 0-9.05-2.67-15.766-7.746-20.437zM997.005 59.852c-9.082 0-16.294 1.46-21.369 4.672L949.192 180.14 924.084 64.524c-4.541-3.212-11.753-4.672-21.636-4.672-10.15 0-17.897 1.46-22.972 4.672l41.135 146.857c4.808 2.628 10.418 4.672 17.095 5.548-4.273 21.897-16.828 33.283-43.272 38.247-2.404 3.795-3.74 8.759-3.74 14.598 0 9.05 2.672 14.89 8.281 17.81 39.266-3.504 64.374-24.817 75.593-63.94l45.409-159.12c-5.075-3.212-12.822-4.672-22.972-4.672z"
      id="text6"
      aria-label="Only"
    />
    <path
      style={{
        fontSize: "279.261px",
        fontFamily: "Gardenia-ExtraBold",
        letterSpacing: 0,
        wordSpacing: 0,
        fill: secondaryColor,
        strokeWidth: 2.90897,
        strokeLinejoin: "round",
        strokeDasharray: "20.4458,20.4458",
        strokeDashoffset: 25.5574,
        paintOrder: "stroke fill markers",
      }}
      d="M1146.32 171.382c-9.35 8.467-20.3 12.847-32.855 12.847-25.643 0-40.067-23.941-40.067-68.612 0-44.378 14.424-68.319 40.067-68.319 12.554 0 22.972 4.088 31.252 11.97 13.088-3.503 20.3-15.474 19.5-31.531-12.822-11.971-33.123-19.27-53.156-19.27-25.91 0-46.21 9.635-61.169 28.904-15.225 19.27-22.704 45.255-22.704 78.246 0 32.992 7.746 59.269 22.972 78.247 15.225 19.27 35.792 28.904 61.702 28.904 20.034 0 40.601-7.883 53.69-19.854.801-16.058-6.41-28.32-19.232-31.532zm120.467-116.785c-16.294 0-29.382 7.591-39.8 23.065V4.963C1221.912 1.752 1214.7 0 1205.618 0c-8.814 0-15.76 1.752-20.834 4.963V212.55c5.075 3.212 12.02 4.964 20.834 4.964 9.082 0 16.294-1.752 21.37-4.964V108.61c5.608-11.386 13.088-17.226 22.97-17.226 9.884 0 14.959 6.424 14.959 19.562v101.603c5.61 3.212 12.554 4.964 20.835 4.964 8.814 0 16.026-1.752 21.636-4.964V103.94c0-31.24-14.958-49.342-40.601-49.342zm192.587 137.223c-5.075-.876-7.48-4.964-7.48-12.555v-70.947c0-34.743-21.1-53.72-59.565-53.72-17.362 0-34.19 3.795-49.95 11.386-1.335 4.087-2.137 7.883-2.137 11.386 0 9.635 3.206 16.642 9.883 21.022 13.089-5.256 24.842-7.883 35.26-7.883 16.827 0 25.108 7.883 25.108 23.357v9.05h-16.027c-39.8 0-64.908 19.562-64.908 50.802 0 30.072 17.63 49.05 45.676 49.05 18.965 0 33.656-7.883 44.34-23.65 3.473 14.015 15.76 23.358 33.656 23.65 5.877-4.672 8.815-11.095 8.815-19.27 0-5.255-.801-9.05-2.67-11.678zm-48.881-17.81c-5.61 10.219-12.822 15.474-22.17 15.474-10.418 0-16.562-7.299-16.562-19.853 0-15.474 9.617-23.065 28.849-23.065h9.883zm229.715-119.413c-15.76 0-31.252 10.219-39.8 26.277-5.876-17.518-17.094-26.277-33.922-26.277-14.959 0-30.184 9.635-39.533 24.817l-4.007-14.89c-9.616-6.131-26.444-6.131-37.128 0v148.025c5.075 3.212 12.02 4.964 20.835 4.964 9.081 0 16.293-1.752 21.368-4.964V109.194c5.61-11.97 12.822-18.101 21.636-18.101 8.014 0 12.02 6.715 12.02 19.853v101.603c5.076 3.212 12.02 4.964 20.835 4.964 9.082 0 16.294-1.752 21.37-4.964V108.902c5.341-11.97 12.286-17.81 20.567-17.81 8.547 0 12.821 6.716 12.821 19.854v101.603c5.61 3.212 12.554 4.964 20.835 4.964 9.082 0 16.294-1.752 21.369-4.964V103.94c0-31.24-14.424-49.342-39.266-49.342zm147.179 168.17c17.362 0 31.252-7.59 41.67-22.772 10.15-14.89 15.224-35.328 15.224-61.313 0-51.677-19.499-84.085-50.75-84.085-15.76 0-30.718 8.467-40.067 22.481V4.963C1748.388 1.752 1741.176 0 1732.094 0c-8.814 0-15.759 1.752-20.834 4.963V212.55c5.61 3.212 14.424 4.964 26.444 4.964l12.821-14.89c8.815 12.554 22.972 20.145 36.862 20.145zm-10.418-36.494c-9.883 0-17.896-5.256-23.506-15.767v-61.312c5.877-11.97 13.89-17.81 24.308-17.81 14.69 0 22.704 16.934 22.704 46.423 0 30.656-8.547 48.466-23.506 48.466zm214.224 5.547c-5.075-.876-7.48-4.964-7.48-12.555v-70.947c0-34.743-21.101-53.72-59.565-53.72-17.362 0-34.19 3.795-49.95 11.386-1.336 4.087-2.137 7.883-2.137 11.386 0 9.635 3.205 16.642 9.883 21.022 13.089-5.256 24.841-7.883 35.259-7.883 16.828 0 25.108 7.883 25.108 23.357v9.05h-16.026c-39.8 0-64.908 19.562-64.908 50.802 0 30.072 17.629 49.05 45.676 49.05 18.965 0 33.656-7.883 44.34-23.65 3.473 14.015 15.76 23.358 33.656 23.65 5.877-4.672 8.815-11.095 8.815-19.27 0-5.255-.802-9.05-2.671-11.678zm-48.882-17.81c-5.609 10.219-12.821 15.474-22.17 15.474-10.417 0-16.56-7.299-16.56-19.853 0-15.474 9.615-23.065 28.847-23.065h9.883zm108.18-71.239c0-8.175 6.678-13.138 18.164-13.138 12.287 0 22.704 3.211 31.519 9.926 10.684-4.379 15.76-14.014 15.225-28.612-12.821-9.635-32.32-16.35-48.08-16.35-17.896 0-32.053 4.672-43.005 13.722-10.951 9.343-16.294 21.606-16.294 36.496 0 16.35 5.61 28.32 16.561 35.62 10.685 7.298 17.096 10.218 30.718 14.014 17.362 4.963 23.773 8.174 23.773 18.685 0 9.051-8.013 14.598-21.636 14.598-13.355 0-25.643-4.087-36.861-12.554-10.418 4.963-15.226 14.598-14.959 29.196 12.02 10.803 33.657 18.394 53.69 18.394 18.965 0 34.457-4.672 46.21-14.306 11.486-9.635 17.362-22.19 17.362-37.664 0-16.641-5.342-28.612-16.293-35.911-5.61-3.504-10.15-6.131-14.157-7.883-4.007-1.46-9.616-3.504-16.828-5.547-19.232-6.132-25.109-9.051-25.109-18.686z"
      id="text5"
      aria-label="Chambas"
    />
  </svg>
);

import React from 'react';

interface VerifiedIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const VerifiedIcon: React.FC<VerifiedIconProps> = ({ 
  className = "w-4 h-4", 
  size, 
  color 
}) => {
  const style = {
    width: size ? `${size}px` : undefined,
    height: size ? `${size}px` : undefined,
    fill: color || 'currentColor'
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      aria-label="Verified account" 
      className={className}
      style={style}
    >
      <g>
        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
      </g>
    </svg>
  );
};

export { OnlyChambasLogo, VerifiedIcon };