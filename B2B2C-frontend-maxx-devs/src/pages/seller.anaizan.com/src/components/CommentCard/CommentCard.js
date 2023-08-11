import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

import CommentCardStyle from "./CommentCard.module.css"

const CommentCard = ({ img }) => {
  return (
    <>
      <div className={CommentCardStyle.Comment}>
        <img src={img} alt="comment img" />
        <div className={CommentCardStyle.comment_area}>
          <RiDoubleQuotesR />
          <p>
            One of the largest B2B wholesale marketplaces in the world. Founded
            in 1999 by Jack Ma,
          </p>
          <p>
            One of the largest B2B wholesale marketplaces in the world. Founded
            in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped
            sellers reach buyers around the world for more than 20 years, now
            with an end-to-end suite of tools built for B2B.
          </p>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
