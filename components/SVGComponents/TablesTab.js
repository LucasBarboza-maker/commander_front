import React from "react";
import { SvgXml } from "react-native-svg";  

export default function SvgComponent(){  
  const svgMarkup = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.75 9H4.75V11H14.75V9ZM16.75 2H15.75V0H13.75V2H5.75V0H3.75V2H2.75C1.64 2 0.76 2.9 0.76 4L0.75 18C0.75 19.1 1.64 20 2.75 20H16.75C17.85 20 18.75 19.1 18.75 18V4C18.75 2.9 17.85 2 16.75 2ZM16.75 18H2.75V7H16.75V18ZM11.75 13H4.75V15H11.75V13Z" fill="#85A708"/>
</svg>

  
  `;
  const ArrowLeftIconSvg = () => <SvgXml xml={svgMarkup} width="32" />;  

  return <ArrowLeftIconSvg />;
}