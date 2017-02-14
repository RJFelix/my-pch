import React from "react";

/*
*  CONTENTS:
*    CircularImage: a circular image  
*/

/*
*  CircularImage
*  Props:
*    src: image URL
*    href: link (optional)
*    alt: alt text
*    size: diameter of image, in px
*/

export default function CircularImage(props) {
  const linkTarget = props.href;
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        width: props.size + "px",
        height: props.size + "px",
        overflow: hidden,
        borderRadius: "50%"
      }}
    >
      {linkTarget &&
        <a href={props.href}>
      }
          <img 
            src={props.src}
            alt={props.alt}
            style={{
              width: "auto",
              height: "100%",
              marginLeft: (props.size / 4) + "px"
            }} />
            
      {linkTarget &&
        </a>
      }
    </div>
  );
}