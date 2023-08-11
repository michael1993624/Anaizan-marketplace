import React, { useEffect, useState } from "react";
import BodyStyle from "./Body.module.css"
import card_1 from "../../../assets/img/card1.png"
import card_2 from "../../../assets/img/card2.png"
import card_3 from "../../../assets/img/card3.png"

const PlatformBody = () => {

  const [tab, setTabs] = useState(0)


  const  scrol = () => {
    let y = window.scrollY,
    box = document.getElementById("box"),
    bloc2 = document.querySelector(".bloc2");
    
    if (y > 1000  ) {
      box.classList.add (`${BodyStyle.h}`)
      bloc2.classList.add (`${BodyStyle.left}`)
    } else if (y < 1000) {
      bloc2.classList.remove (`${BodyStyle.left}`)
      box.classList.remove (`${BodyStyle.h}`)
    } else if(y == 1800) {
      
      console.log (bloc2.className)
      console.log (box.className)
      bloc2.classList.remove (`${BodyStyle.left}`)
      box.classList.remove (`${BodyStyle.h}`)
    }
  }

  useEffect (()=> {
    document.addEventListener ('scroll',scrol);
    return () => window.removeEventListener ('scroll', scrol()) 
  });

  const boxMenu = (tabmenu, tabs, setFunct) => {
    return (
      <div className={BodyStyle.box} id="box">
        {
          tabmenu.map(({ title, items, index }, id) => {
            return (
              <div className={BodyStyle.bloc} key={id}>
                <h4> {title} </h4>
                <ol>
                  {items &&
                    items.map(({ item }, i) => {
                      return (
                        <li key={i} className={tabs == (i + index) ? BodyStyle.active : BodyStyle.no_active}
                          onClick={() => setFunct(i + index)}> 
                            <a href={`#${(i+index+1)}`} > {item} </a>  
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            )
          })
        }
      </div>
    )
  }


  const group_menu1 = [
    {
      title: "Open an account",
      index: 0,
      items: [
        { item: "Open an account" },
        { item: "Post your products" },
        { item: "Reply to inquiries" },
        { item: "Protect orders and payment" },
      ]
    },
    {
      title: "Open an account",
      index: 4,
      items: [
        { item: "Open an account" },
        { item: "Post your products" },
        { item: "Reply to inquiries" },
        { item: "Protect orders and payment" },
      ]
    },
    {
      title: "Open an account",
      index: 8,
      items: [
        { item: "Open an account" },
        { item: "Post your products" },
        { item: "Reply to inquiries" },
        { item: "Protect orders and payment" },
      ]
    },


  ]

  const group_menu2 = [
    { item: "Stay connected with buyers" },
    { item: "Nurture your relationships" },
    { item: "Optimize sales" },
  ]

  const group_menu3 = [
    { item: "Hone in on keywords" },
    { item: " Showcase Products" },
    { item: "Respond to RFQs" },
    { item: "Exhibit at online trade show" },
    { item: "join site-Wide promotions" }
  ]

  const card = (title, text, textBtn, img) => {
    return (
      <div className={BodyStyle.card}>
        <div className={BodyStyle.info_group}>
          <div>
            <h2 className="title-h2"> {title} </h2>
            <p>
              {text}
            </p>
          </div>
          <button> {textBtn} </button>
        </div>
          <img src={img} alt="card" />
      </div>
    )
  }

  const cardHead = (title, text) => {
    return (
      <div className={BodyStyle.intro}>
        <h2 className="title-h2"> {title} </h2>
        <p>
          {text}
        </p>
      </div>
    )
  }

  const card1Text = ` As a new seller, you may have multiple types of selling
   packages/plans to choose from, depending on the country your
   business is in. Follow a few easy steps to register for an
   Alibaba.com seller account and get your Business
   Verification process done to build trust between you and
   your potential buyers. You can also choose to have a
   dedicated account manager who will help you through the
   process. `

  const card2Text = `
   After receiving an inquiry, you're more likely to have
   additional interactions with the potential buyer if you
   respond within four hours. To stay on top of all your
   messages, you can download the AliSupplier mobile app. That
   way you'll immediately know when you have new messages from
   interested businesses.
   `

  const card3Text = `
   Take advantage of a suite of advertising tools to help you
   focus on your audience and increase exposure to the most
   interested buyers. Target based on geography, click history,
   and more – and only pay per click.
   `

  const head1Text = `
   As an Alibaba.com seller, you're getting more than a storefront in
   a global marketplace. You're getting an end-to-end wholesale
   service platform calibrated to help you grow your business, and
   help you provide services to your buyers. Here's how to get up and
   running so you can start making sales.
   `

  const head2Text = `
   Once you start getting inquiries and orders, it's time to optimize
   your process with tools built specifically for B2B wholesale
   trade.
   `

  const head3Text = `
  You've set up your account, and the orders are coming in. If
  you're ready to expand even more, take your business to the next
  level by using marketing tools to increase awareness and sales.
   `

  return (
    <>
      <div className={BodyStyle.platform_style}>
        <div className={BodyStyle.section}>
          {cardHead("Start selling", head1Text)}
          <div className={BodyStyle.info}>
            {boxMenu(group_menu1, tab, setTabs)}
            <div className={`${BodyStyle.bloc_content} bloc2 d-flex`}>
              <div id="1" className={BodyStyle.first_block}>
                {card("Open An Account", card1Text, "Chat with consultant", card_1
                )}
                <div className={BodyStyle.inner_card}>
                  <h5>What is Business Verification ?</h5>
                  <p>
                    Business Verification is a critical component of Alibaba.com
                    seller membership as it establishes the validity of your
                    company's status and authorized contact person. Business
                    Verficaition helps buyers trust you and want to do business
                    with you compared to seller accounts that did not go through a
                    business verification.
                  </p>
                </div>
              </div>
              <div id="2" className={BodyStyle.first_block}>
                {card("Stay Connected with buyers", card2Text, "Get the App", card_2)}
              </div>
              <div id="3" className={BodyStyle.first_block}>
                {card("Hone in on keywords", card3Text, "Get the App", card_3)}
              </div>
              <div id="4" className={BodyStyle.first_block}>
                {card("Stay Connected with buyers", card2Text, "Get the App", card_2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformBody;