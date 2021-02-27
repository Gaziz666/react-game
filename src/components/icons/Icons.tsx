import React from 'react';

type IconProps = {
  width: string;
  height: string;
};

const Close: React.FC<IconProps> = ({ width, height }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const AudioOn: React.FC<IconProps> = ({ width, height }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05A4.47 4.47 0 0016.5 12zM14 3.23v2.06a7 7 0 010 13.42v2.06a9 9 0 000-17.54z" />
  </svg>
);

const AudioOff: React.FC<IconProps> = ({ width, height }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A9 9 0 0014 3.23v2.06A7 7 0 0119 12zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

const BombCountIcon: React.FC<IconProps> = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)" filter="url(#filter0_d)" fill="#2F0F0F">
      <path d="M44.6 14.7l-.88-.98a1.25 1.25 0 00-1.9 0c-.52.57-.52 1.5 0 2.07l.9.98c.26.29.6.43.94.43.34 0 .69-.14.95-.43.52-.57.52-1.5 0-2.07zM39.26 13.72a1.25 1.25 0 00-1.89 0l-.9.98c-.51.57-.51 1.5 0 2.07.27.29.61.43.95.43.35 0 .69-.14.95-.43l.89-.98c.52-.57.52-1.5 0-2.07zM44.6 7.85c-.25-.29-.6-.43-.94-.43-.34 0-.68.14-.94.43l-.9.98c-.52.57-.52 1.5 0 2.07.53.58 1.38.58 1.9 0l.89-.97c.52-.58.52-1.5 0-2.08z" />
      <path d="M39.37 9.19l-1.9-2.08a3.77 3.77 0 00-5.67 0l-.63.7-1.89-2.08a1.25 1.25 0 00-1.89 0l-3.57 3.91a13.17 13.17 0 00-5.57-1.23c-3.81 0-7.4 1.63-10.08 4.58-5.56 6.1-5.56 16.03 0 22.14a13.56 13.56 0 0010.08 4.57c3.82 0 7.4-1.62 10.09-4.57a16.35 16.35 0 004.17-11.07c0-2.14-.39-4.2-1.12-6.11l3.57-3.92c.52-.57.52-1.5 0-2.08l-1.9-2.07.63-.7a1.26 1.26 0 011.9 0l1.89 2.08c.26.29.6.43.94.43.34 0 .69-.14.95-.43.52-.57.52-1.5 0-2.07zm-14.8 21.78a8.47 8.47 0 01-6.3 2.86 8.47 8.47 0 01-6.3-2.86 1.57 1.57 0 010-2.08 1.25 1.25 0 011.88 0c1.18 1.3 2.75 2 4.41 2 1.66 0 3.23-.7 4.41-2a1.25 1.25 0 011.9 0c.51.57.51 1.5 0 2.08z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" transform="translate(4)" d="M0 0h41v45H0z" />
      </clipPath>
      <filter
        id="filter0_d"
        x="0"
        y="-2"
        width="49"
        height="53"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

const StepsIcon: React.FC<IconProps> = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)" filter="url(#filter0_d)" fill="#2F0F0F">
      <path d="M10.08 28.47c0-.16 0-.33.02-.49H8.54a3.88 3.88 0 00-3.88 3.88v5.09c0 .58.47 1.05 1.05 1.05h4.55a3.15 3.15 0 01-.18-1.05v-8.48zM17.61 25.08l.02-.49h-1.56a3.88 3.88 0 00-3.88 3.88v8.48c0 .58.47 1.05 1.05 1.05h4.55a3.15 3.15 0 01-.18-1.05V25.08zM33.01 18.34h-1.88a3.88 3.88 0 00-3.88 3.88v14.73c0 .58.47 1.05 1.06 1.05h7.53c.58 0 1.05-.47 1.05-1.05V22.22a3.88 3.88 0 00-3.88-3.88zM25.14 22.22a6 6 0 01.09-1.02H23.6a3.88 3.88 0 00-3.88 3.88v11.87c0 .58.47 1.05 1.06 1.05h4.54a3.15 3.15 0 01-.18-1.05V22.22zM39.29 7.24a1.05 1.05 0 00-.85-.71l-3.75-.55-1.67-3.4a1.05 1.05 0 00-1.9 0l-1.67 3.4-3.74.55a1.05 1.05 0 00-.59 1.8l2.71 2.64-.64 3.72a1.05 1.05 0 001.53 1.12l3.35-1.76 3.35 1.76a1.05 1.05 0 001.52-1.17l-.63-3.67 2.71-2.65c.29-.28.4-.7.27-1.08z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" transform="translate(4 2)" d="M0 0h36v36H0z" />
      </clipPath>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

const TimerIcon: React.FC<IconProps> = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)" fill="#2F0F0F">
      <path d="M32.44 10.34a16.04 16.04 0 00-10.39-4.71V4.1h1.55a1.05 1.05 0 000-2.11h-5.2a1.05 1.05 0 000 2.1h1.55v1.53a16 16 0 00-7.5 2.41l-1-1a2.56 2.56 0 00-3.66 0L6.26 8.56c-1 1.01-1 2.65 0 3.65l1.01 1.01a16.12 16.12 0 00-2.44 8.58c0 4.32 1.68 8.4 4.73 11.45A16.05 16.05 0 0021 38c4.32 0 8.38-1.69 11.44-4.75a16.11 16.11 0 004.73-11.45c0-4.33-1.68-8.4-4.73-11.46zm-2.72 12.51h2.2a11 11 0 01-9.87 9.88v-2.21a1.05 1.05 0 10-2.1 0v2.21a11 11 0 01-9.86-9.88h2.2a1.05 1.05 0 000-2.1h-2.2a11 11 0 019.86-9.9v2.23a1.05 1.05 0 102.1 0v-2.22a11 11 0 019.86 9.88h-2.2a1.05 1.05 0 000 2.11z" />
      <path d="M23.6 21.19h-1.49v-4.27a1.05 1.05 0 00-2.1 0v5.32c0 .59.47 1.06 1.05 1.06h2.54a1.05 1.05 0 000-2.11z" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-1"
        y="0"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);
// prettier-ignore
export {
  Close,
  AudioOn,
  AudioOff,
  BombCountIcon,
  StepsIcon,
  TimerIcon,
};
