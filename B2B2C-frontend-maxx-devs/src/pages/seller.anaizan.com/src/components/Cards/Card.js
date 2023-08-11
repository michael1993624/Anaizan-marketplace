import React from "react";
import CardsStyle from "./Cards.module.css"
import StoriesStyle from "../../pages/Home/Stories/Stories.module.css"
import PostsStyle from "../../pages/Home/Posts/Posts.module.css"


const Card = ({imgHead, userImg, fullname, desc}) => {
  return (
    <>
      <div className={`${CardsStyle.card_style} ${StoriesStyle.div} ${PostsStyle.card}`}>
        <div className={CardsStyle.deco + " " + CardsStyle.top + " " + StoriesStyle.before}></div>
        
            <img className={StoriesStyle.imgH} src={imgHead} />
        
        <div className={CardsStyle.user + " " + PostsStyle.user}>
          <div className={CardsStyle.img + " " + PostsStyle.imgs}>
            <img src={userImg}  alt="avatar" />
          </div>
          <h5> {fullname} </h5>
        </div>
        <div className={CardsStyle.content + " " + StoriesStyle.contents}>
          <p>
            {desc}
          </p>
          <button>Read More</button>
        </div>
        <div className={CardsStyle.deco + " " + CardsStyle.bottom + " " + StoriesStyle.before}></div>
      </div>
    </>
  );
};

export default Card;
