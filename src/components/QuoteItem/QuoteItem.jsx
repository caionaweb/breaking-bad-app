import React from "react";
import stl from "./QuoteItem.module.scss";
import { getRandomInt } from "utils";
import { Link } from "react-router-dom";

const QuoteItem = ({ id, quote, author }) => {
  const generateRandomPoints = (minSpread, maxSpread) => {
    let points = {};
    points.close = `${getRandomInt(-4, 50)},${getRandomInt(minSpread, maxSpread)}`;
    points.a = `${getRandomInt(50, 200)},${getRandomInt(minSpread, maxSpread)}`;
    points.b = `${getRandomInt(200, 400)},${getRandomInt(minSpread, maxSpread)}`;
    points.c = `${getRandomInt(400, 600)},${getRandomInt(minSpread, maxSpread)}`;
    points.d = `${getRandomInt(600, 800)},${getRandomInt(minSpread, maxSpread)}`;
    points.e = `${getRandomInt(800, 900)},${getRandomInt(minSpread, maxSpread)}`;
    points.f = `${getRandomInt(900, 1004)},${getRandomInt(minSpread, maxSpread)}`;

    return points;
  };

  const randomizePath = () => {
    const topPoints = generateRandomPoints(10, 50);
    const bottomPoints = generateRandomPoints(160, 200);
    const facingPoints = `M${topPoints.close} L${topPoints.a} L${topPoints.b} L${topPoints.c} L${topPoints.d} L${topPoints.e} L${topPoints.f} L${bottomPoints.f} L${bottomPoints.e} L${bottomPoints.d} L${bottomPoints.c} L${bottomPoints.b} L${bottomPoints.a} L-4,100 L${topPoints.close} Z`;
    const bottomStroke = `M${bottomPoints.f} L${bottomPoints.e} L${bottomPoints.d} L${bottomPoints.c} L${bottomPoints.b} L${bottomPoints.a} L-4,100`;
    return [bottomStroke, facingPoints];
  };

  const [bottomStroke, facingPoints] = randomizePath();

  const quoteHolder = (
    <div className={stl.quote}>
      <svg preserveAspectRatio="none" className={stl.quote__shape}>
        <defs>
          <linearGradient id={`quote__gradient-${id}`} x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2B99D6" />
            <stop offset="30%" stopColor="#2B99D6" />
            <stop offset="50%" stopColor="#72D0EA" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path className={stl.quote__shapePath} fill={`url(#quote__gradient-${id})`} d={`${facingPoints}`} />
        <path className={stl.quote__strokePath} d={`${bottomStroke}`} fill="none" />
      </svg>
      {
        <blockquote className={stl.quote__content}>
          <p className={stl.quote__text}>{quote}</p>
          <Link className={stl.quote__author} to={`/characters/${author.replace(" ", "+")}`}>
            &mdash; {author}
          </Link>
        </blockquote>
      }
    </div>
  );

  return quoteHolder;
};

export default QuoteItem;
