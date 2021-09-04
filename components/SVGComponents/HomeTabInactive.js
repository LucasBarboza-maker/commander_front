import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5406 14.54C13.7342 15.3465 13.7342 16.6535 14.5406 17.4594C15.3465 18.2658 16.6542 18.2658 17.46 17.4594C18.2665 16.6529 18.2665 15.3458 17.46 14.54C16.6535 13.7342 15.3465 13.7342 14.5406 14.54ZM16 0C7.16323 0 0 7.16323 0 16C0 24.8368 7.16323 32 16 32C24.8368 32 32 24.8368 32 16C32 7.16323 24.8368 0 16 0ZM24.1381 9.55161L19.8819 18.8645C19.6761 19.3149 19.3149 19.6761 18.8645 19.8819L9.55226 24.1381C8.47806 24.629 7.37097 23.5219 7.86194 22.4477L12.1187 13.1348C12.3246 12.6845 12.6858 12.3233 13.1361 12.1174L22.4484 7.86129C23.5226 7.37097 24.629 8.47742 24.1381 9.55161Z" fill="#8F8F8F"/>
                    </svg>
                    `;
  const HomeTabInactiveIconSvg = () => <SvgXml xml={svgMarkup} width="32" />;  

  return <HomeTabInactiveIconSvg/>;
}