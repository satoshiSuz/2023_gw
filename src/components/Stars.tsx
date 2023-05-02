import { FC, useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";

type Props = {
  seed: number;
};

export const Stars: FC<Props> = (props) => {
  const { seed } = props;
  const minSize = 1;
  const maxSize = 2;
  const [randomX, setRandomX] = useState(0);
  const [randomY, setRandomY] = useState(0);
  const [randomS, setRandomS] = useState(0);
  const [randomT, setRandomT] = useState(0);
  useEffect(() => {
    setRandomX(Math.random());
    setRandomY(Math.random());
    setRandomS(Math.random());
    setRandomT(Math.random());
  }, []);

  const size: number = randomS * (maxSize - minSize) + minSize;
  const starAnimation = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
  `;
  const starStyle = (size: number) => [
    css`
      position: absolute;
      display: block;
      background-color: #fff; /* 星の色 */
      border-radius: 50%;
      box-shadow: 0 0 4px 2px rgba(#fff, 0.2); /* 星の影 */
      opacity: 0;
      animation: ${starAnimation} 5s infinite;
      width: ${size}px;
      height: ${size}px;
      left: ${randomX * 100}%;
      top: ${randomY * 100}%;
      animation-delay: ${randomT * 10}s;
    `,
  ];
  return <span css={starStyle(size)}></span>;
};
