import React from "react";
import screen from "../../../assets/img/Screenshot.png"
import DynStyle from "./Dyn.module.css"


const DYN = () => {
  return (
    <>
      <section className = {DynStyle.dyn_style}>
        <div className={DynStyle.left}>
          <img src={screen} alt="img" />
        </div>
        <div className={DynStyle.right}>
          <h5>DID YOU KNOW?</h5>
          <h3>
            You can get started on Anaizan.com for Free and use the Anaizan
            deliver service.
          </h3>
          <p>
            Anyone can start selling on Anaizan.com. With our additional
            services, Anaizan can take care of your deliveries, inspections,
            verifications of the status of suppliers.
          </p>
          <p>
            Are you an individual and you want to sell your item urgently?
            Anaizan has the most advanced distribution plans. With the service
            Delivered by Anaizan, you can drop off your products at Anaizan
            distribution centers and we take care of the preparation, packaging,
            shipping and customer service for these products. Anaizan Delivered
            service can help you scale your business, save time and reach more
            customers.
          </p>
          <button>En savoir plus</button>
        </div>
      </section>
    </>
  );
};

export default DYN;