import { css, keyframes } from "@emotion/react";
import { FC } from "react";

type Props = {
  row: number;
  column: number;
  isRed: boolean;
  num: number;
};

export const BigStars: FC<Props> = (props) => {
  const { row, column, isRed, num } = props;
  const size: number = 10;
  const starAnimation = keyframes`
    0% {
    opacity: 0;
  }
  25% {
    transform: scale(1.1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
  `;
  const starWrapStyle = (size: number) => [
    css`
      position: absolute;
      display: block;
      /* background-color: ${isRed ? "#d32e18" : "#fff"}; 星の色 */
      border-radius: 50%;
      opacity: 0;
      animation: ${starAnimation} 10s infinite;
      width: ${size}px;
      height: ${size}px;
      left: ${column * 20 - 10}%;
      top: ${row * 25 - 10}%;
      animation-delay: ${num + 2}s;
    `,
  ];
  const starStyle = () => [
    css`
      position: relative;
      width: 0px;
      height: 0px;
      border-bottom: 5px solid ${isRed ? "#d32e18" : "#fff"};
      box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.1); /* 星の影 */
      border-right: 7.5px solid transparent;
      border-left: 7.5px solid transparent;
      transform: rotate(-37deg);
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -7.5px;
        border-bottom: 5px solid ${isRed ? "#d32e18" : "#fff"};
        box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.1); /* 星の影 */
        border-right: 7.5px solid transparent;
        border-left: 7.5px solid transparent;
        transform: rotate(-71.5deg);
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: -7.5px;
        border-bottom: 5px solid ${isRed ? "#d32e18" : "#fff"};
        box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.1); /* 星の影 */
        border-right: 7.5px solid transparent;
        border-left: 7.5px solid transparent;
        transform: rotate(71.5deg);
      }
    `,
  ];
  return (
    <div css={starWrapStyle(size)}>
      <div css={starStyle()}></div>
    </div>
  );
};
