import React from "react";
import Card from "../../../components/Cards/Card";
import imgHead from "../../../assets/img/images.png"
import userImgs from "../../../assets/img/profileImg.png"
import PostsStyle from "./Posts.module.css"

export const profilePerson = [
  {
    img: imgHead,
    userImg: userImgs,
    fullname: "ReachBillions",
    desc: `
    Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and
    resellers. They all sell on Anaizan for a reason: 300 million
    customers shop our stores worldwide.
    `
  },
  {
    img: imgHead,
    userImg: userImgs,
    fullname: "ReachBillions",
    desc: `
    Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and
    resellers. They all sell on Anaizan for a reason: 300 million
    customers shop our stores worldwide.
    `
  },
  {
    img: imgHead,
    userImg: userImgs,
    fullname: "ReachBillions",
    desc: `
    Fresh new startups and Fortune 500s. B2B and B2C. Brand owners and
    resellers. They all sell on Anaizan for a reason: 300 million
    customers shop our stores worldwide.
    `
  }
]

const Posts = () => {
  return (
    <>
      <section className={PostsStyle.posts_style}>
        <h2 className="title-h2">
          Anaizan.com is a Leading <span> E-Commerce </span>Platform That Helps
          SMEs Go Global
        </h2>
        <div className={PostsStyle.cards}>
          {
            profilePerson.map((list, i) => {
              return <Card userImg={list.userImg}
                fullname={list.fullname} desc={list.desc} key={i} />
            })
          }
        </div>
      </section>
    </>
  );
};

export default Posts;