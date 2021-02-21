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

// const RSLogo: React.FC<IconProps> = ({ width, height }: IconProps) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     height={height}
//     viewBox="0 0 24 24"
//     width={width}
//   >
//     <path d="M0 0h24v24H0z" fill="none" />
//   <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59
// 19 19 17.59 13.41 12z" />
//   </svg>
// );

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

export { Close, AudioOn, AudioOff };
