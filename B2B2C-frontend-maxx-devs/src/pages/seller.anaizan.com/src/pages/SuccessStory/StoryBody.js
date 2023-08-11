import React from "react";
import images from "../../assets/img"

import StorieBodyStyle from "./StorieBody.module.css"
import FirstSection from "../../shared/FirstSection/FirstSection";
import LastSection from "../../shared/LastSection/LastSection";
import StoryCard from "../../components/StoryCard/StoryCard";

const StoryBody = () => {

  const listStory = [
    {
      img: images.story_user,
      tag: "Tool sets",
      story: `
          Alibaba.com is essential and irreplaceable because once customers
          make a purchase on Alibaba.com, they would like to visit again and
          again.`,
      avatar: images.story_user,
      names: "ShungBark, Park",
      company: "CONOTEC CO., LTD."
    },
    {
      img: images.story_user,
      tag: "Tool sets",
      story: `
          Alibaba.com is essential and irreplaceable because once customers
          make a purchase on Alibaba.com, they would like to visit again and
          again.`,
      avatar: images.story_user,
      names: "ShungBark, Park",
      company: "CONOTEC CO., LTD."
    },
    {
      img: images.story_user,
      tag: "Tool sets",
      story: `
          Alibaba.com is essential and irreplaceable because once customers
          make a purchase on Alibaba.com, they would like to visit again and
          again.`,
      avatar: images.story_user,
      names: "ShungBark, Park",
      company: "CONOTEC CO., LTD."
    },
    {
      img: images.story_user,
      tag: "Tool sets",
      story: `
          Alibaba.com is essential and irreplaceable because once customers
          make a purchase on Alibaba.com, they would like to visit again and
          again.`,
      avatar: images.story_user,
      names: "ShungBark, Park",
      company: "CONOTEC CO., LTD."
    },
    {
      img: images.story_user,
      tag: "Tool sets",
      story: `
          Alibaba.com is essential and irreplaceable because once customers
          make a purchase on Alibaba.com, they would like to visit again and
          again.`,
      avatar: images.story_user,
      names: "ShungBark, Park",
      company: "CONOTEC CO., LTD."
    },
    {
      img: images.story_user,
      tag: "Tool sets",
      story: `
          Alibaba.com is essential and irreplaceable because once customers
          make a purchase on Alibaba.com, they would like to visit again and
          again.`,
      avatar: images.story_user,
      names: "ShungBark, Park",
      company: "CONOTEC CO., LTD."
    }
  ]
  return (
    <>
    <FirstSection
        title={"Success "}
        b={"Story"}
        sub={"How sellers like you succeed in business with Anaizan.com"}
        img={images.story_bg}
      />
      <div className={StorieBodyStyle.story_style}>
        <div className={StorieBodyStyle.filter}>
          <h5>Filters:</h5>
          <select name="">
            <option selected disabled> By Country / Region</option>
          </select>
          <select name="">
            <option selected disabled>  By Industry </option>
          </select>
          <select name="">
            <option selected disabled> By Business Objective </option>
          </select>
        </div>
        <StoryCard list={listStory} />
        <div className={StorieBodyStyle.cta}>
          <button> Load More </button>
        </div>
      </div>
      <LastSection /> 
    </>
  );
};

export default StoryBody;
