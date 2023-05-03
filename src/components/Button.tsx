import { css } from "@emotion/react";
import React, { FC } from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const Button: FC<Props> = (props) => {
  const { count, setCount } = props;
  const onClick = () => {
    if (count === 0) setTimeout(() => setCount(0), 2000);
    setCount(count + 1);
  };
  return (
    <div onClick={onClick} css={styles.button}>
      {count}
    </div>
  );
};

const styles = {
  button: css`
    position: absolute;
    width: 80px;
    height: 80px;
    margin: -40px;
    left: 70%;
    top: 35%;
    opacity: 0;

    @media screen and (max-width: 768px) {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      width: 80px;
      height: 80px;
      margin: -40px;
    }
  `,
};
