import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.56 21.99H19.22C20.06 21.99 20.75 21.35 20.85 20.53L22.5 4.05H17.5V0H15.53V4.05H10.56L10.86 6.39C12.57 6.86 14.17 7.71 15.13 8.65C16.57 10.07 17.56 11.54 17.56 13.94V21.99ZM0.5 20.99V20H15.53V20.99C15.53 21.54 15.08 21.99 14.52 21.99H1.51C0.95 21.99 0.5 21.54 0.5 20.99ZM15.53 13.99C15.53 5.99 0.5 5.99 0.5 13.99H15.53ZM0.52 16H15.52V18H0.52V16Z" fill="#8F8F8F"/>
  </svg>
  `;
  const ArrowLeftIconSvg = () => <SvgXml xml={svgMarkup} width="32" />;  

  return <ArrowLeftIconSvg />;
}