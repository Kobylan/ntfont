import React from "react";

const Skeleton = (props) => {
  const { width, height, className } = props;
  const styleSheet = document.styleSheets[0];
  const name =
    "move-gradient-" + Math.floor(Date.now() + Math.random() * 1000000);
  const keyframes = `@keyframes ${name} {
  from{background-position: ${-width}px;}
  to {
    background-position: ${width}px;
  }
}`;
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  let style = {
    width: `${width}px`,
    height: `${height}px`,
    background: `linear-gradient(
        90deg,
        rgba(224, 224, 224, 1) 15%,
        rgba(255, 255, 255, 1) 50%,
        rgba(224, 224, 224, 1) 85%
  )`,
    animation: `${name} ${0.75 + width / 100}s infinite linear`,
  };

  return (
    <div className={`animation-skeleton rounded ${className}`} style={style} />
  );
};

export default Skeleton;
