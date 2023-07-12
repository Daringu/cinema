import { useState } from "react";

function useHover(callBackOver, callBackOut) {
  const [isHovered, setHovered] = useState(false);
  const onMouseOver = (e) => {
    if (callBackOver) {
      callBackOver(e);
    }
    setHovered(true);
  };
  const onMouseOut = (e) => {
    if (callBackOut) {
      callBackOut(e);
    }
    setHovered(false);
  };
  return [isHovered, onMouseOver, onMouseOut];
}

export { useHover };
