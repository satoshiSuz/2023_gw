import { css } from "@emotion/react";
import React, { FC } from "react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const Button: FC<Props> = (props) => {
  const { count, setCount } = props;
  const onClick = () => {
    if (count === 0) setTimeout(() => setCount(0), 1000);
    setCount(count + 1);
  };
  return (
    <button onClick={onClick} css={styles.button}>
      {count}
    </button>
  );
};

const styles = {
  button: css`
    position: absolute;
    width: 80px;
    height: 80px;
    margin: -40px;
    left: 70%;
    top: 65%;
    opacity: 0;
  `,
};
