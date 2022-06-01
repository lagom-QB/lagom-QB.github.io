import React, { useState, useEffect } from "react";

const buildAnimationStyle = (type: AnimationType, duration: string): object => {
  return {
    display: "inline-block",
    animation: `${type} ${duration}`,
    animationFillMode: "forwards",
    margin: "0 18px",
  };
};

type AnimationType = "fade" | "slideDown" | "slideUp" | "squish" | "blur";

type TextSwapProps = {
  strings: string[];
  interval?: number;
  animationType?: AnimationType;
  animationDuration?: string;
};

const TextSwap = ({
  strings,
  interval = 3000,
  animationType = "slideDown",
  animationDuration = "3s",
}: TextSwapProps) => {
  const defaultStyle = buildAnimationStyle(animationType, animationDuration);
  const [currString, setCurrString] = useState(strings[0]);
  const [animationStyle, setAnimationStyle] = useState(defaultStyle);

  useEffect(() => {
    const timer = setInterval(() => {
      const currIndex: number = strings.indexOf(currString);
      const nextIndex: number =
        currIndex < strings.length - 1 ? currIndex + 1 : 0;
      setCurrString(strings[nextIndex]);
    }, interval);
    return () => {
      setAnimationStyle({});
      clearInterval(timer);
      setAnimationStyle(animationStyle);
    };
  }, [currString, strings, interval, animationStyle]);

  return (
    <div key={currString} style={animationStyle}>
      {currString}
    </div>
  );
};

export default TextSwap;
