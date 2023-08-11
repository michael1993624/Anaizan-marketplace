import React from "react";
import homeMarket from "../../../assets/img/Homep.png"

import StoriesStyle from "./Stories.module.css"
import Card from "../../../components/Cards/Card";
import { profilePerson } from "../Posts/Posts";
import user from "../../../assets/img/profileImg.png"

const Stories = () => {
  return (
    <>
      <section className={StoriesStyle.stories}>
        <h2 className="title-h2">
          <span>Success </span> Stories
        </h2>
        <div className={StoriesStyle.story}>
          <div className={StoriesStyle.video_card}>
              <video controls>

              </video>
          </div>
          <div className={StoriesStyle.text_card}>
            <div className={StoriesStyle.avatar}>
              <img src={user} alt="user" />
            </div>
            <h2>Pacôme Developpeur</h2>
            <h6>Anaizan Technology</h6>
            <p>
              Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and
              resellers. They all sell on Anaizan for a reason: 300 million
              customers shop our stores worldwide.
            </p>
            <small>Read More</small>
          </div>
        </div>
        <div className={`${StoriesStyle.card} d-flex`}>
          <h2 className="title-h2">Our <span>Blog</span></h2>
          <div className={StoriesStyle.contain}>
            {
              profilePerson.map((list, i) => {
                return <div id={StoriesStyle.cards} key={i}>
                  <Card id={StoriesStyle.cards} imgHead={list.img} userImg={list.userImg}
                    fullname={list.fullname} desc={list.desc} />
                </div>
              })
            }
          </div>
        </div>
        <div className={`${StoriesStyle.div2} d-flex`}>
          <div className={StoriesStyle.text}>
            <h2 className="title-h2"> Grow your <span> Business </span> </h2>
            <p>
              One of the largest B2B wholesale marketplaces in the world.
              Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped
              sellers reach buyers around the world for more than 20 years,
              now with an end-to-end suite of tools built for B2B.
            </p>
            <p>
              One of the largest B2B wholesale marketplaces in the world.
              Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped
              sellers reach buyers around the world for more than 20 years,
              now with an end-to-end suite of tools built for B2B.
            </p>
            <p>
              One of the largest B2B wholesale marketplaces in the world.
              Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped
              sellers reach buyers around the world for more than 20 years,
              now with an end-to-end suite of tools built for B2B.
            </p>
          </div>
          <div className={StoriesStyle.img}>
            <img src={homeMarket} />
          </div>
        </div>
      </section>

    </>
  );
};

export default Stories;
