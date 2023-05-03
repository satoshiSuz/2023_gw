import { css } from "@emotion/react";
import { stars } from "../js/stars";
import { useEffect, useState } from "react";
import { Stars } from "../components/Stars";
import { BigStars } from "../components/BigStars";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const array = Array(500);
  array.fill(0);
  const arrayBigStars = [
    { row: 1, column: 2, red: false },
    { row: 2, column: 3, red: true },
    { row: 3, column: 3, red: false },
    { row: 4, column: 5, red: true },
    { row: 2, column: 1, red: false },
  ];
  console.log(array);
  useEffect(() => {
    stars();
  }, []);
  useEffect(() => {
    if (count === 10) {
      navigate("answer");
    }
  }, [count]);
  return (
    <div css={styles.wrapper}>
      <div css={styles.stars}>
        {array.map((val, index) => {
          return <Stars key={index} seed={index}></Stars>;
        })}
        {arrayBigStars.map((val, index) => {
          return (
            <BigStars
              key={index}
              row={val.row}
              column={val.column}
              isRed={val.red}
              num={index}
            ></BigStars>
          );
        })}
        <div css={styles.textWrapper}>
          <p css={styles.text}>夜空に星が瞬いている...</p>
        </div>
        <Button setCount={setCount} count={count} />
      </div>
    </div>
  );
};

const styles = {
  wrapper: css`
    position: relative;
  `,
  stars: css`
    position: relative;
    width: 100%; /* 星空の横幅 */
    height: 100vh; /* 星空の縦幅 */
    background-image: linear-gradient(
      0deg,
      #00dedc,
      #115d89,
      #080f1c
    ); /* 星空の背景色 */
    overflow: hidden; /* 星が枠外にはみ出すのを防ぐ */
  `,
  text: css`
    position: absolute;
    bottom: 20%;
    color: #fff;
  `,
  textWrapper: css`
    display: flex;
    justify-content: center;
  `,
};
