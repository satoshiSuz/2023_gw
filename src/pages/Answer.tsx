import { css, keyframes } from "@emotion/react";
import React from "react";

export const Answer = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.letter}>
        <div css={styles.textWrapper}>
          <p css={styles.text}>
            おっと、見つかってしまったようだね。
            <br />
            君たちもなかなかやるじゃあないか。
            <br />
            次が最後の問題だよ。
            <br />
            <span css={styles.question}>
              Q.君が星へ旅するとき現れる言葉は？
            </span>
            これが解けたらちょっとしたご褒美を用意しているよ。
            <br />
            心して解きたまえ。
          </p>
          <img css={styles.img} src="/img/sign.png" />
        </div>
      </div>
    </div>
  );
};

const letterAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
const styles = {
  wrapper: css`
    opacity: 0;
    animation: ${letterAnimation} 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
  `,
  letter: css`
    display: flex;
    justify-content: center;
    margin: 20px 20px;
    height: 70vh;
    border: 1px solid rgba(100, 100, 100, 0.5);
    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.24);
    padding: 15px;
    max-width: 450px;
  `,
  textWrapper: css``,
  text: css`
    font-size: 1rem;
    line-height: 2rem;
  `,
  question: css`
    font-size: 1rem;
    display: block;
    margin: 40px 10px;
    border-bottom: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  `,
  img: css`
    width: 200px;
    float: right;
  `,
};
