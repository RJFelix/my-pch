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

//         position: "relative",
export default function CircularImage(props) {
  return (
    <div
      style={{
        display: "inline-block",
        boxShadow: "0px 0px 28px -5px rgba(128,128,128,1)",
        WebkitBoxShadow: "0px 0px 28px -5px rgba(128,128,128,1)",
        MozBoxShadow: "0px 0px 28px -5px rgba(128,128,128,1)",
        width: props.size + "px",
        height: props.size + "px",
        overflow: "hidden",
        borderRadius: "50%",
        margin: "0 auto"
      }}
    >
      <a href={props.href}>
          <img 
            src={props.src}
            alt={props.alt}
            style={{
              width: "auto",
              height: "100%",
            }} />
        </a>
    </div>
  );
}

//  marginLeft: (props.size / 4) + "px"