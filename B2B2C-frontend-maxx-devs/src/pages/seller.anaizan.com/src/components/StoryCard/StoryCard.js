import React from "react";
import { BiBuildingHouse, BiFlag } from "react-icons/bi";
import StoryCardStyle from "./StoryCard.module.css"

const StoryCard = ({ list }) => {

  return (
    <div className={StoryCardStyle.block}>
      {
        list.map((list, i) => {
          return (
            <div className={StoryCardStyle.story_card} key={i}>
              <div className={StoryCardStyle.top}>
                <img src={list.img} alt="user" />
              </div>
              <div className={StoryCardStyle.bottom}>
                <p className={StoryCardStyle.tag}> {list.tag} </p>
                <p className={StoryCardStyle.story}>
                  {list.story}
                </p>
                <div className={StoryCardStyle.user}>
                  <div className={StoryCardStyle.img}>
                    <img src={list.avatar} />
                  </div>
                  <h5> {list.names} </h5>
                </div>
                <div className={StoryCardStyle.contact}>
                  <p>
                    <BiBuildingHouse />
                    {list.company}
                  </p>
                  <p>
                    <BiFlag /> KR
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default StoryCard;
