import React from "react";

const Skeleton = (props) => {
  const { width, height, className } = props;
  const styleSheet = document.styleSheets[0];
  const name =
    "move-gradient-" + Math.floor(Date.now() + Math.random() * 1000000);
  const keyframes = `@keyframes ${name} {
  from{background-position: ${-width}px;}
  to {
    background-position: calc(-100% + ${width * 2}px);
  }
}`;
  try {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  } catch (e) {}
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    background: `linear-gradient(
        90deg,
        rgba(224, 224, 224, 1) 0px,
        rgba(255, 255, 255, 1) ${width / 2}px,
        rgba(224, 224, 224, 1) ${width}px
  )`,
    animation: `${name} 3s infinite linear`,
  };

  return (
    <div className={`animation-skeleton rounded ${className}`} style={style} />
  );
};

export default Skeleton;
