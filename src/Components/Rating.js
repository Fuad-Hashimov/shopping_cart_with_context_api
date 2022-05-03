import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((m, i) => (
        <span key={i} style={style} onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar fontSize="25px" />
          ) : (
            <AiOutlineStar fontSize="25px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
